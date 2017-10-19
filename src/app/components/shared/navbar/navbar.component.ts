import { Component, OnInit } from '@angular/core';
import {GuitarService,Guitar} from '../../../servicios/guitar.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {

  constructor(private _guitarService:GuitarService,
              private _router:Router) { }

  ngOnInit() {
  }

  buscarGuitar(texto:string){
  //  console.log(texto);
    //this.heroes = this._heroesService.buscarHeroes(texto);
    this._router.navigate(['/search',texto]);}



}
