import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getAdminsList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/user/admin/all`);
  }

  createAdmin(User: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/user/create`, User);
  }

  getAdminById(_id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/edite/${_id}`);
  }

  updateAdmin(_id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/user/update?UserID=${_id}`, User);
  }

  deleteAdmin(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/user/delete?UserID=${_id}`);
  }
}
