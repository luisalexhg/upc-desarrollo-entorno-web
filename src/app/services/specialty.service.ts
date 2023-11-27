import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class specialtyService {

  private apiUrl = 'https://us-central1-tunegozio.cloudfunctions.net/api/upc/specialties';

  constructor(private http: HttpClient) { }

  __getSpecialties(): Observable<any> {
    const url = `${this.apiUrl}/specialties`;
    return this.http.get(url);
  }

}