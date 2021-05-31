import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../classe/categorie.class'
import { CategorieServiceService } from './categorie-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  
  Categories: Categorie[]=[];

  constructor(private categorieService: CategorieServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
      this.Categories = data.categories;
      console.log(this.Categories)
    }); 
  }

  updateCategorie(_id: number){ 
    this.router.navigate(['dash/feature-update-Categorie', _id]);
  }

  deleteCategorie(_id: number){
        this.categorieService.deleteCategorie(_id).subscribe( data => {
          console.log(data);
          this.getCategories();
        }, error => console.log(error));
  }

}
