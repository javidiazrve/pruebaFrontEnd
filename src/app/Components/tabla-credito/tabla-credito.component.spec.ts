import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCreditoComponent } from './tabla-credito.component';

describe('TablaCreditoComponent', () => {
  let component: TablaCreditoComponent;
  let fixture: ComponentFixture<TablaCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
