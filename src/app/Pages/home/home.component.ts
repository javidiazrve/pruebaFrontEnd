import { Component, OnInit } from '@angular/core';
import { Credito } from '../../interfaces';
import { CreditoService } from '../../Services/credito.service';
import { environment } from '../../../environments/environment.prod';
import { RefreshService } from '../../Services/refresh.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private creditoService: CreditoService, private refreshService: RefreshService, private _snackBar: MatSnackBar) { }

  newCredito: Credito = {
    nombre: '',
    correo: '',
    cedula: '',
    valorSolicitado: 0,
    fechaAPagar: null,
    estadoDeCredito: false,
    pagoCredito: false
  }

  hoy: Date = new Date();

  ngOnInit(): void {
  }

  async nuevoCredito() {

    const respuesta: any = await this.creditoService.validarCredito(this.newCredito);

    if (respuesta.ok) {

      this.newCredito.estadoDeCredito = respuesta.estadoCredito;

      this.creditoService.nuevoCredito(this.newCredito).then(res => {
        this.descontarMontoBase(this.newCredito.valorSolicitado);
        
        if(this.newCredito.estadoDeCredito){
          this.mostrarMensaje('Su solicitud ha sido APROBADA');
        }else{
          this.mostrarMensaje('Su solicitud ha sido RECHAZADA')
        }

        this.newCredito = {
          nombre: '',
          correo: '',
          cedula: '',
          valorSolicitado: 0,
          fechaAPagar: null,
          estadoDeCredito: false,
          pagoCredito: false
        };
      })

    } else {

      this.mostrarMensaje(respuesta.message)

    }

  }

  descontarMontoBase(monto){

    environment.CapitalBaseBanco -= monto;
    this.refreshService.refescarMontoBase()
    console.log(environment.CapitalBaseBanco);
    

  }

  setMonto(value) {

    this.newCredito.valorSolicitado = value;

  }

  mostrarMensaje(message) {
      this._snackBar.open(message, 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
  }

  //
  // Deshabilita el boton de submit si alguno de las propiedades esta vacia o son invalidas
  //

  validarFormulario() {
    if (this.newCredito.nombre === '' || this.newCredito.correo === '' || this.newCredito.cedula === '' || this.newCredito.valorSolicitado < 10000 || this.newCredito.valorSolicitado > 100000) {
      return true;
    } else {
      return false;
    }
  }

}
