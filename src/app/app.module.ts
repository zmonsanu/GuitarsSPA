import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';



//Servicios
import {GuitarService} from './servicios/guitar.service';



import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { GuitarsComponent } from './components/guitars/guitars.component';
import { GuitarComponent } from './components/guitar/guitar.component';
import { PipesComponent } from './components/pipes/pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    GuitarsComponent,
    GuitarComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [GuitarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
