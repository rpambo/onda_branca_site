import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from "../../components/footer/footer";
import { RendaExtraIntro } from "../../components/programa-de-renda-extra/renda-extra-intro/renda-extra-intro";
import { RendaExtraBeneficios } from '../../components/programa-de-renda-extra/renda-extra-beneficios/renda-extra-beneficios';
import { RendaExtraMetodologia } from '../../components/programa-de-renda-extra/renda-extra-metodologia/renda-extra-metodologia';
import { ContactoRendaExtra } from '../../components/contacto/contacto-renda-extra/contacto-renda-extra';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-renda-extra',
  imports: [Navbar, Footer, RendaExtraIntro, RendaExtraBeneficios, RendaExtraMetodologia, ContactoRendaExtra],
  templateUrl: './renda-extra.html',
  styleUrl: './renda-extra.css'
})
export class RendaExtra {
  constructor(private meta: Meta, private titleService: Title) {}

updateMetaTagsRendaExtra() {
  this.titleService.setTitle('Programa de Renda Extra | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Descubra como gerar novas fontes de renda com equilíbrio e produtividade. O Programa de Renda Extra da Onda Branca oferece orientação prática para alinhar bem-estar e resultados financeiros.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'renda extra, produtividade, bem-estar financeiro, equilíbrio, finanças pessoais, Onda Branca, programa de renda extra'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Programa de Renda Extra | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Orientação prática para conquistar estabilidade financeira e aumentar a qualidade de vida com equilíbrio.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabranca.com/imagens/og-rendaextra.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabranca.com/renda-extra'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Programa de Renda Extra | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Descubra caminhos práticos para conquistar renda extra com equilíbrio entre saúde, produtividade e resultados.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabranca.com/imagens/og-rendaextra.png'
  });
}

ngOnInit() {
  this.updateMetaTagsRendaExtra();
}
}
