import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Categorie } from '../../classe/categorie.class';

@Injectable({
  providedIn: 'root' 
})
export class CategorieServiceService {
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getCategoriesList(): Observable<Categorie[]>{
    return this.httpClient.get<Categorie[]>(`${this.baseURL}/categorie/all`);
  }

  createCategorie(Categorie: Categorie): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/categorie/create`, Categorie);
  }

  getCategorieById(_id: number): Observable<Categorie>{
    return this.httpClient.get<Categorie>(`${this.baseURL}/categorie/${_id}`);
  }

  updateCategorie(_id: number, Categorie: Categorie): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/categorie/update?categorieID=${_id}`, Categorie);
  }

  deleteCategorie(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/categorie/delete?categorieID=${_id}`);
  }
}
