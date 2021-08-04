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

  chats: Chat[]=[];
  chats_display: Chat[]=[];
  chat:Chat={}
  public User: User={nom:'',prenom:''}
  public toUser: User={nom:'',prenom:''}
  _idFromUser: any;
  _idToUser: any;

  // public users: any = 0;
  // public message: string = '';
  // public messages: any[] = [];

  constructor(private InboxService: InboxServiceService,private MasterService: MasterServiceService,private route: ActivatedRoute,
    private router: Router) { } 

  ngOnInit(): void {
    this._idFromUser = localStorage.getItem('jwt-IDUser')
    this._idToUser = this.route.snapshot.params['_id'];
    this.getUserAuth()
    // this.InboxService.receiveChat().subscribe(message => {
    //   this.messages.push(message);
    // });

    // this.InboxService.getUsers().subscribe(users => {
    //   this.users = users;
    // });
  }

  getUserAuth(){
    this.MasterService.getUserAuth(this._idFromUser).subscribe(data => {
      this.User = data.User;
      this.getUsertoChat()
    }); 
  }

  saveChat(){
    this.chat.fromUser=this.User
    this.chat.toUser=this.toUser
    this.InboxService.createChat(this.chat).subscribe( data =>{
      this.chat.message =""
      this.getChats()
    },
    error => console.log(error));
  }

  getUsertoChat(){
    this.MasterService.getUserById(this._idToUser).subscribe(data => {
      this.toUser = data.User;
      this.getChats()
    }); 
  }

  getChats(){
    this.InboxService.getChatFromUserToUser(this.User._id,this.toUser._id).subscribe(data => {
      this.chats = data.chat;
    }); 
  }

  // addChat(){
  //   this.messages.push(this.message);
  //   this.InboxService.sendChat(this.message);
  //   this.message = '';
  // }


}
