package types

type Teacher struct {
	ID				int64  `json:"id"`
	FirstName		string `json:"first_name" validate:"required,min=2,max=100"`
	LastName		string `json:"last_name" validate:"required,min=2,max=100"`
	Position		string `json:"position" validate:"required"`
	Image			Image  `json:"image"`
	CreatedAt		string `json:"created_at"`
	UpdatedAt		string `json:"updated_at"`
}

type Image struct {
	URL				string `json:"url" validate:"required,url"`
}

type TeacherCreate struct {
	FirstName		string `json:"first_name" validate:"required,min=2,max=100"`
	LastName		string `json:"last_name" validate:"required,min=2,max=100"`
	Position		string `json:"position" validate:"required"`
	Image			Image  `json:"image" validate:"required"`
}