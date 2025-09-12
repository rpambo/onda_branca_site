import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { DesafiosEmpresas } from "../../components/antendimento-a-empresa/desafios-empresas/desafios-empresas";
import { AtendimentoEmpresarialSolution } from "../../components/antendimento-a-empresa/atendimento-empresarial-solution/atendimento-empresarial-solution";
import { AtendimentoEmpresarialBeneficio } from '../../components/antendimento-a-empresa/atendimento-empresarial-beneficio/atendimento-empresarial-beneficio';
import { Abordagem } from "../../components/antendimento-a-empresa/abordagem/abordagem";
import { Contactos } from "../../components/contacto/contacto-principal/contactos";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-antendimento-empressarial',
  imports: [Navbar, Footer, DesafiosEmpresas, AtendimentoEmpresarialSolution, AtendimentoEmpresarialBeneficio, Abordagem, Contactos],
  templateUrl: './antendimento-empressarial.html',
  styleUrl: './antendimento-empressarial.css'
})
export class AntendimentoEmpressarial {
  constructor(private meta: Meta, private titleService: Title) {}

updateMetaTagsAtendimento() {
  this.titleService.setTitle('Atendimento Empresarial | Onda Branca');

  // Meta padrão
  this.meta.updateTag({
    name: 'description',
    content:
      'Onda Branca oferece atendimento empresarial em saúde mental e bem-estar: soluções personalizadas para equipes mais saudáveis, produtivas e resilientes.'
  });
  this.meta.updateTag({
    name: 'keywords',
    content:
      'atendimento empresarial, saúde mental corporativa, bem-estar no trabalho, produtividade, gestão de pessoas, Onda Branca, equilíbrio profissional'
  });

  // Meta Open Graph (para redes sociais)
  this.meta.updateTag({
    property: 'og:title',
    content: 'Atendimento Empresarial | Onda Branca'
  });
  this.meta.updateTag({
    property: 'og:description',
    content:
      'Consultoria, workshops e programas práticos para transformar o bem-estar da sua empresa e fortalecer sua equipe.'
  });
  this.meta.updateTag({
    property: 'og:image',
    content: 'https://ondabranca.com/imagens/og-atendimento.png' // imagem específica para a página
  });
  this.meta.updateTag({
    property: 'og:url',
    content: 'https://ondabranca.com/atendimento-empresarial'
  });
  this.meta.updateTag({ property: 'og:type', content: 'article' });

  // Twitter Cards (para melhor preview no X/Twitter)
  this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  this.meta.updateTag({
    name: 'twitter:title',
    content: 'Atendimento Empresarial | Onda Branca'
  });
  this.meta.updateTag({
    name: 'twitter:description',
    content:
      'Soluções estratégicas de saúde mental e bem-estar para empresas que desejam equipes engajadas e de alta performance.'
  });
  this.meta.updateTag({
    name: 'twitter:image',
    content: 'https://ondabranca.com/imagens/og-atendimento.png'
  });
}

ngOnInit() {
  this.updateMetaTagsAtendimento();
}
}
