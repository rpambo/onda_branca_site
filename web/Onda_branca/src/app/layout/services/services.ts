import { Component } from '@angular/core';
import { Service } from '../../interfaces';
import { Servicos } from '../../services/servicos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
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
}
