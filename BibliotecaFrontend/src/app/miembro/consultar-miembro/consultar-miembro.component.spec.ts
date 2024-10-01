import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarMiembroComponent } from './consultar-miembro.component';

describe('ConsultarMiembroComponent', () => {
  let component: ConsultarMiembroComponent;
  let fixture: ComponentFixture<ConsultarMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsultarMiembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
