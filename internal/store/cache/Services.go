package cache

import (
	"context"
	"encoding/json"
	"time"

	"github.com/redis/go-redis/v9"
	"github.com/rpambo/onda_branca_site/types"
)

const ServicesCacheKey = "services:all"
const ServExpTime = time.Minute

type ServicesStoreRedis struct {
	rdb *redis.Client
}

func (s *ServicesStoreRedis) Get(ctx context.Context) ([]types.Services, error){

	data, err := s.rdb.Get(ctx, ServicesCacheKey).Result()

	if err == redis.Nil{
		return nil, nil
	}else if err != nil{
		return nil, err
	}

	var services []types.Services
	if data != ""{
		err = json.Unmarshal([]byte(data), &services)
		if err != nil{
			return nil, err
		}
	}
	return services, nil
}

func (s *ServicesStoreRedis) Set(ctx context.Context, services []types.Services) error{

	data, err := json.Marshal(services)
	if err != nil{
		return nil
	}

	return s.rdb.Set(ctx, ServicesCacheKey, data, ServExpTime).Err()
}