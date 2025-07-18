package store

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"github.com/rpambo/onda_branca_site/types"
)

type ServicesStore struct {
	db	*sql.DB
}

func (s *ServicesStore) Create(ctx context.Context, service *types.Services) error {
    query := `
        INSERT INTO services(type, name, image_url, description, created_at, updated_at)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, type, name, image_url, description, created_at, updated_at
    `

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    now := time.Now()

    err := s.db.QueryRowContext(
        ctx,
        query,
        service.Type,
        service.Name,
        service.Image.URL,
        service.Description,
        now,
        now,
    ).Scan(
        &service.ID,
        &service.Type,
        &service.Name,
        &service.Image.URL,
        &service.Description,
        &service.CreatedAt,
        &service.UpdatedAt,
    )

    return err
}


func (s *ServicesStore) GetAllServices(ctx context.Context) ([]types.Services, error){
    query := `SELECT id, name, type, image_url, description, created_at, updated_at FROM services`

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    row, err := s.db.QueryContext(ctx, query)

    if err != nil{
        return nil, err
    }
    defer row.Close()

    serveices := []types.Services{}

    for row.Next(){
        var t types.Services
        var image types.Image

        if err := row.Scan(&t.ID, &t.Name, &t.Type, &image.URL, &t.Description, &t.CreatedAt, &t.UpdatedAt); err != nil {
            return nil, err
        } 

        t.Image.URL = image.URL
        serveices = append(serveices, t)
    }

    return serveices, nil
}

func (s *ServicesStore) GetServiceById(ctx context.Context, ServiceId int64) (*types.Services, error){
    query := `SELECT id, name, type, image_url, description, created_at, updated_at FROM services WHERE id = $1`

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    var updatedService types.Services
    var image types.Image
    row := s.db.QueryRowContext(ctx, query, ServiceId)
    if err := row.Scan(
		&updatedService.ID,
		&updatedService.Name,
		&updatedService.Type,
		&image.URL,
        &updatedService.Description,
		&updatedService.CreatedAt,
		&updatedService.UpdatedAt,
	); err != nil {
		return nil, err
	}
	updatedService.Image = image
    return &updatedService, nil
}

func (s *ServicesStore) PartialUpdate(ctx context.Context, service *types.Services) error {
    query := `UPDATE services SET `
    args := []interface{}{}
    counter := 1

    if service.Name != "" {
        query += fmt.Sprintf("name = $%d, ", counter)
        args = append(args, service.Name)
        counter++
    }
    if service.Type != "" {
        query += fmt.Sprintf("type = $%d, ", counter)
        args = append(args, service.Type)
        counter++
    }
    if service.Image.URL != "" {
        query += fmt.Sprintf("image_url = $%d, ", counter)
        args = append(args, service.Image.URL)
        counter++
    }

    if service.Description != "" {
        query += fmt.Sprintf("image_url = $%d, ", counter)
        args = append(args, service.Description)
        counter++
    }
    
    // updated_at sempre
    query += fmt.Sprintf("updated_at = $%d ", counter)
    args = append(args, time.Now())
    counter++

    // WHERE id
    query += fmt.Sprintf("WHERE id = $%d", counter)
    args = append(args, service.ID)

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    _, err := s.db.ExecContext(ctx, query, args...)
    if err != nil{
        return err
    }
    return nil
}

func (s *ServicesStore) DeleteServices(ctx context.Context, seriviceId int64) error{
    query := `DELETE FROM services WHERE id = $1`

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    _, err := s.db.ExecContext(ctx, query, seriviceId)

    if err != nil {
        return err
    }

    return nil
}