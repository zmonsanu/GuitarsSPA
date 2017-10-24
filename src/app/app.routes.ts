import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { PipesComponent } from './components/pipes/pipes.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guitars', component: GuitarsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'guitar/:id', component: GuitarComponent },
  { path: 'search/:nombre', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
