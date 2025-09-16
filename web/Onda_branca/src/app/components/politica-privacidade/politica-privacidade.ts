import { Component } from '@angular/core';
import { Footer } from "../footer/footer";
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-politica-privacidade',
  imports: [Footer, Navbar],
  templateUrl: './politica-privacidade.html',
  styleUrl: './politica-privacidade.css'
})
export class PoliticaPrivacidade {

}
