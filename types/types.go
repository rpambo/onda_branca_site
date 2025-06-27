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

type Services struct {
	ID			int64	 	`json:"id"`
	Type        string    	`json:"type" validate:"required,min=2,max=100"`
	Name        string    	`json:"name" validate:"required,min=2,max=100"`
	Image       Image     	`json:"image"`
	Modules		[]string	`json:"modules,omitempty"`  // omitempty para omitir se vazio
    Start		string		`json:"start,omitempty"`    // omitempty
    End			string		`json:"end,omitempty"`      // omitempty
	CreatedAt	string		`json:"created_at"`
	UpdatedAt	string		`json:"updated_at"`
}

type CreateServices struct{
	Type        string    	`json:"type" validate:"required,min=2,max=100"`
	Name        string    	`json:"name" validate:"required,min=2,max=100"`
	Image       Image     	`json:"image"`
	Modules		[]string	`json:"modules,omitempty"`  // omitempty para omitir se vazio
    Start		string		`json:"start,omitempty"`    // omitempty
    End			string		`json:"end,omitempty"`      // omitempty
}

type Publication struct {
	ID         	int64     	`json:"id"`
	Title      	string    	`json:"title" validate:"required,min=2,max=100"`
	Image      	Image     	`json:"image" validate:"required"`
	Category  	string    	`json:"category" validate:"required,min=2,max=100"`
	Content    	string    	`json:"content" validate:"required"`
	CreatedAt  	string 		`json:"created_at"`
	UpdatedAt  	string 		`json:"updated_at"`
}

type CretePublication struct{
	Title      	string    	`json:"title" validate:"required,min=2,max=100"`
	Image      	Image     	`json:"image" validate:"required"`
	Category  	string    	`json:"category" validate:"required,min=2,max=100"`
	Content    	string    	`json:"content" validate:"required"`
}