package store

import (
	"context"
	"database/sql"
	"time"

	"github.com/rpambo/onda_branca_site/types"
)

type TeacherStore struct {
	db *sql.DB
}

func (s *TeacherStore) Create(ctx context.Context, teacher *types.Teacher) error {
	query := `INSERT INTO teachers (first_name, last_name, position, image_url, created_at, updated_at) 
	          VALUES($1, $2, $3, $4, $5, $6)
	          RETURNING id, first_name, last_name, position, image_url, created_at, updated_at`

	ctx, cancel := context.WithTimeout(ctx, 5*time.Second) // Use proper timeout
	defer cancel()

	err := s.db.QueryRowContext(
		ctx,
		query,
		teacher.FirstName,
		teacher.LastName,
		teacher.Position,
		teacher.Image.URL,
		time.Now(),
		time.Now(),
	).Scan(
		&teacher.ID,
		&teacher.FirstName,
		&teacher.LastName,
		&teacher.Position,
		&teacher.Image.URL,
		&teacher.CreatedAt,
		&teacher.UpdatedAt,
	)

	if err != nil {
		return err
	}

	return nil
}