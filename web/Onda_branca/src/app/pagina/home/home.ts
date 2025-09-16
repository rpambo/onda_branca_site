import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Slides } from "../../components/home/hero/slides";
import { Footer } from '../../components/footer/footer';
import { Meta, Title } from '@angular/platform-browser';
import { Services } from '../../components/home/services/services';
import { Recuroseapoi } from "../../components/home/recuroseapoi/recuroseapoi";
import { CommonModule } from '@angular/common';
import { Contactos } from "../../components/contacto/contacto-principal/contactos";
import { StaticsSobre } from "../../components/home/statics-sobre/statics-sobre";

declare var UIkit: any; // para usar UIkit direto

@Component({
  selector: 'app-home',
  imports: [Navbar, Slides, Footer, Services, Recuroseapoi, CommonModule, Contactos, StaticsSobre],
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

  showWelcomeModal = false;

  ngOnInit() {
    this.updateMetaTags();
  }
}
