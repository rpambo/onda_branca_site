import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject } from '@angular/core';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-publicacao',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './publicacao.html',
  styleUrl: './publicacao.css'
})
export class Publicacao implements AfterViewInit {

  fb = inject(NonNullableFormBuilder)
  form = this.fb.group({
    name: this.fb.control("", { validators: Validators.required}),
    email: this.fb.control("", [Validators.required, Validators.email]),
    tel: this.fb.control("", [Validators.required,  Validators.maxLength(9), Validators.minLength(9), Validators.pattern(/^[0-9]+$/) ]),
    agendarcomo: this.fb.control("", { validators: Validators.required}),
    data: this.fb.control("", Validators.required)
  })

  onSubmit(){
    if (this.form.invalid){
      this.form.markAllAsTouched()
      return
    }

    emailjs.init('qhiHIdsLBflcMWQG3')
    
    //enviar para o client
    emailjs.send('service_n3qaoxg', 'template_a5q87vl', {
      subject:"Agendamento de visita",
      name: this.form.value.name,
      email: this.form.value.email,
      tel: this.form.value.tel,
      agendarcomo: this.form.value.agendarcomo,
      data: this.form.value.data,
      to_email: this.form.value.email,
      company_name: 'Onda Branca',
      website_link: 'https://ondabranca.co.ao'
    }).then(
      (response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Agendamento enviado com sucesso!');
      },
      (err) => {
        console.error('FAILED...', err);
        alert('Erro ao enviar. Tente novamente.');
      }
    );
    console.log(this.form.getRawValue())
  }

  async ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      const flatpickr = (await import('flatpickr')).default;
      flatpickr('#datepicker', {
        dateFormat:'d-m-y',
        minDate:'today',
        disable:[
          function(date){
            return (date.getDay() == 0 || date.getDay() == 6);
          }
        ]
      });
    }
  }
}
