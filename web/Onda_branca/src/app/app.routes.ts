import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Seachs } from './components/seachs/seachs';
import { Publicao } from './components/publicao/publicao';
import { Sobre } from './components/sobre/sobre';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"search", component: Seachs},
  {path:"sobre", component: Sobre},
  {path:"publicacao", component: Publicao}
];
