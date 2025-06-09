package main

import (
	"net/http"
)

func (app *application) HealthHandle(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Ok!!"))
}