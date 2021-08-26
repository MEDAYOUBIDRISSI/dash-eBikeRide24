import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Remise } from '../../classe/remise.class';

@Injectable({
  providedIn: 'root'
})
export class RemiseServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getRemisesList(): Observable<Remise[]>{
    return this.httpClient.get<Remise[]>(`${this.baseURL}/remise/all`);
  }

  createRemise(Remise: Remise): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/remise/create`, Remise);
  }

  getRemiseById(_id: number): Observable<Remise>{
    return this.httpClient.get<Remise>(`${this.baseURL}/remise/${_id}`);
  }

  updateRemise(_id: number, Remise: Remise): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/remise/update?RemiseID=${_id}`, Remise);
  }

  deleteRemise(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/remise/delete?RemiseID=${_id}`);
  }
}
