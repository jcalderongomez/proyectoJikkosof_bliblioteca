import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarBibliotecaComponent } from './eliminar-biblioteca.component';

describe('EliminarBibliotecaComponent', () => {
  let component: EliminarBibliotecaComponent;
  let fixture: ComponentFixture<EliminarBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarBibliotecaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
