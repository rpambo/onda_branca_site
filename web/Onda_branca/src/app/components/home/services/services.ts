import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [CommonModule, RouterModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  inscritos = 45;
  vagasTotais = 70;
 
 constructor(){}

 ngOnInit(): void {
 }

  get preenchimentoPercentual(): number {
    return (this.inscritos / this.vagasTotais) * 100;
  }
}
