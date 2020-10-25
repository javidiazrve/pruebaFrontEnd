import { Component, OnInit } from '@angular/core';
import { Credito } from '../../interfaces';
import { CreditoService } from '../../Services/credito.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {

  constructor(private creditoService: CreditoService) { }

  creditoModal: Credito;

  ngOnInit(): void {

  }

  mostrarCredito(e) {

    this.creditoModal = e;

  }

}
