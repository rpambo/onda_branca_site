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
		GetAllTeacher(context.Context) ([]types.Teacher, error)
	}
	Services interface {
		Create(context.Context, *types.Services) error
		GetAllServices(context.Context) ([]types.Services, error)
		PartialUpdate(context.Context, *types.Services) error
		GetServiceById(context.Context, int64) (*types.Services, error)
		DeleteServices(context.Context, int64) error
	}
	Publication interface{
		Create(context.Context, *types.Publication) error
		GetAllPub(context.Context) ([]types.Publication, error)
		GetbySearch(context.Context, string) ([]types.Publication, error)
	}
}

func NewStorage(db *sql.DB) Storage{
	return Storage{
		Teacher: &TeacherStore{db},
		Services: &ServicesStore{db},
		Publication: &PublicacaoStore{db},
	}
}