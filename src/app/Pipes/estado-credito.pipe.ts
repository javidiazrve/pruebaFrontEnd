import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoCredito'
})
export class EstadoCreditoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    
    if(value){
      return 'Aprobado';
    }else{
      return 'Rechazado';
    }
  }

}
