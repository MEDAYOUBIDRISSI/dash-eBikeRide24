import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Auth } from '../../dashboard/classe/auth.class';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getUserAuth(): Observable<any>{
    return this.httpClient.get<Auth[]>(`${this.baseURL}/user/auth/coki`);
  }

  login(Auth: Auth): Observable<any>{
    return this.httpClient.post(`${this.baseURL}/user/login`, Auth);
  }
}
