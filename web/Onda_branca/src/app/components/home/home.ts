import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Slides } from "../slides/slides";

@Component({
  selector: 'app-home',
  imports: [Navbar, Slides],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
