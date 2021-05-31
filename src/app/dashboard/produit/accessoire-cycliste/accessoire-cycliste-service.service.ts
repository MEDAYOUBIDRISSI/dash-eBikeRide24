import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../../classe/produit.class';

@Injectable({
  providedIn: 'root'
})
export class AccessoireCyclisteServiceService {

  
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getAccessoireCyclistesList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}/product/accessoirecycliste/all`);
  }

  createAccessoireCycliste(Produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/product/create`, Produit);
  }

  getAccessoireCyclisteById(_id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/product/${_id}`);
  }

  updateAccessoireCycliste(_id: number, Produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/product/update?productID=${_id}`, Produit);
  }

  deleteAccessoireCycliste(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/product/delete?productID=${_id}`);
  }
}
