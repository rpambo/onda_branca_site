package main

import (
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/cors"
	"github.com/nedpals/supabase-go"
	"github.com/rpambo/onda_branca_site/internal/store"
	"go.uber.org/zap"
)

type application struct {
	config		config
	store		store.Storage
	logger		*zap.SugaredLogger
	supabase	*supabase.Client
}

type config struct {
	Addr		string
	DB			dbConfig
	SupabaseURL string
    SupabaseKey string
}

type dbConfig struct {
	Addr			string
	MaxOpenConns	int
	MaxIdleConns	int
	MaxIdleTime		string
}

func (app *application) mount() http.Handler {
	r := chi.NewRouter()
	
	// A good base middleware stack
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	// Basic CORS
  	// for more ideas, see: https://developer.github.com/v3/#cross-origin-resource-sharing
  	r.Use(cors.Handler(cors.Options{
    	// AllowedOrigins:   []string{"https://foo.com"}, // Use this to allow specific origin hosts
    	AllowedOrigins:   []string{"https://*", "http://*"},
    	// AllowOriginFunc:  func(r *http.Request, origin string) bool { return true },
    	AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
    	AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
    	ExposedHeaders:   []string{"Link"},
   		AllowCredentials: false,
    	MaxAge:           300, // Maximum value not ignored by any of major browsers
  	}))

	r.Route("/v1", func(r chi.Router) {
		r.Get("/health", app.HealthHandle)

		r.Route("/teacher", func(r chi.Router) {
			r.Post("/create", app.CreateTeacher)
			r.Get("/get_all_teachers", app.GetAllTeacherHandler)
		})
		r.Route("/services", func(r chi.Router) {
			r.Post("/create", app.ServicesHandler)
		})
	})

	return r

}

func (app *application) run(mux http.Handler) error{
	srv := http.Server{
		Addr: app.config.Addr,
		Handler: mux,
		ReadTimeout: time.Second * 10,
		WriteTimeout: time.Second * 30,
		IdleTimeout: time.Minute,
	}

	app.logger.Infow("server has started", "addr", app.config.Addr)

	return srv.ListenAndServe()
}