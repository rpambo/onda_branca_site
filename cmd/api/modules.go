package main

import (
	"net/http"

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