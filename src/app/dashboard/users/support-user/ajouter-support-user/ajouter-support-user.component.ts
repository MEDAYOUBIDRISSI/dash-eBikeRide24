import { Component, OnInit } from '@angular/core';
import { SupportUserServiceService } from '../support-user-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-support-user',
  templateUrl: './ajouter-support-user.component.html',
  styleUrls: ['./ajouter-support-user.component.css']
})
export class AjouterSupportUserComponent implements OnInit {

  public User: User={nom:"",prenom:"",typeUser:"Support-User",etat:false,imgProfile:"assets/images/avatar/inconnu.jpg"}

  constructor(private SupportUserService: SupportUserServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser()
    {
      this.SupportUserService.createSupportUser(this.User).subscribe( data =>{
        console.log(data);
        this.goToUserList()
      },
      error => console.log(error));
    }

    goToUserList(){
      this.router.navigate(['dash/users']);
    }

    urls:string="assets/images/avatar/inconnu.jpg";
    selectFiles(e)
    {
      this.urls="assets/images/avatar/inconnu.jpg"
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.urls=event.target.result;
        this.User.imgProfile=this.urls
        console.log(this.urls)
     }
    }

    delete_img()
    {
        this.urls="assets/images/avatar/inconnu.jpg";
    }

}
