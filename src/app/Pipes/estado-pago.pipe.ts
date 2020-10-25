import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estadoPago'
})
export class EstadoPagoPipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): unknown {
    
    if(value){
      return 'Si'
    }else{
      return 'No'
    }

  }

}
