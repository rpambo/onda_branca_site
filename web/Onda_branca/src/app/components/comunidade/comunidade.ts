import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comunidade',
  imports: [Navbar, Footer],
  templateUrl: './comunidade.html',
  styleUrl: './comunidade.css'
})
export class Comunidade {

  constructor(private meta: Meta, private titleService: Title) {}

  ngOnInit() {
    this.updateMetaTags();
  }

  updateMetaTags() {
    this.titleService.setTitle('Comunidade Onda Branca - Conecta-te com o bem-estar');

    this.meta.updateTag({ name: 'description', content: 'Participa na Comunidade Onda Branca – um espaço de apoio, partilha e crescimento focado na saúde mental e produtividade.' });
    this.meta.updateTag({ name: 'keywords', content: 'comunidade, saúde mental, apoio, bem-estar, Onda Branca, produtividade' });

    this.meta.updateTag({ property: 'og:title', content: 'Comunidade Onda Branca - Conecta-te com o bem-estar' });
    this.meta.updateTag({ property: 'og:description', content: 'Entra na nossa comunidade e conecta-te com pessoas que valorizam a saúde mental e o crescimento pessoal.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabranca.com/imagens/comunidade-banner.png' });
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabranca.com/comunidade' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
