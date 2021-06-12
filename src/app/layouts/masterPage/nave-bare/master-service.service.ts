import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../../dashboard/classe/user.class';

@Injectable({
  providedIn: 'root'
})
export class MasterServiceService {
  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getUserAuth(_id: any): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/user/auth/${_id}`);
  }
  //set Information in html
}
