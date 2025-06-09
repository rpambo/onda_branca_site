package store

import (
	"context"
	"database/sql"
)

type TeacherStore struct {
	db		*sql.DB
}

func (s* TeacherStore) Create(ctx context.Context) error {
	return nil
}