import { Component } from '@angular/core';
import { specialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.component.html',
  styleUrls: ['./agendar-cita.component.css']
})
export class AgendarCitaComponent {
  constructor(
    private readonly ss: specialtyService,
  ) {}

  specialties :any = [];

  __getSpecialties() {
    this.ss.__getSpecialties().subscribe((rest: any) => {
      this.specialties = rest.data
      console.log(this.specialties)
    })
  }

  ngOnInit(): void {
    this.__getSpecialties()
  }

}
