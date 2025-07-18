import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";

@Component({
  selector: 'app-services',
  imports: [Navbar, Footer],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {

}
