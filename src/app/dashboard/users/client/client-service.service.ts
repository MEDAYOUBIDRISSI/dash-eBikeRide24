import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {

   
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getClientsList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/user/client/all`);
  }

  createClient(User: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/user/create`, User);
  }

  getClientById(_id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/edite/${_id}`);
  }

  updateClient(_id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/user/update?UserID=${_id}`, User);
  }

  deleteClient(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/user/delete?userID=${_id}`);
  }
}
