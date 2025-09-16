import { Routes } from '@angular/router';
import { Home } from './pagina/home/home';
import { Sobre } from './pagina/sobre/sobre';
import { OnAir } from './pagina/on-air/on-air';
import { Contacto } from './pagina/contacto/contacto';
import { Mentoria } from './pagina/mentoria/mentoria';
import { AntendimentoEmpressarial } from './pagina/antendimento-empressarial/antendimento-empressarial';
import { GestaoDeSaudeMentalParaEmpresa } from './pagina/gestao-de-saude-mental-para-empresa/gestao-de-saude-mental-para-empresa';
import { RendaExtra } from './pagina/renda-extra/renda-extra';
import { ProgramaGinasticaLaboral } from './pagina/programa-ginastica-laboral/programa-ginastica-laboral';
import { PalestraEWorkshop } from './pagina/palestra-e-workshop/palestra-e-workshop';
import { ProgramaDeSaudeMental } from './pagina/programa-de-saude-mental/programa-de-saude-mental';
import { PoliticaPrivacidade } from './components/politica-privacidade/politica-privacidade';
import { TermoDeUso } from './components/termo-de-uso/termo-de-uso';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"sobre", component: Sobre},
  {path:"on-air", component: OnAir},
  {path:"contacto", component: Contacto},
  {path:"mentoria-de-saude-mental-para-gestores", component: Mentoria},
  {path:"antendimento-empressarial", component: AntendimentoEmpressarial},
  {path:"gestao-de-saude-mental-para-empressa", component: GestaoDeSaudeMentalParaEmpresa},
  {path:"programa-de-renda-extra", component: RendaExtra},
  {path:"programa-de-ginastica-laboral", component: ProgramaGinasticaLaboral},
  {path:"palestra-e-workshop", component: PalestraEWorkshop},
  {path:"programa-de-saude-mental-no-trabalho", component: ProgramaDeSaudeMental},
  {path:"politica-de-privacidade", component: PoliticaPrivacidade},
  {path:"termo-de-uso", component: TermoDeUso}
];
