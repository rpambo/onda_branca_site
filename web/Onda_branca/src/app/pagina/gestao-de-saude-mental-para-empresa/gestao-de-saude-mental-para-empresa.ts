import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { GestaoSaudeMental } from "../../components/gestao-de-saude-mental-para-empresa/gestao-saude-mental/gestao-saude-mental";
import { AtuacaoGestaoDeSaudeMentalParaEmpresa } from "../../components/gestao-de-saude-mental-para-empresa/atuacao-gestao-de-saude-mental-para-empresa/atuacao-gestao-de-saude-mental-para-empresa";
import { ResultadosCorporativos } from '../../components/gestao-de-saude-mental-para-empresa/resultados-corporativos/resultados-corporativos';
import { ParceiraEstrategicaComponent } from "../../components/gestao-de-saude-mental-para-empresa/parceira-estrategica-component/parceira-estrategica-component";
import { ContactoGestaoDeSaudeMentalParaEmpresa } from "../../components/contacto/contacto-gestao-de-saude-mental-para-empresa/contacto-gestao-de-saude-mental-para-empresa";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-gestao-de-saude-mental-para-empresa',
  imports: [Navbar, Footer, GestaoSaudeMental, AtuacaoGestaoDeSaudeMentalParaEmpresa, ResultadosCorporativos, ParceiraEstrategicaComponent, ContactoGestaoDeSaudeMentalParaEmpresa],
  templateUrl: './gestao-de-saude-mental-para-empresa.html',
  styleUrl: './gestao-de-saude-mental-para-empresa.css'
})
export class GestaoDeSaudeMentalParaEmpresa {
  constructor(private meta: Meta, private titleService: Title) {}

updateMetaTagsGestaoSaudeMental() {
  this.titleService.setTitle('Gestão de Saúde Mental para Empresas | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Programas completos de gestão de saúde mental corporativa da Onda Branca: diagnóstico, prevenção, acompanhamento e resultados sustentáveis para empresas.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'gestão de saúde mental, saúde mental nas empresas, bem-estar corporativo, programas de saúde mental, produtividade, colaboradores, Onda Branca'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Gestão de Saúde Mental para Empresas | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Da prevenção ao acompanhamento contínuo: gestão estratégica de saúde mental para transformar colaboradores e organizações.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabranca.com/imagens/og-gestao-saude.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabranca.com/gestao-saude-mental'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Gestão de Saúde Mental para Empresas | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Programas personalizados de gestão de saúde mental que fortalecem equipas, reduzem riscos e impulsionam resultados corporativos.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabranca.com/imagens/og-gestao-saude.png'
  });
}

ngOnInit() {
  this.updateMetaTagsGestaoSaudeMental();
}

}
