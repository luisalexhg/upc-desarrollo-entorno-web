import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendarCitaMedicoService {

  private apiUrl = 'https://us-central1-tunegozio.cloudfunctions.net/api/upc';
  constructor(private http: HttpClient) { }

  __getDoctorsAppointmets(id: string): Observable<any> {
    const url = `${this.apiUrl}/doctorsBySpecialty/${id}`;
    return this.http.get(url);
  }

  agendarCita(formData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/agendarCita`, formData);
  }
}