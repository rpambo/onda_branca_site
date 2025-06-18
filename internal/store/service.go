package store

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	"github.com/lib/pq"
	"github.com/rpambo/onda_branca_site/types"
)

type ServicesStore struct {
	db	*sql.DB
}

func (s *ServicesStore) Create(ctx context.Context, service *types.Services) error {
    query := `
        INSERT INTO services(type, name, image_url, modules, start_date, end_date, created_at, updated_at)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id, type, name, image_url, modules, start_date, end_date, created_at, updated_at
    `
    
    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    err := s.db.QueryRowContext(
        ctx,
        query,
        service.Type,       // $1
        service.Name,        // $2
        service.Image.URL,  // $3
        pq.Array(service.Modules), // $4 (using pq.Array for PostgreSQL arrays)
        service.Start,       // $5
        service.End,         // $6
        time.Now(),          // $7
        time.Now(),          // $8
    ).Scan(
        &service.ID,
        &service.Type,
        &service.Name,
        &service.Image.URL,
        pq.Array(&service.Modules), // For array scanning
        &service.Start,
        &service.End,
        &service.CreatedAt,
        &service.UpdatedAt,
    )

    if err != nil {
        return err
    }

    return nil
}


func (s *ServicesStore) GetAllServices(ctx context.Context) ([]types.Services, error){
    query := `SELECT id, name, type, modules, image_url, start_date, end_date, created_at, updated_at FROM services`

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

        if err := row.Scan(&t.ID, &t.Name, &t.Type, pq.Array(&t.Modules), &image.URL, &t.Start, &t.End, &t.CreatedAt, &t.UpdatedAt); err != nil {
            return nil, err
        } 

        t.Image.URL = image.URL
        serveices = append(serveices, t)
    }

    return serveices, nil
}

func (s *ServicesStore) GetServiceById(ctx context.Context, ServiceId int64) (*types.Services, error){
    query := `SELECT id, name, type, modules, image_url, start_date, end_date, created_at, updated_at FROM services WHERE id = $1`

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()

    var updatedService types.Services
    var image types.Image
    row := s.db.QueryRowContext(ctx, query, ServiceId)
    if err := row.Scan(
		&updatedService.ID,
		&updatedService.Name,
		&updatedService.Type,
		pq.Array(&updatedService.Modules),
		&image.URL,
		&updatedService.Start,
		&updatedService.End,
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
    if service.Modules != nil {
        query += fmt.Sprintf("modules = $%d, ", counter)
        args = append(args, pq.Array(service.Modules))
        counter++
    }
    if service.Start != "" {
        query += fmt.Sprintf("start_date = $%d, ", counter)
        args = append(args, service.Start)
        counter++
    }
    if service.End != "" {
        query += fmt.Sprintf("end_date = $%d, ", counter)
        args = append(args, service.End)
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