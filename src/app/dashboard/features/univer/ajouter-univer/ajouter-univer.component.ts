import { Component, OnInit } from '@angular/core';
import { Univer } from '../../../classe/univer.class'
import { UniverServiceService } from '../univer-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-univer',
  templateUrl: './ajouter-univer.component.html',
  styleUrls: ['./ajouter-univer.component.css']
})
export class AjouterUniverComponent implements OnInit {

  public Univer: Univer={libelle:'',description:''}
 
  constructor(private UniverService: UniverServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    saveUniver(){
      this.UniverService.createUniver(this.Univer).subscribe( data =>{
        console.log(data);
        this.goToUniverList();
      },
      error => console.log(error));
    }
  
    goToUniverList(){
      this.ShowNotification('Univer Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/feature/univer']);
    }
    
    onSubmit(){
      if(this.Univer.libelle =="" || this.Univer.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.saveUniver();
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
