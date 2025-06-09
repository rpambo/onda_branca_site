package main

import "log"

func main() {
	cnf := config{
		addr: ":8080",
	}

	app := &application{
		config: cnf,
	}

	mux := app.mount()

	log.Fatal(app.run(mux))
}