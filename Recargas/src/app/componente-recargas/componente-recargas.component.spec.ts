import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteRecargasComponent } from './componente-recargas.component';

describe('ComponenteRecargasComponent', () => {
  let component: ComponenteRecargasComponent;
  let fixture: ComponentFixture<ComponenteRecargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteRecargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteRecargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
