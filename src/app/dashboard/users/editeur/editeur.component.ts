import { Component, OnInit } from '@angular/core';
import { User } from '../../classe/user.class'
import { EditeurServiceService } from './editeur-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator'; 

@Component({
  selector: 'app-editeur',
  templateUrl: './editeur.component.html',
  styleUrls: ['./editeur.component.css']
})
export class EditeurComponent implements OnInit {

  Users: User[]=[];
  private pageSlice=this.Users

  constructor(private EditeurService: EditeurServiceService,
    private router: Router) { } 

    ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.EditeurService.getEditeursList().subscribe(data => {
      this.Users = data.Users;
      this.pageSlice=this.Users.slice(0,10);
      console.log(this.Users)
    }); 
  }

  deleteUsers(_id: number){
    this.EditeurService.deleteEditeur(_id).subscribe( data => {
      console.log(data);
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

}
