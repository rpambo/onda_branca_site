package cache

import (
	"context"

	"github.com/redis/go-redis/v9"
	"github.com/rpambo/onda_branca_site/types"
)

type Storage struct {
	Publication interface {
		Get(context.Context) ([]types.Publication ,error)
		Set(context.Context, []types.Publication) error
	}

	Services interface {
		Get(context.Context) ([]types.Services ,error)
		Set(context.Context, []types.Services) error
	}
}

func NewRedisStorage(rdb *redis.Client) Storage {
	return Storage{
		Publication: &PublicacaoRedisStore{rdb},
		Services: &ServicesStoreRedis{rdb},
	}
}