import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { CommonModule } from '@angular/common';
import { pub } from '../../interfaces';
import { Pub } from '../../services/pub';
import { formatDate } from '@angular/common';
import { Footer } from "../../layout/footer/footer";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-publicao',
  imports: [Navbar, CommonModule, Footer],
  templateUrl: './publicao.html',
  styleUrl: './publicao.css'
})
export class Publicao {
  pubs : pub[] = []
  isLoading : boolean = false

  constructor(private publicao: Pub, private meta: Meta, private titleService: Title){}

   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateMetaTags()
    this.onPub()
  }
  
  isRecent(dateString: string): boolean {
    const date = new Date(dateString);
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return date > oneWeekAgo;
  }

  formatDateOrRecent(dateString: string): string {
    return this.isRecent(dateString)
      ? 'Recente'
      : formatDate(dateString, 'dd/MM/yyyy', 'pt-PT'); // ou 'en-GB' se preferires
  }

  onPub(): void {
    this.isLoading = true
    this.publicao.getAllPub().subscribe({
      next: (res ) => {
        this.pubs = res
        this.isLoading = false
      },
      error: (err) =>{
        console.log(err)
        this.isLoading = false
      }
    })
  }

  updateMetaTags(): void {
    this.titleService.setTitle('Publicações - Onda Branca');
    this.meta.updateTag({ name: 'description', content: 'Veja as últimas publicações da Onda Branca sobre saúde mental, bem-estar e produtividade.' });
    this.meta.updateTag({ name: 'keywords', content: 'publicações, saúde mental, bem-estar, Onda Branca, produtividade' });

    this.meta.updateTag({ property: 'og:title', content: 'Publicações - Onda Branca' });
    this.meta.updateTag({ property: 'og:description', content: 'Explore artigos, reflexões e conteúdos sobre saúde emocional com a Onda Branca.' });
    this.meta.updateTag({ property: 'og:image', content: 'https://ondabranca.com/assets/og-publicacoes.png' }); // substitui com a imagem que tens
    this.meta.updateTag({ property: 'og:url', content: 'https://ondabranca.com/publicacoes' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
  }
}
