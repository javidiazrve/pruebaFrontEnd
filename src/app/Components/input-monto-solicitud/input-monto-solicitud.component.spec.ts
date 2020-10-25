import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMontoSolicitudComponent } from './input-monto-solicitud.component';

describe('InputMontoSolicitudComponent', () => {
  let component: InputMontoSolicitudComponent;
  let fixture: ComponentFixture<InputMontoSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMontoSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputMontoSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
