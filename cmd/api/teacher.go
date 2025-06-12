package main

import (
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"
	"strings"
	"time"

	"github.com/rpambo/onda_branca_site/types"
)

func (app *application) CreateTeacher(w http.ResponseWriter, r *http.Request) {
    // 1. Limitar tamanho do upload (10MB)

    err := os.MkdirAll("uploads", os.ModePerm)
    if err != nil {
	    app.logger.Errorw("failed to create uploads directory", "error", err)
	    app.internalServerError(w, r, err)
	    return
    }
    
    r.Body = http.MaxBytesReader(w, r.Body, 10<<20)
    
    // 2. Parse multipart form
    if err := r.ParseMultipartForm(10 << 20); err != nil {
        app.badRequestResponse(w, r, fmt.Errorf("tamanho máximo excedido (10MB)"))
        return
    }

    // 3. Validar campos simples
    payload := types.TeacherCreate{
        FirstName: r.FormValue("first_name"),
        LastName:  r.FormValue("last_name"),
        Position:  r.FormValue("position"),
        Image:     types.Image{},
    }

    // 4. Processar imagem
    file, header, err := r.FormFile("image")
    if err != nil {
        app.badRequestResponse(w, r, fmt.Errorf("imagem é obrigatória"))
        return
    }
    defer file.Close()

    // 5. Ler primeiros 512 bytes para verificação do tipo
    buff := make([]byte, 512)
    if _, err = file.Read(buff); err != nil {
        app.internalServerError(w, r, err)
        return
    }

    // 6. Validar tipo de imagem
    contentType := http.DetectContentType(buff)
    if !strings.HasPrefix(contentType, "image/") {
        app.badRequestResponse(w, r, fmt.Errorf("arquivo deve ser uma imagem válida"))
        return
    }

    // 7. Validar extensão
    ext := filepath.Ext(header.Filename)
    validExts := map[string]bool{
        ".jpg":  true,
        ".jpeg": true,
        ".png":  true,
        ".webp": true,
    }
    
	if !validExts[strings.ToLower(ext)] {
        app.badRequestResponse(w, r, fmt.Errorf("formato de imagem inválido. Use JPG, PNG ou WebP"))
        return
    }

    // 8. Ler o arquivo completo
    if _, err = file.Seek(0, io.SeekStart); err != nil {
        app.internalServerError(w, r, err)
        return
    }

    fileBytes, err := io.ReadAll(file)
    if err != nil {
        app.internalServerError(w, r, err)
        return
    }

    // 9. Validar tamanho da imagem (máx 5MB)
    if len(fileBytes) > 5<<20 {
        app.badRequestResponse(w, r, fmt.Errorf("imagem muito grande (máx 5MB)"))
        return
    }

	// 9.5 Gerar nome único e caminho para salvar
	fileName := fmt.Sprintf("%d%s", time.Now().UnixNano(), ext)
	uploadPath := "uploads/" + fileName

	// 9.6 Salvar a imagem
	if err := os.WriteFile(uploadPath, fileBytes, 0644); err != nil {
		app.internalServerError(w, r, err)
		return
	}

	// 10. Validar struct completa
	payload.Image = types.Image{
		URL: "/" + uploadPath,
	}
	if err := Validate.Struct(payload); err != nil {
		// Remove a imagem, se já tiver sido salva
		_ = os.Remove(uploadPath)
		app.badRequestResponse(w, r, err)
		return
	}

	// 11. Criar no banco
	ctx := r.Context()
	teacher := &types.Teacher{
		FirstName: payload.FirstName,
		LastName:  payload.LastName,
		Position:  payload.Position,
		Image:     payload.Image,
		CreatedAt: time.Now().Format(time.RFC3339),
		UpdatedAt: time.Now().Format(time.RFC3339),
	}
	
	if err := app.store.Teacher.Create(ctx, teacher); err != nil {
		_ = os.Remove(uploadPath) // rollback se der erro
		app.internalServerError(w, r, err)
		return
	}

	if err := app.jsonResponse(w, http.StatusCreated, teacher); err != nil {
		app.internalServerError(w, r, err)
		return 
	}
}