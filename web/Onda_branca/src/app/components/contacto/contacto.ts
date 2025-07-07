import { Component, inject } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { NonNullableFormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Servicecontacto } from '../../services/servicecontacto';

@Component({
  selector: 'app-contacto',
  imports: [Navbar, Footer, ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  isLoading : boolean = false
  fb = inject(NonNullableFormBuilder)

  constructor(private service: Servicecontacto){}

  form = this.fb.group({
    name: this.fb.control("", Validators.required),
    email: this.fb.control("", [Validators.required, Validators.email]),
    tel: this.fb.control("", [Validators.required, Validators.maxLength(9), Validators.minLength(9), Validators.pattern(/^[0-9]+$/)]),
    assunto: this.fb.control("", Validators.required),
    messagem: this.fb.control("", [Validators.required, Validators.maxLength(500)])
  })

  onSubmite(){
    if (this.form.invalid){
      this.form.markAllAsTouched()
    }
    this.isLoading = true
    this.service.sendEmail(this.form.getRawValue()).subscribe({
      next:(res)=>{
        this.isLoading = false
        window.alert("email enviado com sucesso")
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }
}
