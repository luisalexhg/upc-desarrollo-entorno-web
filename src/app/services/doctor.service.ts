import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class doctorService {

  private apiUrl = 'https://us-central1-tunegozio.cloudfunctions.net/api/upc';

  constructor(private http: HttpClient) { }

  __getDoctor(id: string): Observable<any> {
    const url = `${this.apiUrl}/doctors/${id}`;
    return this.http.get(url);
  }

}