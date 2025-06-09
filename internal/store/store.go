package store

import (
	"context"
	"database/sql"
)


type Storage struct {
	Teacher interface {
		Create(context.Context) error
	}
}

func NewStoarge(db *sql.DB) Storage{
	return Storage{
		Teacher: &TeacherStore{db},
	}
}