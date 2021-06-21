import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Produit } from '../../classe/produit.class';
import { Image } from '../../classe/image.class';

@Injectable({
  providedIn: 'root'
}) 
export class BicyletteServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }
 
  getBicyclettesList(): Observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}/product/bicyclette/all`);
  }

  createBicyclette(Produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/product/create`, Produit);
  }

  getBicycletteById(_id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/product/${_id}`);
  }

  updateBicyclette(_id: number, Produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/product/update?productID=${_id}`, Produit);
  }

  deleteBicyclette(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/product/delete?productID=${_id}`);
  }

  createImage(Image: Image): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/image/create`, Image);
  }
}
