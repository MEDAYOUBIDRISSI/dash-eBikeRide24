import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from '../inbox-service.service'
import { MasterServiceService } from '../../../layouts/masterPage/nave-bare/master-service.service'
import { User } from '../../classe/user.class'
import { Chat } from '../../classe/chat.class'
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  Users:User[]=[]
  User: User={nom:'',prenom:''}
  _id: any;

  constructor(private InboxService: InboxServiceService,private MasterService: MasterServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this._id = localStorage.getItem('jwt-IDUser')
    this.getUserAuth()
    this.getUsers()
  } 

  getUserAuth(){
    this.MasterService.getUserAuth(this._id).subscribe(data => {
      this.User = data.User;
    }); 
  }

  getUsers(){
    this.InboxService.getUsersList().subscribe(data => {
      this.Users = data.Users;
      console.log(this.Users)
    }); 
  }



} 
