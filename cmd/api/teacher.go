package main

import (
	"bytes"
	"errors"
	"fmt"
	"io"
	"net/http"
	"path/filepath"
	"strings"
	"time"

	"github.com/nedpals/supabase-go"
	"github.com/rpambo/onda_branca_site/types"
)

var errSupabaseNotConfigured = errors.New("supabase storage is not configured")

// CreateTeacher handles the creation of a new teacher, including image upload
// to Supabase Storage and storing metadata in the database.
func (app *application) CreateTeacher(w http.ResponseWriter, r *http.Request) {
	// Limit request body size to 10MB
	r.Body = http.MaxBytesReader(w, r.Body, 10<<20)

	// Parse multipart form data
	if err := r.ParseMultipartForm(10 << 20); err != nil {
		app.badRequestResponse(w, r, fmt.Errorf("maximum file size exceeded (10MB)"))
		return
	}

	// Extract and validate form fields
	payload := types.TeacherCreate{
		FirstName: r.FormValue("first_name"),
		LastName:  r.FormValue("last_name"),
		Position:  r.FormValue("position"),
		Image:     types.Image{},
	}

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
	teacher := &types.Teacher{
		FirstName: payload.FirstName,
		LastName:  payload.LastName,
		Position:  payload.Position,
		Image:     payload.Image,
		CreatedAt: now,
		UpdatedAt: now,
	}

	// Insert teacher into the database
	if err := app.store.Teacher.Create(r.Context(), teacher); err != nil {
		_ = app.supabase.Storage.From("teacherstest").Remove([]string{uploadResp.Key})
		app.internalServerError(w, r, err)
		return
	}

	// Respond with JSON
	if err := app.jsonResponse(w, http.StatusCreated, teacher); err != nil {
		app.internalServerError(w, r, err)
	}
}

func (app *application) GetAllTeacherHandler(w http.ResponseWriter, r *http.Request){
       ctx := r.Context()

       teacher, err := app.store.Teacher.GetAllTeacher(ctx)

       if err != nil {
        app.internalServerError(w, r, err)
        return
       }

       if err := app.jsonResponse(w, http.StatusOK, teacher); err != nil {
        app.internalServerError(w, r, err)
        return
       }
}