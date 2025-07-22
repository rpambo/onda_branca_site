import { Component } from '@angular/core';
import { Service } from '../../interfaces';
import { Servicos } from '../../services/servicos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule,RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  inscritos = 45;
  vagasTotais = 70;
 serv : Service[] = []
 
 constructor(private ser: Servicos ){}

 ngOnInit(): void {
  this.ser.getAllServices().subscribe({
      next: (res) => {
        this.serv = res;
      },
      error: (err) =>{
        console.error(err)
      }
    })
 }

  get preenchimentoPercentual(): number {
    return (this.inscritos / this.vagasTotais) * 100;
  }
}
