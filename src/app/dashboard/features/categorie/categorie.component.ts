import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../classe/categorie.class'
import { CategorieServiceService } from './categorie-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';
  
@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {

  
  Categories: Categorie[]=[];
  private pageSlice=this.Categories
  SearchThings:any 

  constructor(private categorieService: CategorieServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { } 

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(){
    this.categorieService.getCategoriesList().subscribe(data => {
      this.Categories = data.categories;
      this.pageSlice=this.Categories.slice(0,10);
      console.log(this.Categories)
    }); 
  }

  getSilcePage()
  {
    this.pageSlice=this.Categories.slice(0,10);
  }

  updateCategorie(_id: number){ 
    this.router.navigate(['dash/feature-update-Categorie', _id]);
  }

  deleteCategorie(_id: number){
        this.categorieService.deleteCategorie(_id).subscribe( data => {
          console.log(data);
          this.getCategories();
          this.ShowNotification('Categorie deleted well','Close','4000',"custom-success-style")
        }, error => console.log(error));
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Categories.length)
      {
          endIndex = this.Categories.length;
      }
      this.pageSlice=this.Categories.slice(startIndex,endIndex);
  } 

  Search()
  {
    if(this.SearchThings == "")
    {
      this.ngOnInit()
    }
    else{
      this.Categories=this.Categories.filter(res=>{
        if (res.libelle != "" || res.description != "") {
           return res.libelle.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.description.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())
          } 
          else 
          { 
            return []; 
          }
      })
      this.getSilcePage()
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
