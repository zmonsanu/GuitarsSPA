import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router' /* permite capturar la url que se pasa*/
import {GuitarService,Guitar} from '../../servicios/guitar.service';

@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html'
})
export class GuitarComponent  {
guitar:any={};
  constructor( private activatedRoute:ActivatedRoute,
                private _guitarService:GuitarService) {
                  this.activatedRoute.params.subscribe( params =>{
                    //console.log(params['id']);});
                  this.guitar = this._guitarService.getGuitar(params['id']);
                });

                }
}
