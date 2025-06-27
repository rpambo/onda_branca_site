import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Seachs } from './components/seachs/seachs';

export const routes: Routes = [
  {path:"", component: Home},
  {path:"search", component: Seachs}
];
