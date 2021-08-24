import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../classe/categorie.class'
import { CategorieServiceService } from '../categorie-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  public Categorie: Categorie={libelle:'',description:''}
 
  constructor(private categorieService: CategorieServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    saveCategorie(){
      this.categorieService.createCategorie(this.Categorie).subscribe( data =>{
        console.log(data);
        this.goToCategorieList();
      },
      error => console.log(error));
    }
  
    goToCategorieList(){
      this.ShowNotification('Categorie Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/feature/categorie']);
    }
    
    onSubmit(){
      if(this.Categorie.libelle =="" || this.Categorie.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.saveCategorie();
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
