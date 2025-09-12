import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { ProgramaGinasticaLaboralImplementar } from "../../components/programa-de-ginastica-laboral/programa-ginastica-laboral-implementar/programa-ginastica-laboral-implementar";
import { Footer } from '../../components/footer/footer';
import { ProgramaGinasticaLaboralPrograma } from '../../components/programa-de-ginastica-laboral/programa-ginastica-laboral-programa/programa-ginastica-laboral-programa';
import { ProgramaGinasticaLaboralPacotes } from '../../components/programa-de-ginastica-laboral/programa-ginastica-laboral-pacotes/programa-ginastica-laboral-pacotes';
import { Bruchura } from '../../components/programa-de-ginastica-laboral/bruchura/bruchura';
import { ContactoGinastica } from '../../components/contacto/contacto-ginastica/contacto-ginastica';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-programa-ginastica-laboral',
  imports: [Navbar, ProgramaGinasticaLaboralImplementar, Footer, ProgramaGinasticaLaboralPrograma, ProgramaGinasticaLaboralPacotes, Bruchura, ContactoGinastica],
  templateUrl: './programa-ginastica-laboral.html',
  styleUrl: './programa-ginastica-laboral.css'
})
export class ProgramaGinasticaLaboral {
  constructor(private meta: Meta, private titleService: Title) {}

updateMetaTagsGinastica() {
  this.titleService.setTitle('Ginástica Laboral | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Promova saúde, bem-estar e produtividade com o programa de Ginástica Laboral da Onda Branca. Exercícios simples para reduzir o stress, prevenir lesões e melhorar a qualidade de vida no trabalho.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'ginástica laboral, saúde no trabalho, produtividade, bem-estar, prevenção de lesões, qualidade de vida, Onda Branca'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Ginástica Laboral | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Exercícios práticos e acessíveis que reduzem o stress e aumentam a qualidade de vida no ambiente de trabalho.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabranca.com/imagens/og-ginastica.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabranca.com/ginastica'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Ginástica Laboral | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Saúde e bem-estar no trabalho: descubra os benefícios da Ginástica Laboral para reduzir stress e prevenir problemas físicos.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabranca.com/imagens/og-ginastica.png'
  });
}

ngOnInit() {
  this.updateMetaTagsGinastica();
}

}
