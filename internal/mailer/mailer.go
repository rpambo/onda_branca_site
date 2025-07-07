package mailer

import "embed"

const (
	FromName            = "Onda Branca"
	maxRetires          = 3
	UserWelcomeTemplate = "user_invitation.tmpl"
)

//go:embed "templates"
var FS embed.FS

type Client interface {
	Send(templateFile, email string, data any) (int, error)
}