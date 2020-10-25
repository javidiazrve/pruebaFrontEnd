import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Credito } from 'app/interfaces';
import { CreditoService } from 'app/Services/credito.service';
import { faEye } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tabla-credito',
  templateUrl: './tabla-credito.component.html',
  styleUrls: ['./tabla-credito.component.scss']
})
export class TablaCreditoComponent implements OnInit {

  @Input() tipo: string;
  @Input() creditosUsuario: Credito[];
  @Output() verCredito = new EventEmitter<any>();
  
  creditos: Credito[];
  faEye = faEye;
  columnas = ['cedula', 'nombre', 'montoSolicitado', 'datos'];
  cargando: boolean = true;
  btnPagar: boolean = false;

  constructor(private creditoService: CreditoService) { }

  ngOnInit(): void {

    switch (this.tipo) {
      case 'aprobados':

        this.columnas.push('boton');
        this.btnPagar = true;
        this.getCreditosAprobados();
        break;

      case 'rechazados':

        this.getCreditosRechazados()
        break;
      case 'todos':

        this.getCreditos();
        break;
      case 'usuario':

        this.creditos = this.creditosUsuario;
        this.cargando = false;
        break;
        
    }

  }

  verInfo(credito) {
    this.verCredito.emit(credito);
  }

  getCreditosRechazados() {

      this.creditoService.getCreditosRechazados().subscribe(res => {

        this.creditos = res.map((credito: any) => {

          return {
            id: credito.payload.doc.id,
            ...credito.payload.doc.data()
          }

        })

      })

      this.cargando = false;
  }

  getCreditosAprobados() {

    this.creditoService.getCreditosAprobados().subscribe(res => {

      this.creditos = res.map((credito: any) => {

        return {
          id: credito.payload.doc.id,
          ...credito.payload.doc.data()
        }

      })

    })

    this.cargando = false;
}

getCreditos() {

  this.creditoService.getCreditos().subscribe(res => {

    this.creditos = res.map((credito: any) => {

      return {
        id: credito.payload.doc.id,
        ...credito.payload.doc.data()
      }

    })

  })

  this.cargando = false;
}


}
