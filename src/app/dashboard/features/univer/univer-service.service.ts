import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Univer } from '../../classe/univer.class';

@Injectable({
  providedIn: 'root'
})
export class UniverServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getUniversList(): Observable<Univer[]>{
    return this.httpClient.get<Univer[]>(`${this.baseURL}/univer/all`);
  }

  createUniver(Univer: Univer): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/univer/create`, Univer);
  }

  getUniverById(_id: number): Observable<Univer>{
    return this.httpClient.get<Univer>(`${this.baseURL}/univer/${_id}`);
  }

  updateUniver(_id: number, Univer: Univer): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/univer/update?univerID=${_id}`, Univer);
  }

  deleteUniver(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/univer/delete?univerID=${_id}`);
  }
}
 