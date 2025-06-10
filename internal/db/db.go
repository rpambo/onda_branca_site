package db

import (
	"context"
	"database/sql"
	"fmt"
	"time"

	_ "github.com/lib/pq"
)

// OpenDB initializes a PostgreSQL database connection with connection pool settings.
// Returns (*sql.DB, error) following Go conventions.
func OpenDB(addr string, maxOpenConns, maxIdleConns int, maxIdleTime string) (*sql.DB, error) {
	// Validate connection limits
	if maxOpenConns < 1 {
		return nil, fmt.Errorf("maxOpenConns must be >= 1, got %d", maxOpenConns)
	}
	if maxIdleConns < 0 {
		return nil, fmt.Errorf("maxIdleConns must be >= 0, got %d", maxIdleConns)
	}

	db, err := sql.Open("postgres", addr)
	if err != nil {
		return nil, fmt.Errorf("failed to open database: %w", err)
	}

	// Parse idle time duration
	duration, err := time.ParseDuration(maxIdleTime)
	if err != nil {
		db.Close() // Clean up if duration parsing fails
		return nil, fmt.Errorf("invalid maxIdleTime duration: %w", err)
	}

	// Configure connection pool
	db.SetMaxOpenConns(maxOpenConns)
	db.SetMaxIdleConns(maxIdleConns)
	db.SetConnMaxIdleTime(duration)

	// Verify connection with a 5-second timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := db.PingContext(ctx); err != nil {
		db.Close() // Ensure we don't leak connections
		return nil, fmt.Errorf("database ping failed: %w", err)
	}

	return db, nil
}