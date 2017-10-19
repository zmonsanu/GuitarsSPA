import { Component, OnInit } from '@angular/core';
import {GuitarService,Guitar} from '../../servicios/guitar.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html'
})


export class GuitarsComponent implements OnInit {
  guitars:Guitar[]=[];


  constructor(private _guitarService:GuitarService,
              private _router:Router) {

              }

  ngOnInit() {
      this.guitars = this._guitarService.getGuitars();
  }

  verGuitar(idx:number){
    this._router.navigate(['/guitar',idx]);

  }

}
