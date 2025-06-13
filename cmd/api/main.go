package main

import (
	"log"
	"time"

	"github.com/joho/godotenv"
	"github.com/nedpals/supabase-go"

	"github.com/rpambo/onda_branca_site/internal/db"
	"github.com/rpambo/onda_branca_site/internal/env"
	"github.com/rpambo/onda_branca_site/internal/store"
	"go.uber.org/zap"
)

func main() {
	// Load configuration

	err := godotenv.Load()
	if err != nil {
    	log.Fatal("Error loading .env file")
	}

	cnf := config{
		Addr: env.GetString("ADDR", ":8080"),
		DB: dbConfig{
			Addr: env.GetString("ADDR_DB", "postgres://admin:admin@localhost:5432/ondaBranca?sslmode=disable"),
			MaxOpenConns: env.GetInt("ADDR_MAX_OPEN_CONNS", int(time.Second) * 30),
			MaxIdleConns: env.GetInt("ADDR_MAX_IDDLE_CONNS", int(time.Second) * 10),
			MaxIdleTime: env.GetString("ADDR_MAX_IDDLE_TIME", "15m"),
		},
		SupabaseURL: env.GetString("SUPABASE_URL", ""),
		SupabaseKey: env.GetString("SUPABASE_KEY", ""),
	}

	logger := zap.Must(zap.NewProduction()).Sugar()
	defer logger.Sync()

	// Initialize database connection
	db, err := db.OpenDB(cnf.DB.Addr, cnf.DB.MaxOpenConns, cnf.DB.MaxIdleConns, cnf.DB.MaxIdleTime)

	if err != nil {
		logger.Panic("failed to initialize database: %v", err)
	}
	defer db.Close()
	logger.Info("database connection pool established")
	
	// Initialize Supabase client
	supabaseClient := supabase.CreateClient(cnf.SupabaseURL, cnf.SupabaseKey)
	store := store.NewStorage(db)

	// Create application
	app := &application{
		config: cnf,
		store: store,
		logger: logger,
		supabase: supabaseClient,
	}

	// Setup router
	mux := app.mount()

	if err := app.run(mux); err != nil {
		log.Fatalf("server error: %v", err)
	}
}