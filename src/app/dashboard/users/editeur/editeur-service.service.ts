import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class EditeurServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getEditeursList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/user/editeur/all`);
  }

  createEditeur(User: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/user/create`, User);
  }

  getEditeurById(_id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/${_id}`);
  }

  updateEditeur(_id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/user/update?userID=${_id}`, User);
  }

  deleteEditeur(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/user/delete?userID=${_id}`);
  }
}
