import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMiembroComponent } from './listar-miembro.component';

describe('ListarMiembroComponent', () => {
  let component: ListarMiembroComponent;
  let fixture: ComponentFixture<ListarMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarMiembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
