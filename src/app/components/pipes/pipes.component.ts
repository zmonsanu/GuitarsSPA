import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: []
})
export class PipesComponent implements OnInit {

nombre:string="Santana";

arrayGuitars:string[]=["Fenders", "Gibson","Ibanez","Knagss","PRS","Tyler","Suhr"];

numeroPi= Math.PI;

a=0.2345;

precio=1599.99;

objGuitar={
  fabricante:"Fender",
  modelo:"Stratocaster",
  año:"1969"
}
  constructor() { }

  ngOnInit() {
  }

}
