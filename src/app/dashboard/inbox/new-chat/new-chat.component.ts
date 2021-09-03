import { Component, OnInit } from '@angular/core';
import { InboxServiceService } from '../inbox-service.service'
import { MasterServiceService } from '../../../layouts/masterPage/nave-bare/master-service.service'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { User } from '../../classe/user.class'
import { Chat } from '../../classe/chat.class'
import { Router } from '@angular/router'
import {MatSnackBar} from '@angular/material/snack-bar'
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-new-chat',
  templateUrl: './new-chat.component.html',
  styleUrls: ['./new-chat.component.css']
})
export class NewChatComponent implements OnInit {

  Users:User[]=[]
  User: User={nom:'',prenom:''}
  UserSelected: User={nom:'',prenom:''}
  newChat:Chat={}
  _id: any;
  stateCtrl = new FormControl();
  filteredStates: Observable<User[]>;
  selectedValue: string="";
  selected2:any

  constructor(private InboxService: InboxServiceService,private MasterService: MasterServiceService,
    private router: Router,public dialogRef: MatDialogRef<NewChatComponent>,private snackBar: MatSnackBar) { 
      this.getUsers()
      this.filteredStates = this.stateCtrl.valueChanges
    .pipe(
      startWith(''),
      map(user => user ? this._filterStates(user) : this.Users.slice())
    );
    } 

  ngOnInit(): void {
    this._id = localStorage.getItem('jwt-IDUser')
    this.getUserAuth()
   
  } 

  getUserAuth(){
    this.MasterService.getUserAuth(this._id).subscribe(data => {
      this.User = data.User;
      this.newChat.fromUser=this.User
    }); 
  }

  getUsers(){
    this.InboxService.getUsersList().subscribe(data => {
      this.Users = data.Users;
      console.log(this.Users)
    }); 
    // this.getFlterPip()
  }

  private _filterStates(value: string): User[] {
    const filterValue = value.toLowerCase();

    return this.Users.filter(user => user.nom.toLowerCase().includes(filterValue));
  }

  getUserSelected(user:any){
    this.newChat.toUser=user
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendMessage()
  {
    this.InboxService.createChat(this.newChat).subscribe( data =>{
      this.ShowNotification('Message Send to : '+this.newChat.toUser.nom +" "+ this.newChat.toUser.prenom ,'Close','4000',"custom-plus-mins-style")
      this.dialogRef.close("created")
    },
    error => console.log(error));

    console.log(this.newChat)
  }

  ShowNotification(content:any, action:any, duration:any,type:any)
    {
      let sb = this.snackBar.open(content, action, {
        duration: duration,
        panelClass: [type]
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
    }
} 
