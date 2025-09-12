import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { MentoriaSection } from "../../components/mentoria-para-gestores/mentoria-section/mentoria-section";
import { Footer } from "../../components/footer/footer";
import { MentoriaDestaques } from '../../components/mentoria-para-gestores/mentoria-destaques/mentoria-destaques';
import { CalendarioMentoria } from '../../components/mentoria-para-gestores/calendario-mentoria/calendario-mentoria';
import { ContactoGestores } from "../../components/contacto/contacto-gestores/contacto-gestores";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mentoria',
  imports: [Navbar, MentoriaSection, Footer, MentoriaDestaques, CalendarioMentoria, ContactoGestores],
  templateUrl: './mentoria.html',
  styleUrl: './mentoria.css'
})
export class Mentoria {
  constructor(private meta: Meta, private titleService: Title) {}

updateMetaTagsMentoria() {
  this.titleService.setTitle('Mentoria para Gestores | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Participe do Programa de Mentoria da Onda Branca: apoio para gestores enfrentarem os desafios da liderança moderna com equilíbrio, confiança e alta performance.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'mentoria para gestores, liderança, saúde mental, produtividade, Onda Branca, bem-estar, gestão consciente'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Programa de Mentoria para Gestores | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Ferramentas práticas, apoio especializado e rede de líderes conscientes. Transforme sua forma de gerir com a Onda Branca.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabranca.com/imagens/og-mentoria.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabranca.com/mentoria'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Programa de Mentoria para Gestores | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Mentoria exclusiva para gestores: desenvolva liderança consciente e alcance resultados com equilíbrio.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabranca.com/imagens/og-mentoria.png'
  });
}

ngOnInit() {
  this.updateMetaTagsMentoria();
}
}
