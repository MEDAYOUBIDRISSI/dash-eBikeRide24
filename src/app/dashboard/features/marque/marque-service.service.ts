import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Marque } from '../../classe/marque.class';

@Injectable({
  providedIn: 'root'
})
export class MarqueServiceService {
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getMarquesList(): Observable<Marque[]>{
    return this.httpClient.get<Marque[]>(`${this.baseURL}/marque/all`);
  }

  createMarque(Marque: Marque): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/marque/create`, Marque);
  }

  getMarqueById(_id: number): Observable<Marque>{
    return this.httpClient.get<Marque>(`${this.baseURL}/marque/${_id}`);
  }

  updateMarque(_id: number, Marque: Marque): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/marque/update?MarqueID=${_id}`, Marque);
  }

  deleteMarque(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/marque/delete?MarqueID=${_id}`);
  }
}
