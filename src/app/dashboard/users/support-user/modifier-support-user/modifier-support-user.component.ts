import { Component, OnInit } from '@angular/core';
import { SupportUserServiceService } from '../support-user-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../../classe/user.class';
import { ActivatedRoute,Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-support-user',
  templateUrl: './modifier-support-user.component.html',
  styleUrls: ['./modifier-support-user.component.css']
})
export class ModifierSupportUserComponent implements OnInit {

  _id: number=-1;
  urls:string="";
  public User: User={nom:'',prenom:''}
  constructor(private SupportUserService: SupportUserServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public datepipe: DatePipe,
    private snackBar: MatSnackBar) { }

    ngOnInit(): void {
      this._id = this.route.snapshot.params['_id'];
  
      this.SupportUserService.getSupportUserById(this._id).subscribe(data => {
        this.User = data.User;
        this.User.dateNaissance=this.datepipe.transform(this.User.dateNaissance, 'yyyy-MM-dd');
        this.User.dateEmbouche=this.datepipe.transform(this.User.dateEmbouche, 'yyyy-MM-dd');
      }, error => console.log(error));
    } 
   
    updateUser(){
      this.SupportUserService.updateSupportUser(this._id, this.User).subscribe( data =>{
        this.goToUserList();
      }, error => console.log(error));
    }
  
    goToUserList(){
      this.ShowNotification('Support User Update well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/users/support-user']);
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
