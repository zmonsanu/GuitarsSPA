import { Injectable } from '@angular/core';

@Injectable()
export class GuitarService {


private guitars:Guitar[] =
[
    {
      nombre: "Fender Stratocaster 1972",
      descripcion: "Gran guitarra. Cuerpo de arce y Diapasón de Rosewood.",
      img: "assets/img/strato72.jpg",
      fecha: "01-1972",
      fabricante:"Fender Musical Instrument"
    },
    {
      nombre: "Gibson SG I 1974",
      descripcion: "Guitarra con pastilla Mini-humbucker. Diapasón de Rosewood.",
      img: "assets/img/gibsonSGI.JPG",
      fecha: "1974",
      fabricante:"Gibson"
    },
    {
      nombre: "Gibson SG Standard White 2007",
      descripcion: "Guitarra con 2 pastillas gibson . Diapasón de Rosewood.",
      img: "assets/img/gibsonSGWhite.jpg",
      fecha: "2007",
      fabricante:"Gibson"
    },
    {
      nombre: "Gibson Flying V 1974 White",
      descripcion: "Guitarra con 2 pastillas Dimarzio SuperDistorsion . Diapasón de Rosewood.",
      img: "assets/img/gibsonFlying.JPG",
      fecha: "1974",
      fabricante:"Gibson"
    },
    {
      nombre: "Fender Stratocaster Deluxe 2004 ",
      descripcion: "Edición Especial de Fender por 50 aniversario. Set de Pastillas Kinmann",
      img: "assets/img/strato2004.jpg",
      fecha: "2004",
      fabricante:"Fender Musical Instrument"
    },
    {
      nombre: "Gibson Les Paul Custom 1997 Alpine White",
      descripcion: "Guitarra con pastilla Gibson 540. Diapasón de Ébano.",
      img: "assets/img/gibson_LP_custom.JPG",
      fecha: "1997",
      fabricante:"Gibson"
    }
  ];

  constructor() {   console.log("Servicio Listo para Usarse..") }

  getGuitars():Guitar[]{
        return this.guitars;
      }
  getGuitar(idx:string):Guitar[]{
        return this.guitars[idx];
      }

  buscarGuitars(termino:string):Guitar[]{
        let guitarArr:Guitar[]=[];
        termino=termino.toLowerCase();
        for(let guitar of this.guitars){
          let nombre = guitar.nombre.toLowerCase();
          if(nombre.indexOf(termino)>=0){
            guitarArr.push(guitar);
          }
        }

        return guitarArr;

      }
};

  export interface Guitar {
    nombre:string;
    descripcion:string;
    img:string;
    fecha:string;
    fabricante:string;
  };
