import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Slides } from "../slides/slides";
import { About } from "../../layout/about/about";
import { Footer } from '../../layout/footer/footer';
import { Meta, Title } from '@angular/platform-browser';
import { Services } from '../../layout/services/services';
import { Testemunhos } from '../../layout/testemunhos/testemunhos';
import { Publicacao } from '../../layout/publicacao/publicacao';
import { RadioEpodcast } from "../../layout/radio-epodcast/radio-epodcast";

@Component({
  selector: 'app-home',
  imports: [Navbar, Slides, About, Footer, Services, Publicacao, RadioEpodcast],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  constructor(private meta: Meta, private titleService: Title) {}

  updateMetaTags() {
    this.titleService.setTitle('Onda Branca - Saúde Mental e Produtividade');

    // Meta padrão
    this.meta.updateTag({ name: 'description', content: 'Bem-vindo à plataforma Onda Branca – promovendo saúde mental e produtividade com comunidade e informação.' });
    this.meta.updateTag({ name: 'keywords', content: 'saúde mental, produtividade, comunidade, Onda Branca, bem-estar' });

    // Meta Open Graph (para redes sociais)
    this.meta.updateTag({ property: 'og:title', content: 'Onda Branca - Saúde Mental e Produtividade' });
    this.meta.updateTag({ property: 'og:description', content: 'Junta-te à comunidade Onda Branca e explora conteúdos sobre bem-estar e produtividade.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabranca.com/imagens/logo.png' }); // usa uma URL válida
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabranca.com' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }

  ngOnInit() {
    this.updateMetaTags();
  }
}
