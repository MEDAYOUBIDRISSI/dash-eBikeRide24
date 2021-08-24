import { Component, OnInit } from '@angular/core';
import { User } from '../../classe/user.class'
import { ClientServiceService } from './client-service.service'
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator'; 
import { ClientStatusComponent} from './client-status/client-status.component'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  Users: User[]=[];
  User:User={nom:"",prenom:""}
  private pageSlice=this.Users
  SearchThings:any 
  
  constructor(private ClientService: ClientServiceService,
    private router: Router,public dialog: MatDialog) { } 

    ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.ClientService.getClientsList().subscribe(data => {
      this.Users = data.Users;
      this.pageSlice=this.Users.slice(0,10);
      console.log(this.Users)
    }); 
  }

  changeStatusOfUser(_id: number){
    this.User.etat=!this.User.etat
    console.log(this.User.etat)
    console.log(!this.User.etat)
    this.ClientService.updateClient(_id, this.User).subscribe( data =>{
      this.getUsers();
    }, error => console.log(error));
  }

  updateUsers(_id: number){ 
    this.router.navigate(['dash/Users/modifier-bicyclette', _id]);
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Users.length)
      {
          endIndex = this.Users.length;
      }
      this.pageSlice=this.Users.slice(startIndex,endIndex);
  } 

  editeClient(_id:number)
  {
    this.router.navigate(['dash/users/clientDetail', _id]);
  }

  ChangeByDialog(_id: number): void {
    this.ClientService.getClientById(_id).subscribe(data => {
      this.User = data.User;
      const dialogRef = this.dialog.open(ClientStatusComponent, {
        width: '400px',
        data: this.User
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.changeStatusOfUser(_id)
        }
      });
    }, error => console.log(error));
  }

  Search()
  {
    if(this.SearchThings == "")
    {
      this.ngOnInit()
    }
    else{
      this.Users=this.Users.filter(res=>{
        if (res.nom != "" || res.prenom != "" || res.tel != "" || res.email != "") {
           return res.nom.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.prenom.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.tel.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.email.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())
          } 
          else 
          { 
            return []; 
          }
      })
      this.getSilcePage()
    }
  }

  getSilcePage()
  {
    this.pageSlice=this.Users.slice(0,10);
  }

}
