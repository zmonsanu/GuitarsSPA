import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Routes
import { APP_ROUTING } from './app.routes';


//Para fechas en formato local
import { LOCALE_ID } from '@angular/core';


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
import { Capitalizado } from './components/pipes/capitalizado.pipe';
import { DomseguroPipe } from './components/pipes/domseguro.pipe';
import { ContrasenaPipe } from './components/pipes/contrasena.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    GuitarsComponent,
    GuitarComponent,
    PipesComponent,
    Capitalizado,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [GuitarService,
              {provide:LOCALE_ID,useValue:'es'}],//Para fechas locales
  bootstrap: [AppComponent]
})
export class AppModule { }
