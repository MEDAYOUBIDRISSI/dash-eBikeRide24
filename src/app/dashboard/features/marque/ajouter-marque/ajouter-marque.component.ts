import { Component, OnInit } from '@angular/core';
import { Marque } from '../../../classe/marque.class'
import { MarqueServiceService } from '../marque-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({  
  selector: 'app-ajouter-marque',
  templateUrl: './ajouter-marque.component.html',
  styleUrls: ['./ajouter-marque.component.css']
})
export class AjouterMarqueComponent implements OnInit {

  public Marque: Marque={libelle:'',description:''}
 
  constructor(private MarqueService: MarqueServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    saveMarque(){
      this.MarqueService.createMarque(this.Marque).subscribe( data =>{
        console.log(data);
        this.goToMarqueList();
      },
      error => console.log(error));
    }
  
    goToMarqueList(){
      this.ShowNotification('Brand Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/feature/brand']);
    }
    
    onSubmit(){
      if(this.Marque.libelle =="" || this.Marque.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
      this.saveMarque();
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
