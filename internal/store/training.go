package store

import (
	"context"
	"database/sql"

	"github.com/rpambo/onda_branca_site/types"
)

type TrainigStore struct {
	db *sql.DB
}

func (s *TrainigStore) Create(ctx context.Context, training *types.Trainning) error {
	query := `
		INSERT INTO trainings (service_id, opening_date, is_pre_sale, pre_sale_price, final_price)
		VALUES ($1, $2, $3, $4, $5)
		RETURNING id, service_id, opening_date, is_pre_sale, pre_sale_price, final_price
	`

	ctx, cancel := context.WithTimeout(ctx, QueryContextTime)
	defer cancel()

	err := s.db.QueryRowContext(
		ctx,
		query,
		training.ServiceId,       // $1
		training.OpeningDate,     // $2
		training.IsPreSale,       // $3
		training.PreSalePrice,    // $4
		training.FinalPrice,      // $5
	).Scan(
		&training.ID,
		&training.ServiceId,
		&training.OpeningDate,
		&training.IsPreSale,
		&training.PreSalePrice,
		&training.FinalPrice,
	)

	if err != nil {
		return err
	}

	return nil
}
