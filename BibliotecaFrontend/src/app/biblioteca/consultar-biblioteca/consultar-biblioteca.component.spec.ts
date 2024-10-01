import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarBibliotecaComponent } from './consultar-biblioteca.component';

describe('ConsultarBibliotecaComponent', () => {
  let component: ConsultarBibliotecaComponent;
  let fixture: ComponentFixture<ConsultarBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
