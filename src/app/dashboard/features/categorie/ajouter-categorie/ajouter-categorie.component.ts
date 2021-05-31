import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../classe/categorie.class'
import { CategorieServiceService } from '../categorie-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.component.html',
  styleUrls: ['./ajouter-categorie.component.css']
})
export class AjouterCategorieComponent implements OnInit {

  public Categorie: Categorie={libelle:'',description:''}
 
  constructor(private categorieService: CategorieServiceService,
    private router: Router) { }
  
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
      this.router.navigate(['dash/feature']);
    }
    
    onSubmit(){
      console.log(this.Categorie);
      this.saveCategorie();
    }

}
