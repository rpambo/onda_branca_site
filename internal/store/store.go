package store

import (
	"context"
	"database/sql"
	"time"

	"github.com/rpambo/onda_branca_site/types"
)

var (
	QueryContextTime	= 5 * time.Second
)

type Storage struct {
	Teacher interface {
		Create(context.Context, *types.Teacher) error
	}
}

func NewStorage(db *sql.DB) Storage{
	return Storage{
		Teacher: &TeacherStore{db},
	}
}