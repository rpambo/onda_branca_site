import { Component, inject, OnInit } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Servicecontacto } from '../../services/servicecontacto';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [Navbar, Footer, ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrls: ['./contacto.css']
})
export class Contacto implements OnInit {

  private meta   = inject(Meta);
  private title  = inject(Title);
  private fb     = inject(NonNullableFormBuilder);

  isLoading = false;

  constructor(
    private service: Servicecontacto,
    private router: Router
  ) {}

  form = this.fb.group({
    name: this.fb.control("", Validators.required),
    email: this.fb.control("", [Validators.required, Validators.email]),
    tel: this.fb.control("", [
      Validators.required,
      Validators.maxLength(9),
      Validators.minLength(9),
      Validators.pattern(/^[0-9]+$/)
    ]),
    assunto: this.fb.control("", Validators.required),
    messagem: this.fb.control("", [Validators.required, Validators.maxLength(500)])
  });

  ngOnInit() {
    this.updateMetaTags();
  }

  private updateMetaTags() {
    this.title.setTitle('Contacto – Onda Branca');

    // Meta padrão
    this.meta.updateTag({
      name: 'description',
      content: 'Entre em contacto com a equipa Onda Branca para saber mais sobre saúde mental e produtividade.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Onda Branca, contacto, saúde mental, feedback, suporte'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Contacto – Onda Branca'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Fale connosco: dúvidas, sugestões ou parcerias. A Onda Branca está aqui para ajudar.'
    });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://ondabranca.com/imagens/logo.png'
    });
    this.meta.updateTag({
      property: 'og:url',
      content: 'https://ondabranca.com/contacto'
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }

  onSubmite() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    this.service.sendEmail(this.form.getRawValue()).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({
          title: 'Sucesso!',
          text: 'Mensagem enviada com sucesso!',
          background: '#4CAF50',
          color: '#ffffff',
          icon: 'success',
          confirmButtonColor: '#FF0000',
          confirmButtonText: 'VOLTAR AO INÍCIO',
        }).then(() => this.router.navigate(['/']));
      },
      error: (err) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Algo deu errado!',
          text: 'Não foi possível enviar a mensagem. Tente novamente.',
          background: '#FF0000',
          color: '#ffffff',
          icon: 'error',
          confirmButtonColor: '#4CAF50',
          confirmButtonText: 'TENTAR NOVAMENTE',
        });
        console.error(err);
      }
    });
  }
}