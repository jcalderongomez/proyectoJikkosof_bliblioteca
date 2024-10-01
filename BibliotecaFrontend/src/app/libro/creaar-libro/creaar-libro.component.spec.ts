import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaarLibroComponent } from './creaar-libro.component';

describe('CreaarLibroComponent', () => {
  let component: CreaarLibroComponent;
  let fixture: ComponentFixture<CreaarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaarLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
