import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentePagoComponent } from './componente-pago.component';

describe('ComponentePagoComponent', () => {
  let component: ComponentePagoComponent;
  let fixture: ComponentFixture<ComponentePagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentePagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
