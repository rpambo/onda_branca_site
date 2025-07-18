package mailer

import (
	"bytes"
	"errors"
	"html/template"

	"gopkg.in/gomail.v2"
)

func NewMailClient(apikey, fromEmail string) (mailtrapCliet, error) {
	if apikey == "" {
		return mailtrapCliet{}, errors.New("api key is required")
	}

	return mailtrapCliet{
		fromEmail: fromEmail,
		apiKey: apikey,
	}, nil
}

func (m mailtrapCliet) SendNew(templateFile, email string, data any) (int, error){
	temp, err := template.ParseFS(FS, "templates/"+templateFile)
	if err != nil{
		return -1, err
	}

	var subject  bytes.Buffer
	err = temp.ExecuteTemplate(&subject, "subject", data)
	if err != nil{
		return -1, err
	}
	
	var body  bytes.Buffer
	err = temp.ExecuteTemplate(&body, "body", data)
	if err != nil{
		return -1, err
	}

	message := gomail.NewMessage()
	message.SetHeader("From", email)
	message.SetHeader("To", m.fromEmail)
	message.SetHeader("Subject", subject.String())

	message.AddAlternative("text/html", body.String())

	dialer := gomail.NewDialer("smtp.gmail.com", 587, m.fromEmail, m.apiKey)
	err = dialer.DialAndSend(message)
	if err != nil{
		return -1, err
	}

	return 200, nil
}


