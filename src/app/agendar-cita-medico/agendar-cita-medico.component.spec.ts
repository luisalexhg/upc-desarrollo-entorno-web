import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarCitaMedicoComponent } from './agendar-cita-medico.component';

describe('AgendarCitaMedicoComponent', () => {
  let component: AgendarCitaMedicoComponent;
  let fixture: ComponentFixture<AgendarCitaMedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgendarCitaMedicoComponent]
    });
    fixture = TestBed.createComponent(AgendarCitaMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
