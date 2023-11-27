import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class doctorsBySpecialtyService {

  private apiUrl = 'https://us-central1-tunegozio.cloudfunctions.net/api/upc';

  constructor(private http: HttpClient) { }

  __getDoctorsBySpecialty(id: string): Observable<any> {
    const url = `${this.apiUrl}/doctorsBySpecialty/${id}`;
    return this.http.get(url);
  }

}