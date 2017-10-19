import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router' /* permite capturar la url que se pasa*/
import {GuitarService,Guitar} from '../../servicios/guitar.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent implements OnInit {
  guitarsSearch:Guitar[]=[];
  mostrarInfo:boolean=false;
  terminoABuscar :string;
  existenResultados:boolean=false;
  constructor(private activatedRoute:ActivatedRoute,
              private _router:Router,
              private _guitarsService:GuitarService) { }

    ngOnInit() {
              this.activatedRoute.params.subscribe( params =>{
              this.guitarsSearch = this._guitarsService.buscarGuitars(params['nombre']);
              console.log(this.guitarsSearch);
              this.terminoABuscar=params['nombre'];
              this.existenResultados=(this.guitarsSearch.length>0);

              });
              }

              verGuitar(idx:number){
                this._router.navigate(['/guitar',idx]);
              }

}
