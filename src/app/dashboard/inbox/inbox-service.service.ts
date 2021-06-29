import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Chat } from '../classe/chat.class';

@Injectable({
  providedIn: 'root'
})
export class InboxServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }


  createChat(Chat: Chat): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/chat/create`, Chat);
  }

  getChatForInbox(_id: any): Observable<Chat>{
    return this.httpClient.get<Chat>(`${this.baseURL}/chat/inbox/${_id}`);
  }

  updateChat(_id: number, Chat: Chat): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/chat/update?chatID=${_id}`, Chat);
  }

  deleteChat(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/chat/delete?chatID=${_id}`);
  }
}
