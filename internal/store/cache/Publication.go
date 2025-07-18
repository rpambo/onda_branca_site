package cache

import (
	"context"
	"encoding/json"
	"time"

	"github.com/redis/go-redis/v9"
	"github.com/rpambo/onda_branca_site/types"
)

const publicationCacheKey = "publications:all"
const PubExpTime = time.Minute

type PublicacaoRedisStore struct {
	rdb *redis.Client
}

func (s *PublicacaoRedisStore) Get(ctx context.Context) ([]types.Publication, error) {

	data, err := s.rdb.Get(ctx, publicationCacheKey).Result()

	if err == redis.Nil {
		return nil, nil
	}else if err != nil{
		return nil, err
	}

	var pub []types.Publication
	if data != "" {
		err := json.Unmarshal([]byte(data), &pub)
		if err != nil{
			return nil, err
		}
	}

	return pub, nil
}

func (s *PublicacaoRedisStore) Set(ctx context.Context, pub []types.Publication) error{
	data, err := json.Marshal(pub)
	
	if err != nil{
		return err
	}

	return s.rdb.Set(ctx, publicationCacheKey, data, PubExpTime).Err()
}