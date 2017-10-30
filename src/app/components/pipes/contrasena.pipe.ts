import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean): string {

    let result='';
    if(activar){
      for (var char of value) {
        result=result+char.replace(char,'*')
        //console.log(char)
      }
    }else
    {
      result=value;
    }
    return result;
  }
  //Otra opcion mas corta:
  transform2(value: string, activar: boolean = true): string {
      return activar ? value.replace(/./gi, "*") : value;
    }

}
