import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from '../inbox-service.service'
import { MasterServiceService } from './../../../layouts/masterPage/nave-bare/master-service.service'
import { User } from '../../classe/user.class'
import { Chat } from '../../classe/chat.class'
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  // chats: Chat[]=[];
  // chat:Chat={}
  // public User: User={nom:'',prenom:''}
  // public toUser: User={nom:'',prenom:''}
  // _idFromUser: any;
  // _idToUser: any;

  constructor(private InboxService: InboxServiceService,private MasterService: MasterServiceService,private route: ActivatedRoute,
    private router: Router) { } 

  ngOnInit(): void {
    // this._idFromUser = localStorage.getItem('jwt-IDUser')
    // this._idToUser = this.route.snapshot.params['_id'];
    // this.getUserAuth()
    // this.getUsertoChat()
  }

  // getUserAuth(){
  //   this.MasterService.getUserAuth(this._idFromUser).subscribe(data => {
  //     this.User = data.User;
  //     this.getChats()
  //   }); 
  // }

  // saveChat(){
  //   this.chat.fromUser=this.User
  //   this.chat.toUser=this.toUser
  //   this.InboxService.createChat(this.chat).subscribe( data =>{
  //     console.log(data);
  //     this.getChats();
  //   },
  //   error => console.log(error));
  // }

  // getUsertoChat(){
  //   this.MasterService.getUserById(this._idToUser).subscribe(data => {
  //     this.toUser = data.User;
      
  //   }); 
  // }

  // getChats(){
  //   this.InboxService.getChatFromUserToUser(this._idFromUser,this._idToUser).subscribe(data => {
  //     this.chats = data.chat;
  //     this.getInboxUserValue()
  //   }); 
  // }

  // getInboxUserValue()
  // {
  //   for (var i = 0; i < this.chats.length; i++) {
  //     if(this.chats[i].fromUser._id == this.User._id)
  //     {
  //       this.chats[i].verification="from"
  //     }
  //     else if(this.chats[i].fromUser._id != this.User._id)
  //     {
  //       this.chats[i].verification="to"
  //     }
  //   }
  //   console.log(this.User)
  //   console.log(this.chats)
  // }

}
