package main

import (
	"bytes"
	"database/sql"
	"errors"
	"fmt"
	"io"
	"net/http"
	"path/filepath"
	"strconv"
	"strings"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/nedpals/supabase-go"
	"github.com/rpambo/onda_branca_site/types"
)

func (app *application) ServicesHandler(w http.ResponseWriter, r *http.Request){
	// Limit request body size to 10MB
	r.Body = http.MaxBytesReader(w, r.Body, 10<<20)

	// Parse multipart form data
	if err := r.ParseMultipartForm(10 << 20); err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("maximum file size exceeded (10MB)"))
		return
	}

	// Extract and validate form fields
	payload := types.CreateServices{
		Type: r.FormValue("type"),
		Name:  r.FormValue("name"),
		Image:     types.Image{},
		Description: r.FormValue("description"),
	}

	/*modulesRaw := r.FormValue("modules")
	var modules []string
	if err := json.Unmarshal([]byte(modulesRaw), &modules); err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("modules must be a valid JSON array"))
		return
	}
	payload.Modules = modules"*/

	// Read uploaded image file
	file, header, err := r.FormFile("image")
	if err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("image is required"))
		return
	}
	defer file.Close()

	// Detect MIME type
	buff := make([]byte, 512)
	if _, err = file.Read(buff); err != nil {
		app.internalServerError(w, r, err)
		return
	}
	
	contentType := http.DetectContentType(buff)
	if !strings.HasPrefix(contentType, "image/") {
		app.badRequestResponse(w, r, fmt.Errorf("file must be a valid image"))
		return
	}

	// Validate file extension
	ext := strings.ToLower(filepath.Ext(header.Filename))
	if !map[string]bool{".jpg": true, ".jpeg": true, ".png": true, ".webp": true}[ext] {
		app.badRequestResponse(w, r, fmt.Errorf("invalid image format. Use JPG, PNG, or WebP"))
		return
	}

	// Read full file content
	if _, err = file.Seek(0, io.SeekStart); err != nil {
		app.internalServerError(w, r, err)
		return
	}

	fileBytes, err := io.ReadAll(file)
	if err != nil {
		app.internalServerError(w, r, err)
		return
	}
	if len(fileBytes) > 10<<20 {
		app.badRequestResponse(w, r, fmt.Errorf("image exceeds 10MB"))
		return
	}

	// Ensure Supabase client is configured
	if app.supabase == nil {
		app.internalServerError(w, r, errSupabaseNotConfigured)
		return
	}

	// Generate unique filename and upload image to Supabase Storage
	fileName := fmt.Sprintf("teachers/%d%s", time.Now().UnixNano(), ext)
	uploadResp := app.supabase.Storage.
		From("teacherstest").
		Upload(fileName, bytes.NewBuffer(fileBytes), &supabase.FileUploadOptions{Upsert: false})

	if uploadResp.Key == "" {
		app.internalServerError(w, r, fmt.Errorf("image upload failed"))
		return
	}

	// Construct public image URL
	imageURL := fmt.Sprintf("%s/storage/v1/object/public/%s", app.config.SupabaseURL, uploadResp.Key)
	payload.Image = types.Image{URL: imageURL}

	// Validate final payload structure
	if err := Validate.Struct(payload); err != nil {
		_ = app.supabase.Storage.From("teacherstest").Remove([]string{uploadResp.Key})
		app.badRequestResponse(w, r, err)
		return
	}

	// Prepare teacher record for database
	now := time.Now().Format(time.RFC3339)
	service := &types.Services{
		Type: payload.Type,
		Name:  payload.Name,
		Image:     payload.Image,
		Description: payload.Description,
		CreatedAt: now,
		UpdatedAt: now,
	}

	// Insert teacher into the database
	if err := app.store.Services.Create(r.Context(), service); err != nil {
		_ = app.supabase.Storage.From("teacherstest").Remove([]string{uploadResp.Key})
		app.internalServerError(w, r, err)
		return
	}

	// Respond with JSON
	if err := app.jsonResponse(w, http.StatusCreated, service); err != nil {
		app.internalServerError(w, r, err)
	}
}

func (app *application) GetAllServicesHandler(w http.ResponseWriter, r *http.Request){

	ctx := r.Context()
	
	services, err := app.cacheStorage.Services.Get(ctx)
	if  err != nil {
		app.internalServerError(w, r, err)
		return
	}

	if services == nil{
		services, err = app.store.Services.GetAllServices(ctx)
		if err != nil{
			app.internalServerError(w, r, err)
			return
		}

		_ = app.cacheStorage.Services.Set(ctx, services)
	}

	if err := app.jsonResponse(w, http.StatusOK, services); err != nil{
		app.internalServerError(w, r, err)
		return
	}
}

