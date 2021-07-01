import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from './inbox-service.service'
import { MasterServiceService } from './../../layouts/masterPage/nave-bare/master-service.service'
import { User } from '../classe/user.class'
import { Chat } from '../classe/chat.class'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  chats: Chat[]=[];
  chats_display: Chat[]=[];
  private pageSlice=this.chats
  distinctChats_display:any
  distinctChats:any
  public User: User={nom:'',prenom:''}
  _id: any;

  constructor(private InboxService: InboxServiceService,private MasterService: MasterServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this._id = localStorage.getItem('jwt-IDUser')
    this.getUserAuth()
    this.getChatForInboxs();
  }

  getChatForInboxs(){
    this.InboxService.getChatForInbox(this._id).subscribe(data => {
      this.chats = data.chat;
      this.getInboxUserValue()
      
    }); 
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.distinctChats.length)
      {
          endIndex = this.distinctChats.length;
      }
      this.pageSlice=this.distinctChats.slice(startIndex,endIndex);
  } 

  getUserAuth(){
    this.MasterService.getUserAuth(this._id).subscribe(data => {
      this.User = data.User;
      console.log(this.User)
    }); 
  }

  getInboxUserValue()
  {
    for (var i = 0; i < this.chats.length; i++) {
      if(this.chats[i].fromUser._id == this.User._id)
      {
        this.chats[i].inboxUser=this.chats[i].toUser
      }
      else if(this.chats[i].fromUser._id != this.User._id)
      {
        this.chats[i].inboxUser=this.chats[i].fromUser
      }
    }

    this.displayDistinctChat()
  }

  displayDistinctChat(){
      this.distinctChats = this.chats.filter(
      (thing, i, arr) => arr.findIndex(t => t.inboxUser._id === thing.inboxUser._id) === i);
      this.pageSlice=this.distinctChats.slice(0,10);
      
  }

  goToChat(_id: number){ 
    this.router.navigate(['dash/chat', _id]);
  }



}
