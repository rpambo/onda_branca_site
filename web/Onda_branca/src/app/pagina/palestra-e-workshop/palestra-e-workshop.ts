import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Footer } from "../../components/footer/footer";
import { PalestraEWorkshopIntro } from "../../components/palestra-e-workshop/palestra-e-workshop-intro/palestra-e-workshop-intro";
import { PalestraEWorkshopAnsiedade } from "../../components/palestra-e-workshop/palestra-e-workshop-ansiedade/palestra-e-workshop-ansiedade";
import { PalestraEWorkshopQualidade } from '../../components/palestra-e-workshop/palestra-e-workshop-qualidade/palestra-e-workshop-qualidade';
import { PalestraEWorkshopBeneficio } from '../../components/palestra-e-workshop/palestra-e-workshop-beneficio/palestra-e-workshop-beneficio';
import { ContactoPalestra } from '../../components/contacto/contacto-palestra/contacto-palestra';

@Component({
  selector: 'app-palestra-e-workshop',
  imports: [Navbar, Footer, PalestraEWorkshopIntro, PalestraEWorkshopAnsiedade, PalestraEWorkshopQualidade, PalestraEWorkshopBeneficio, ContactoPalestra],
  templateUrl: './palestra-e-workshop.html',
  styleUrl: './palestra-e-workshop.css'
})
export class PalestraEWorkshop {

}
