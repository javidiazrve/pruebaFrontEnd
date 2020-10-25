import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-monto-solicitud',
  templateUrl: './input-monto-solicitud.component.html',
  styleUrls: ['./input-monto-solicitud.component.scss']
})
export class InputMontoSolicitudComponent implements OnInit {

  @Output() montoSolicitudEvent = new EventEmitter<string>();

  valorMinimo: number = 10000;
  valorMaximo: number = 100000;

  constructor() { }

  ngOnInit(): void {
  }

  setMonto(e) {
    this.montoSolicitudEvent.emit(e.target.value);
  }

}
