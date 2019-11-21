import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDatosComponent } from './component-datos.component';

describe('ComponentDatosComponent', () => {
  let component: ComponentDatosComponent;
  let fixture: ComponentFixture<ComponentDatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
