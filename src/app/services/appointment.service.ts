import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class appointmentService {

  private apiUrl = 'https://us-central1-tunegozio.cloudfunctions.net/api/upc';

  constructor(private http: HttpClient) { }

  __getAppointment(id: string): Observable<any> {
    const url = `${this.apiUrl}/appointments/${id}`;
    return this.http.get(url);
  }

}