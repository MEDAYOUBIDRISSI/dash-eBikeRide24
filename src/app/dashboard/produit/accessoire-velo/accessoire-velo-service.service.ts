import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../../classe/produit.class';

@Injectable({
  providedIn: 'root'
})
export class AccessoireVeloServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getAccessoireVelosList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}/product/accessoirevelo/all`);
  }

  createAccessoireVelo(Produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/product/create`, Produit);
  }

  getAccessoireVeloById(_id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/product/${_id}`);
  }

  updateAccessoireVelo(_id: number, Produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/product/update?productID=${_id}`, Produit);
  }

  deleteAccessoireVelo(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/product/delete?productID=${_id}`);
  }
}
