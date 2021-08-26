import { Component, OnInit } from '@angular/core';
import { Remise } from '../../../classe/remise.class'
import { RemiseServiceService } from '../remise-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-ajouter-remise',
  templateUrl: './ajouter-remise.component.html',
  styleUrls: ['./ajouter-remise.component.css']
})
export class AjouterRemiseComponent implements OnInit {

  public Remise: Remise={}
 
  constructor(private RemiseService: RemiseServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    saveRemise(){
      this.RemiseService.createRemise(this.Remise).subscribe( data =>{
        console.log(data);
        this.goToRemiseList();
      },
      error => console.log(error));
    }
  
    goToRemiseList(){
      this.ShowNotification('Remise Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/feature/remise']);
    }
    
    onSubmit(){
      if(this.Remise.libelle =="" || this.Remise.pourcentage == null || this.Remise.dateDebut ==null || this.Remise.dateFine == null)
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
      this.saveRemise();
      }
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
