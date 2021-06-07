import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class SupportUserServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getSupportUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/user/supportuser/all`);
  }

  createSupportUser(User: User): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/user/create`, User);
  }

  getSupportUserById(_id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/${_id}`);
  }

  updateSupportUser(_id: number, User: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/user/update?userID=${_id}`, User);
  }

  deleteSupportUser(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/user/delete?userID=${_id}`);
  }
}
