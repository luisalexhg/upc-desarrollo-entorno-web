import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCitaEspecialidadComponent } from './agendar-cita-especialidad.component';

describe('AgendarCitaEspecialidadComponent', () => {
  let component: AgendarCitaEspecialidadComponent;
  let fixture: ComponentFixture<AgendarCitaEspecialidadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarCitaEspecialidadComponent]
    });
    fixture = TestBed.createComponent(AgendarCitaEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
