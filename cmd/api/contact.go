package main

import (
	"net/http"

	"github.com/rpambo/onda_branca_site/internal/mailer"
	"github.com/rpambo/onda_branca_site/types"
)

func (app *application) concateUs(w http.ResponseWriter, r *http.Request) {
	var payload types.ContactUs
	
	if err := readJSON(w, r, &payload); err != nil{
		app.badRequestResponse(w, r, err)
		return
	}

	if err := Validate.Struct(payload); err != nil{
		app.badRequestResponse(w, r, err)
		return
	}

	va := struct{
		Name	string
	}{
		Name: payload.Name,
	}

	status, err:= app.Mailer.Send(mailer.UserWelcomeTemplate, payload.Email, va);
	if err != nil{
		app.internalServerError(w, r, err)
		return
	}

	app.logger.Infow("email send", "status :", status)
}