import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendarCitaMedicoService } from '../services/agendar-cita-medico.service';
import { doctorService } from '../services/doctor.service';

@Component({
  selector: 'app-agendar-cita-medico',
  templateUrl: './agendar-cita-medico.component.html',
  styleUrls: ['./agendar-cita-medico.component.css']
})
export class AgendarCitaMedicoComponent {
  
  name: string = '';
  lastName: string = '';
  documentType: string = 'DNI';
  documentNumber: string = '';
  date: string = '';
  hour: string = '09:00';
  doctor: string = '';

  formSubmitted: boolean = false;
  loginForm: FormGroup;

  doctorId: string = '';
  doctorName: string = '';
  doctorLastName: string = '';
  doctorSpecialty: string = '';
  doctorSpecialtyName: string = '';
  doctorImage: string = '';


  loading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ss: AgendarCitaMedicoService,
    private ds: doctorService
  ) {
    
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      documentType: ['', [Validators.required]],
      documentNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      hour: ['', [Validators.required]],
      doctor: [''],
      doctorName: [''],
      doctorSpecialty: [''],
      doctorImage: ['']
    });
  }

  doctors :any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.doctorId = id;
      this.ds.__getDoctor(id).subscribe((rest: any) => {
        this.doctors = rest.data
        console.log(this.doctors)
        var doctor = this.doctors[0];
        this.doctorName = `${doctor.name}`;
        this.doctorLastName = `${doctor.lastName}`;
        this.doctorSpecialty = `${doctor.specialty}`; 
        this.doctorSpecialtyName = `${doctor.specialtyName}`; 
        this.doctorImage = `${doctor.image}`; 
      })
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.valid) {

      this.loading = true;  // Mostrar el loader
      
      this.loginForm.value.doctor = this.doctorId;
      this.loginForm.value.doctorName = this.doctorName;
      this.loginForm.value.doctorLastName = this.doctorLastName;
      this.loginForm.value.doctorSpecialty = this.doctorSpecialty;
      this.loginForm.value.doctorSpecialtyName = this.doctorSpecialtyName;
      this.loginForm.value.doctorImage = this.doctorImage;

      const formData = this.loginForm.value;
      console.log(formData);
      this.ss.agendarCita(formData).subscribe(
        response => {
          console.log(response);
          if(response.result == true) this.router.navigate([`/confirmacion-cita/${response.id}`]);
        },
        error => {
          this.loading = false;
          console.error("Error al agendar la cita", error);
        }
      );
    } else {
      console.error("Formulario inválido");
    }
  }
}