func (app *application) PartialUpdate(w http.ResponseWriter, r *http.Request) {
	ctx := r.Context()

	// Get service ID
	id := chi.URLParam(r, "id")
	if id == "" {
		app.badRequestResponse(w, r, fmt.Errorf("missing service id"))
		return
	}
	serviceID, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("invalid service id"))
		return
	}

	// Limit and parse form
	r.Body = http.MaxBytesReader(w, r.Body, 10<<20)
	if err := r.ParseMultipartForm(10 << 20); err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("maximum file size exceeded (10MB)"))
		return
	}

	// Create service object to hold updates
	service := &types.Services{
		ID: serviceID,
	}

	// Process optional fields
	if v := r.FormValue("type"); v != "" {
		service.Type = v
	}
	if v := r.FormValue("name"); v != "" {
		service.Name = v
	}
	if v := r.FormValue("description"); v != "" {
		service.Name = v
	}
	/*"if v := r.FormValue("modules"); v != "" {
		var modules []string
		if err := json.Unmarshal([]byte(v), &modules); err != nil {
			app.badRequestResponse(w, r, fmt.Errorf("modules must be a valid JSON array"))
			return
		}
		service.Modules = modules
	}"*/

	// Process image upload if present
	file, header, err := r.FormFile("image")
	if err == nil {
		defer file.Close()

		// Image validation
		buff := make([]byte, 512)
		if _, err := file.Read(buff); err != nil {
			app.internalServerError(w, r, err)
			return
		}
		contentType := http.DetectContentType(buff)
		if !strings.HasPrefix(contentType, "image/") {
			app.badRequestResponse(w, r, fmt.Errorf("file must be a valid image"))
			return
		}

		ext := strings.ToLower(filepath.Ext(header.Filename))
		if !map[string]bool{".jpg": true, ".jpeg": true, ".png": true, ".webp": true}[ext] {
			app.badRequestResponse(w, r, fmt.Errorf("invalid image format"))
			return
		}

		if _, err = file.Seek(0, io.SeekStart); err != nil {
			app.internalServerError(w, r, err)
			return
		}

		fileBytes, err := io.ReadAll(file)
		if err != nil {
			app.internalServerError(w, r, err)
			return
		}
		if len(fileBytes) > 10<<20 {
			app.badRequestResponse(w, r, fmt.Errorf("image exceeds 10MB"))
			return
		}

		fileName := fmt.Sprintf("teachers/%d%s", time.Now().UnixNano(), ext)
		uploadResp := app.supabase.Storage.
			From("teacherstest").
			Upload(fileName, bytes.NewBuffer(fileBytes), &supabase.FileUploadOptions{Upsert: false})

		if uploadResp.Key == "" {
			app.internalServerError(w, r, fmt.Errorf("image upload failed"))
			return
		}
		service.Image.URL = fmt.Sprintf("%s/storage/v1/object/public/%s", app.config.SupabaseURL, uploadResp.Key)
	}

	// Perform the update
	if err := app.store.Services.PartialUpdate(ctx, service); err != nil {
		app.internalServerError(w, r, err)
		return
	}
	// Fetch the updated service
	updatedService, err := app.store.Services.GetServiceById(ctx, service.ID)
	if err != nil{
		app.internalServerError(w, r, err)
		return
	}
	// Respond with the updated object
	if err := app.jsonResponse(w, http.StatusOK, updatedService); err != nil {
		app.internalServerError(w, r, err)
		return
	}
}

func (app *application) DeleteServiceHandler(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    // Get service ID from URL path
    id := chi.URLParam(r, "id")
    if id == "" {
        app.badRequestResponse(w, r, fmt.Errorf("missing service id"))
        return
    }
    serviceID, err := strconv.ParseInt(id, 10, 64)
    if err != nil {
        app.badRequestResponse(w, r, fmt.Errorf("invalid service id"))
        return
    }

    // First check if service exists (optional but recommended)
    existingService, err := app.store.Services.GetServiceById(ctx, serviceID)
    if err != nil {
        if errors.Is(err, sql.ErrNoRows) {
            app.internalServerError(w, r, err)
        } else {
            app.internalServerError(w, r, err)
        }
        return
    }

    // If service has an image URL, delete the image from storage (optional)
    if existingService.Image.URL != "" {
        // Extract object path from URL
        urlParts := strings.Split(existingService.Image.URL, "/public/")
        if len(urlParts) == 2 {
            objectPath := urlParts[1]
            err := app.supabase.Storage.
                From("teacherstest").
                Remove([]string{objectPath})
			
			if err.Message != ""{
				app.logger.Info(err.Message)
				return
			} 
        }
    }

    // Delete the service from database
    err = app.store.Services.DeleteServices(ctx, serviceID)
    if err != nil {
        app.internalServerError(w, r, err)
        return
    }

	// Prepare success response
	data := map[string]interface{}{
		"message": "service deleted successfully",
		"id":      serviceID,
	}

    // Return success response
    writeJSON(w, http.StatusOK, data)
}