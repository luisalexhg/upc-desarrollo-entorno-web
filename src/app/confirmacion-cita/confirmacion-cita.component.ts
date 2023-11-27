import { Component } from '@angular/core';
import { appointmentService } from '../services/appointment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmacion-cita',
  templateUrl: './confirmacion-cita.component.html',
  styleUrls: ['./confirmacion-cita.component.css']
})
export class ConfirmacionCitaComponent {

  name: string = '';
  lastName: string = '';
  documentType: string = 'DNI';
  documentNumber: string = '';
  date: string = '';
  hour: string = '09:00';
  doctor: string = '';


  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private as: appointmentService
  ) {
   
  }

  appointments :any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.as.__getAppointment(id).subscribe((rest: any) => {
        this.appointments = rest.data
        console.log(this.appointments)
      })
    });
  }
}
