import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMiembroComponent } from './eliminar-miembro.component';

describe('EliminarMiembroComponent', () => {
  let component: EliminarMiembroComponent;
  let fixture: ComponentFixture<EliminarMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarMiembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
