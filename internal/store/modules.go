package store

import (
	"context"
	"database/sql"

	"github.com/rpambo/onda_branca_site/types"
)

type ModulesStore struct {
	db *sql.DB
}

func (s *ModulesStore) Create(ctx context.Context, modules *types.Mudules) error {
	query := `
		INSERT INTO trainings (training_id, title, description, order_number)
		VALUES ($1, $2, $3, $4)
		RETURNING id, training_id, title, description, order_number
	`

	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	err := s.db.QueryRowContext(
		ctx,
		query,
		modules.TrainingId,		// $1
		modules.Title,			// $2
		modules.Description,    // $3
		modules.Order_number,   // $4
	).Scan(
		&modules.ID,
		&modules.TrainingId,
		&modules.Title,
		&modules.Description,
		&modules.Order_number,
	)

	if err != nil {
		return err
	}

	return nil
}