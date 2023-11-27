import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MisCitasComponent } from './mis-citas/mis-citas.component';
import { AgendarCitaComponent } from './agendar-cita/agendar-cita.component';
import { AgendarCitaEspecialidadComponent } from './agendar-cita-especialidad/agendar-cita-especialidad.component';
import { AgendarCitaMedicoComponent } from './agendar-cita-medico/agendar-cita-medico.component';
import { ConfirmacionCitaComponent } from './confirmacion-cita/confirmacion-cita.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MisCitasComponent,
    AgendarCitaComponent,
    AgendarCitaEspecialidadComponent,
    AgendarCitaMedicoComponent,
    ConfirmacionCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
