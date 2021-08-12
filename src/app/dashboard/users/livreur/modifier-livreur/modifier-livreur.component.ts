import { Component, OnInit } from '@angular/core';
import { LivreurServiceService } from '../livreur-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { ActivatedRoute,Router } from '@angular/router';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-modifier-livreur',
  templateUrl: './modifier-livreur.component.html',
  styleUrls: ['./modifier-livreur.component.css']
})
export class ModifierLivreurComponent implements OnInit {

  _id: number=-1;
  urls:string="";
  public User: User={nom:'',prenom:''}
  constructor(private LivreurService: LivreurServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe) { }

    ngOnInit(): void {
      this._id = this.route.snapshot.params['_id'];
  
      this.LivreurService.getLivreurById(this._id).subscribe(data => {
        this.User = data.User;
        this.User.dateNaissance=this.datepipe.transform(this.User.dateNaissance, 'yyyy-MM-dd');
        this.User.dateEmbouche=this.datepipe.transform(this.User.dateEmbouche, 'yyyy-MM-dd');
        console.log(this.User) 
      }, error => console.log(error));
    } 
   
    updateUser(){
      this.LivreurService.updateLivreur(this._id, this.User).subscribe( data =>{
        this.goToUserList();
      }, error => console.log(error));
    }
  
    goToUserList(){
      this.router.navigate(['dash/users']);
    }

    
    selectFiles(e)
    {
      var reader=new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload=(event:any)=>{
        this.User.imgProfile=event.target.result
        console.log(this.urls)
     }
    }

    delete_img()
    {
        this.User.imgProfile="assets/images/avatar/inconnu.jpg";
    }

}
