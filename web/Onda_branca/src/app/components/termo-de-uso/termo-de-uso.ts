import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-termo-de-uso',
  imports: [Footer, Navbar],
  templateUrl: './termo-de-uso.html',
  styleUrl: './termo-de-uso.css'
})
export class TermoDeUso {

}
