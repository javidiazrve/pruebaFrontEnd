import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { RefreshService } from './Services/refresh.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PruebaFrontEnd';
  montoBase$: Observable<number>;
  montoBaseBanco: number;
  constructor(private refreshService: RefreshService){}

  ngOnInit(): void {
    this.montoBase$ = this.refreshService.getMontoBase();
    this.montoBase$.subscribe(montoBase => this.montoBaseBanco = montoBase);
    this.refreshService.refescarMontoBase();
  }
}
