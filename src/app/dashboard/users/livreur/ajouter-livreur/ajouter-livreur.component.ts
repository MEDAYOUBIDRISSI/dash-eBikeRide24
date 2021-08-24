import { Component, OnInit } from '@angular/core';
import { LivreurServiceService } from '../livreur-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-livreur',
  templateUrl: './ajouter-livreur.component.html',
  styleUrls: ['./ajouter-livreur.component.css']
})
export class AjouterLivreurComponent implements OnInit {

  public User: User={nom:"",prenom:"",typeUser:"Livreur",etat:false,imgProfile:"assets/images/avatar/inconnu.jpg"}

  constructor(private LivreurServiceService: LivreurServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { } 

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
      this.ShowNotification('Livreur Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/users/livreur']);
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
