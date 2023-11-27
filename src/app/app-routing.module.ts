import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { AgendarCitaEspecialidadComponent } from './agendar-cita-especialidad/agendar-cita-especialidad.component';
import { AgendarCitaMedicoComponent } from './agendar-cita-medico/agendar-cita-medico.component';
import { ConfirmacionCitaComponent } from './confirmacion-cita/confirmacion-cita.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'agendar-cita', component: AgendarCitaComponent },
  { path: 'agendar-cita-especialidad/:id', component: AgendarCitaEspecialidadComponent },
  { path: 'agendar-cita-medico/:id', component: AgendarCitaMedicoComponent },
  { path: 'mis-citas', component: MisCitasComponent },
  { path: 'confirmacion-cita/:id', component: ConfirmacionCitaComponent },
  // Otras rutas
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}