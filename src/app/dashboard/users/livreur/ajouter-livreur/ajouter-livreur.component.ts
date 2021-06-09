import { Component, OnInit } from '@angular/core';
import { LivreurServiceService } from '../livreur-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-livreur',
  templateUrl: './ajouter-livreur.component.html',
  styleUrls: ['./ajouter-livreur.component.css']
})
export class AjouterLivreurComponent implements OnInit {

  public User: User={nom:"",prenom:"",typeUser:"Livreur",etat:false}

  constructor(private LivreurServiceService: LivreurServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser()
    {
      this.LivreurServiceService.createLivreur(this.User).subscribe( data =>{
        console.log(data);
        this.goToUserList()
      },
      error => console.log(error));
    }

    goToUserList(){
      this.router.navigate(['dash/users']);
    }

    urls:string="";
    selectFiles(e)
    {
      this.urls=""
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
        this.urls="";
    }

}
