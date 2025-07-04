import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { Historia } from "../../layout/historia/historia";

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [Navbar, Footer, Historia],
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css']
})
export class Sobre implements OnInit {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit(): void {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Sobre Nós - Onda Branca');
    this.meta.updateTag({ name: 'description', content: 'Conheça a missão, visão e os valores da Onda Branca — promovendo saúde mental o ano inteiro.' });
    this.meta.updateTag({ property: 'og:title', content: 'Sobre Nós - Onda Branca' });
    this.meta.updateTag({ property: 'og:description', content: 'Descubra o propósito da Onda Branca e como ajudamos a construir uma cultura de cuidado emocional.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabranca.com/assets/og-image-sobre.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabranca.com/sobre' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
