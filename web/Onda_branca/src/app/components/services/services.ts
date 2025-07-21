import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../../layout/footer/footer";
import { ActivatedRoute } from '@angular/router';
import { Servicos } from '../../services/servicos';
import { TrainingData } from '../../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [Navbar, Footer, CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  treinamentoId!: number
  trainingDta : TrainingData[] = []

  constructor(private router: ActivatedRoute, private ser : Servicos){}

  ngOnInit(): void {
    this.router.paramMap.subscribe(param => {
      const id = param.get("id")
      this.trainingId(id)
    })
  }

  trainingId(id : any){
    this.ser.servicesGetById(id).subscribe({
      next: (res) =>{
        this.trainingDta = res
      },
      error: (err) =>{
        console.log(err)
      }
    })
  }
}
