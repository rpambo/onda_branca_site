import { Component } from '@angular/core';
import { Contactos } from "../../components/contacto/contacto-principal/contactos";
import { Footer } from "../../components/footer/footer";
import { Navbar } from "../../components/navbar/navbar";

@Component({
  selector: 'app-on-air',
  imports: [Contactos, Footer, Navbar],
  templateUrl: './on-air.html',
  styleUrl: './on-air.css'
})
export class OnAir {

}
