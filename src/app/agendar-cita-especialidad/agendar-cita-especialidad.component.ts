import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doctorsBySpecialtyService } from '../services/doctorsBySpecialty.service';

@Component({
  selector: 'app-agendar-cita-pediatria',
  templateUrl: './agendar-cita-especialidad.component.html',
  styleUrls: ['./agendar-cita-especialidad.component.css']
})
export class AgendarCitaEspecialidadComponent {
  constructor(
    private readonly ss: doctorsBySpecialtyService,
    private route: ActivatedRoute,
  ) {}

  doctors :any = [];

  __getDoctorsBySpecialty() {
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.ss.__getDoctorsBySpecialty(id).subscribe((rest: any) => {
        this.doctors = rest.data
        console.log(this.doctors)
      })
    });
  }

  ngOnInit(): void {
    this.__getDoctorsBySpecialty()
  }
}
