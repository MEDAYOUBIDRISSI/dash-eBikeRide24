import { Component, OnInit } from '@angular/core';
import { User } from '../../classe/user.class'
import { AdminServiceService } from './admin-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SupprimerAdminComponent} from './supprimer-admin/supprimer-admin.component'
import { AjouterAdminComponent} from './ajouter-admin/ajouter-admin.component'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  Users: User[]=[];
  User:User={nom:"",prenom:""}
  private pageSlice=this.Users

  constructor(private AdminService: AdminServiceService,
    private router: Router,public dialog: MatDialog) { } 

    ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.AdminService.getAdminsList().subscribe(data => {
      this.Users = data.Users;
      this.pageSlice=this.Users.slice(0,10);
      console.log(this.Users)
    }); 
  }

  deleteUsers(_id: number){
    this.AdminService.deleteAdmin(_id).subscribe( data => {
      console.log(data);
      this.getUsers();
    }, error => console.log(error));
  }

  updateUsers(_id: number){ 
    this.router.navigate(['dash/users/modifier-admin', _id]);
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

  DeleteByDialog(_id: number): void {
    this.AdminService.getAdminById(_id).subscribe(data => {
      this.User = data.User;
      const dialogRef = this.dialog.open(SupprimerAdminComponent, {
        width: '400px',
        data: this.User
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.deleteUsers(_id)
        }
      });
    }, error => console.log(error));
  }

  AjouterByDialog()
  {
    this.dialog.open(AjouterAdminComponent);
  }

}
