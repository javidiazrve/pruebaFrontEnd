import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  constructor() { }

  private montoBaseBanco$ = new Subject<number>();

  getMontoBase(): Observable<number> {
    this.refescarMontoBase();
    return this.montoBaseBanco$.asObservable();
  }

  refescarMontoBase() {
    this.montoBaseBanco$.next(environment.CapitalBaseBanco);
  }

}
