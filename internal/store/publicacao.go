package store

import (
	"context"
	"database/sql"
	"time"

	"github.com/rpambo/onda_branca_site/types"
)

type PublicacaoStore struct {
	db *sql.DB
}

func (s *PublicacaoStore) Create(ctx context.Context, pubicacao *types.Publication) error {
	query := `
				INSERT INTO publicaction(title, image_url, category, content, created_at, updated_at)
				VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, title, image_url, category, content, created_at, updated_at`
	
	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	err := s.db.QueryRowContext(
		ctx,
		query,
		pubicacao.Title,
		pubicacao.Image.URL,
		pubicacao.Category,
		pubicacao.Content,
		time.Now(),
		time.Now(),
	).Scan(
		&pubicacao.ID,
		&pubicacao.Title,
		&pubicacao.Image.URL,
		&pubicacao.Category,
		&pubicacao.Content,
		&pubicacao.CreatedAt,
		&pubicacao.UpdatedAt,
	)

	if err != nil {
		return err
	}

	return nil
}

func (s *PublicacaoStore) GetAllPub(ctx context.Context) ([]types.Publication, error){
	query := 
			`
		SELECT id, title, image_url, category, content, created_at, updated_at FROM publicaction 
		ORDER BY created_at DESC;
	`

	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	row, err := s.db.QueryContext(ctx, query)
	
	if err != nil{
		return nil, err
	}
	defer row.Close()

	var pub []types.Publication
	for row.Next(){
		var v types.Publication
		var image types.Image

		if err := row.Scan(&v.ID, &v.Title, &image.URL ,&v.Category, &v.Content, &v.CreatedAt, &v.UpdatedAt); err != nil{
			return nil, err
		}

		v.Image = image

		pub = append(pub, v)
	}

	return pub, nil
}

func (s *PublicacaoStore) GetbySearch(ctx context.Context, q string) ([]types.Publication, error){
	query := `
		SELECT id, title, image_url, category, content, created_at, updated_at FROM publicaction 
		WHERE content ILIKE '%' || $1 || '%' 
		OR title ILIKE '%' || $1 || '%' 
		OR category ILIKE '%' || $1 || '%'
		ORDER BY created_at DESC;
	`

	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	row, err := s.db.QueryContext(ctx, query, q)
	
	if err != nil{
		return nil, err
	}
	defer row.Close()

	var pub []types.Publication
	for row.Next(){
		var v types.Publication
		var image types.Image

		if err := row.Scan(&v.ID, &v.Title, &image.URL ,&v.Category, &v.Content, &v.CreatedAt, &v.UpdatedAt); err != nil{
			return nil, err
		}

		v.Image = image

		pub = append(pub, v)
	}

	return pub, nil
}