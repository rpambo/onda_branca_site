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

	auto := struct{
		Name	string
	}{
		Name: payload.Name,
	}

	send := struct{
		Name		string
		Assunto		string
		Contacto	string
		Mensagem	string
	}{
		Name: payload.Name,
		Assunto: payload.Assunto,
		Contacto: payload.Tel,
		Mensagem: payload.Messagem,
	}

	status, err:= app.Mailer.Send(mailer.UserWelcomeTemplate, payload.Email, auto);
	if err != nil{
		app.internalServerError(w, r, err)
		return
	}

	status2, err := app.Mailer.SendNew(mailer.SendMail, payload.Email, send);
	if err != nil{
		app.internalServerError(w, r, err)
		return
	}
	app.logger.Infow("emails sent successfully", "welcome_status", status, "second_status", status2)
}