package types

type Teacher struct {
	ID        int64  `json:"id"`
	FirstName string `json:"first_name" validate:"required,min=2,max=100"`
	LastName  string `json:"last_name" validate:"required,min=2,max=100"`
	Position  string `json:"position" validate:"required"`
	Image     Image  `json:"image"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

type Image struct {
	URL string `json:"url" validate:"required,url"`
}

type TeacherCreate struct {
	FirstName string `json:"first_name" validate:"required,min=2,max=100"`
	LastName  string `json:"last_name" validate:"required,min=2,max=100"`
	Position  string `json:"position" validate:"required"`
	Image     Image  `json:"image" validate:"required"`
}

type Services struct {
	ID       		int64    `json:"id"`
	Type      		string   `json:"type" validate:"required,min=2,max=100"`
	Name      		string   `json:"name" validate:"required,min=2,max=100"`
	Image     		Image    `json:"image"`
	Description     string   `json:"description,omitempty"`   // omitempty
	CreatedAt 		string   `json:"created_at"`
	UpdatedAt 		string   `json:"updated_at"`
}

type CreateServices struct {
	Type			string   `json:"type" validate:"required,min=2,max=100"`
	Name			string   `json:"name" validate:"required,min=2,max=100"`
	Image			Image    `json:"image"`
	Description		string   `json:"description,omitempty"`
}

type Publication struct {
	ID        int64  `json:"id"`
	Title     string `json:"title" validate:"required,min=2,max=100"`
	Image     Image  `json:"image" validate:"required"`
	Category  string `json:"category" validate:"required,min=2,max=100"`
	Content   string `json:"content" validate:"required"`
	CreatedAt string `json:"created_at"`
	UpdatedAt string `json:"updated_at"`
}

type CretePublication struct {
	Title    string `json:"title" validate:"required,min=2,max=100"`
	Image    Image  `json:"image" validate:"required"`
	Category string `json:"category" validate:"required,min=2,max=100"`
	Content  string `json:"content" validate:"required"`
}

type ContactUs struct {
	Name		string	`json:"name"`
	Email		string	`json:"email"`
	Tel			string	`json:"tel"`
	Assunto		string	`json:"assunto"`
	Messagem	string	`json:"messagem"`
}

type Trainning struct{
	ID				int64	`json:"id"`
	ServiceId		int64	`json:"service_id"`
	OpeningDate		string	`json:"opening_date"`
	IsPreSale		string	`json:"is_pre_sale"`
	PreSalePrice	string	`json:"pre_sale_price"`
	FinalPrice		string	`json:"final_price"`
}

type TrainingCreate struct{
	ServiceId		int64	`json:"service_id"`
	OpeningDate		string	`json:"opening_date"`
	IsPreSale		string	`json:"is_pre_sale"`
	PreSalePrice	string	`json:"pre_sale_price"`
	FinalPrice		string	`json:"final_price"`
}

type Mudules struct{
	ID				int64	`json:"id"`
	TrainingId		int64	`json:"training_id"`
	Title			string	`json:"title"`
	Description		string	`json:"description"`
	Order_number	string	`json:"order_number"`
}

type ModulesCreate struct{
	TrainingId		int64	`json:"training_id"`
	Title			string	`json:"title"`
	Description		string	`json:"description"`
	Order_number	string	`json:"order_number"`
}