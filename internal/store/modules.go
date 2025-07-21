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
		INSERT INTO training_modules (training_id, title, description, order_number)
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

func (s *ModulesStore) GetByIdServices(ctx context.Context, idServices int64) ([]types.ModuleWithDetails, error) {
    query := `SELECT

    	tm.id AS module_id,
    	tm.title AS module_title,
    	tm.description AS module_description,
    	tm.order_number,
    	tm.training_id,

    	td.id AS training_id,
    	td.opening_date,
    	td.is_pre_sale,
    	td.pre_sale_price,
    	td.final_price,
    	td.service_id,

    	s.id AS service_id,
    	s.type AS service_type,
    	s.name AS service_name,
    	s.image_url,
    	s.description AS service_description,
		s.created_at,
		s.updated_at

		FROM training_modules tm
		JOIN training_details td ON td.id = tm.training_id
		JOIN services s ON s.id = td.service_id
		WHERE s.id = $1
		ORDER BY tm.order_number;
	`

    ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
    defer cancel()
	rows, err := s.db.QueryContext(ctx, query, idServices)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var modules []types.ModuleWithDetails

	for rows.Next() {
		var m types.ModuleWithDetails

		err := rows.Scan(
			// Module
			&m.ID,
			&m.Title,
			&m.Description,
			&m.OrderNumber,
			&m.TrainingID,

			// Training
			&m.Training.ID,
			&m.Training.OpeningDate,
			&m.Training.IsPreSale,
			&m.Training.PreSalePrice,
			&m.Training.FinalPrice,
			&m.Training.ServiceId,

			// Service
			&m.Service.ID,
			&m.Service.Type,
			&m.Service.Name,
			&m.Service.Image.URL,
			&m.Service.Description,
			&m.Service.CreatedAt,
			&m.Service.UpdatedAt,
		)
		if err != nil {
			return nil, err
		}

		modules = append(modules, m)
	}

	return modules, nil
}