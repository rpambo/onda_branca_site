import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Slides } from "../slides/slides";
import { About } from "../../layout/about/about";
import { Services } from "../../layout/services/services";
import { Testemunhos } from "../../layout/testemunhos/testemunhos";

@Component({
  selector: 'app-home',
  imports: [Navbar, Slides, About, Services, Testemunhos],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
