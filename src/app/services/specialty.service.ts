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
    return this.http.get(this.apiUrl);
  }

}