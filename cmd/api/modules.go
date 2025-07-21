package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/rpambo/onda_branca_site/types"
)

func (app *application) ModulesCreate(w http.ResponseWriter, r *http.Request) {
	var payload *types.ModulesCreate

	// 1. Lê e valida o JSON
	if err := readJSON(w, r, &payload); err != nil {
		app.badRequestResponse(w, r, err)
		return
	}

	// 2. Validação com o validator (ex: go-playground/validator)
	if err := Validate.Struct(payload); err != nil {
		app.internalServerError(w, r, err)
		return
	}

	ctx := r.Context()

	// 3. Mapeia o payload para o modelo usado no banco
	modules := &types.Mudules{
		TrainingId:     payload.TrainingId,
		Title:			payload.Title,
		Description:	payload.Description,
		Order_number: 	payload.Order_number,
	}

	// 4. Salva no banco
	if err := app.store.Modules.Create(ctx, modules); err != nil {
		app.internalServerError(w, r, err)
		return
	}

	// 5. Retorna JSON de sucesso com o objeto criado
	if err := app.jsonResponse(w, http.StatusCreated, modules); err != nil {
		app.internalServerError(w, r, err)
		return
	}
}

func (app *application) GeByIdModules(w http.ResponseWriter, r *http.Request){
	ctx := r.Context()
	id := chi.URLParam(r, "id")
	
	if id == ""{
		app.badRequestResponse(w, r, fmt.Errorf("missing service id"))
		return
	}
	idService, err := strconv.ParseInt(id, 10, 64)
	
	if err != nil{
		app.internalServerError(w, r, err)
		return
	}
	mudules, err := app.store.Modules.GetByIdServices(ctx, int64(idService))

	if err != nil{
		app.internalServerError(w, r, err)
		return
	}

	if err := app.jsonResponse(w, http.StatusOK, mudules); err != nil{
		app.internalServerError(w, r, err)
		return
	} 
}