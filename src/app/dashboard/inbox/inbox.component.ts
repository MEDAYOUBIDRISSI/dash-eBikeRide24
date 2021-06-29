import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from './inbox-service.service'
import { MasterServiceService } from './../../layouts/masterPage/nave-bare/master-service.service'
import { User } from '../classe/user.class'
import { Chat } from '../classe/chat.class'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';
import { of } from 'rxjs';
import { distinct } from 'rxjs/operators';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  chats: Chat[]=[];
  chats_display: Chat[]=[];
  private pageSlice=this.chats
  distinctThings:any
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
      this.test()
    }); 
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.distinctThings.length)
      {
          endIndex = this.distinctThings.length;
      }
      this.pageSlice=this.distinctThings.slice(startIndex,endIndex);
  } 

  getUserAuth(){
    this.MasterService.getUserAuth(this._id).subscribe(data => {
      this.User = data.User;
    }); 
  }

  test(){
      this.distinctThings = this.chats.filter(
      (thing, i, arr) => arr.findIndex(t => t.toUser._id === thing.toUser._id) === i
    );
    this.pageSlice=this.distinctThings.slice(0,10);
  }


}
