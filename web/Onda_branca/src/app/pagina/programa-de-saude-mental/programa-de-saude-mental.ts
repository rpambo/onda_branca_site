import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Footer } from '../../components/footer/footer';
import { ProgramaDeSaudeMentalDesafio } from '../../components/programa-de-saude-mental/programa-de-saude-mental-desafio/programa-de-saude-mental-desafio';
import { ProgramaDeSaudeMentalSolucao } from "../../components/programa-de-saude-mental/programa-de-saude-mental-solucao/programa-de-saude-mental-solucao";
import { ProgramaDeSaudeMentalPilares } from "../../components/programa-de-saude-mental/programa-de-saude-mental-pilares/programa-de-saude-mental-pilares";
import { ProgramaDeSaudeMentalSolucoesParaEmpresa } from '../../components/programa-de-saude-mental/programa-de-saude-mental-solucoes-para-empresa/programa-de-saude-mental-solucoes-para-empresa';
import { ProgramaDeSaudeMentalInvestir } from '../../components/programa-de-saude-mental/programa-de-saude-mental-investir/programa-de-saude-mental-investir';
import { ContactoProgramaDeSaudeMental } from "../../components/contacto/contacto-programa-de-saude-mental/contacto-programa-de-saude-mental";

@Component({
  selector: 'app-programa-de-saude-mental',
  imports: [Navbar, Footer, ProgramaDeSaudeMentalDesafio, ProgramaDeSaudeMentalSolucao, ProgramaDeSaudeMentalPilares, ProgramaDeSaudeMentalSolucoesParaEmpresa, ProgramaDeSaudeMentalInvestir, ContactoProgramaDeSaudeMental],
  templateUrl: './programa-de-saude-mental.html',
  styleUrl: './programa-de-saude-mental.css'
})
export class ProgramaDeSaudeMental {

}
