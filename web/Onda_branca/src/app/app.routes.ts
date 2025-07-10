import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Seachs } from './components/seachs/seachs';
import { Publicao } from './components/publicao/publicao';
import { Sobre } from './components/sobre/sobre';
import { Contacto } from './components/contacto/contacto';
import { Comunidade } from './components/comunidade/comunidade';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"search", component: Seachs},
  {path:"sobre", component: Sobre},
  {path:"publicacao", component: Publicao},
  {path:"contactos", component: Contacto},
  {path:"comunidade", component: Comunidade}
];
