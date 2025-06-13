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

func (s *TeacherStore) GetAllTeacher (ctx context.Context) ([]types.Teacher,error){
	query := `SELECT id, first_name, last_name, position, image_url, created_at, updated_at
			FROM teachers`

	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	row, err := s.db.QueryContext(ctx, query)

	if err != nil{
		return nil, err
	}
	defer row.Close()

	var teacher  []types.Teacher

	for row.Next(){
		var t types.Teacher
		var imageURL string

		if err := row.Scan(&t.ID, &t.FirstName, &t.LastName, &t.Position, &imageURL, &t.CreatedAt, &t.UpdatedAt); err != nil{
			return nil, err
		}

		t.Image = types.Image{ URL: imageURL}

		teacher = append(teacher, t)
	}

	if err := row.Err(); err != nil{
		return nil, err
	}

	return teacher, nil
}