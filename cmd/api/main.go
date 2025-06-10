package main

import (
	"log"
	"time"

	"github.com/rpambo/onda_branca_site/internal/env"
	"github.com/rpambo/onda_branca_site/internal/store"
	"github.com/rpambo/onda_branca_site/internal/db"
)

func main() {
	// Load configuration
	cnf := config{
		Addr: env.GetString("ADRR", ":8080"),
		DB: dbConfig{
			Addr: env.GetString("ADDR_DB", "postgres://admin:admin@localhost:5432/ondaBranca?sslmode=disable"),
			MaxOpenConns: env.GetInt("ADDR_MAX_OPEN_CONNS", int(time.Second) * 30),
			MaxIdleConns: env.GetInt("ADDR_MAX_IDDLE_CONNS", int(time.Second) * 10),
			MaxIdleTime: env.GetString("ADDR_MAX_IDDLE_TIME", "15m"),
		},
	}

	// Initialize database connection
	db, err := db.OpenDB(cnf.DB.Addr, cnf.DB.MaxOpenConns, cnf.DB.MaxIdleConns, cnf.DB.MaxIdleTime)

	if err != nil {
		log.Fatalf("failed to initialize database: %v", err)
	}
	defer db.Close()

	store := store.NewStoarge(db)

	// Create application
	app := &application{
		config: &cnf,
		store: store,
	}

	// Setup router
	mux := app.mount()

	// Start server
	log.Printf("Starting server on %s", cnf.Addr)
	if err := app.run(mux); err != nil {
		log.Fatalf("server error: %v", err)
	}
}