import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  url = `${API_URL}/clients`;  
  
  getClients(doctorId): Observable<any> {
    return this.http.get(this.url, { params: {doctorId } });
  }
}
