import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRespuestaComponent } from './componente-respuesta.component';

describe('ComponenteRespuestaComponent', () => {
  let component: ComponenteRespuestaComponent;
  let fixture: ComponentFixture<ComponenteRespuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteRespuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRespuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
