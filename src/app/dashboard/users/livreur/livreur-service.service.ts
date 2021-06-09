import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class LivreurServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getLivreursList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/user/livreur/all`);
  }

  createLivreur(User: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/user/create`, User);
  }

  getLivreurById(_id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/edite/${_id}`);
  }

  updateLivreur(_id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/user/update?UserID=${_id}`, User);
  }

  deleteLivreur(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/user/delete?UserID=${_id}`);
  }
}
