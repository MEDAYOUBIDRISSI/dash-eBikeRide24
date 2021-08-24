import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../classe/categorie.class'
import { CategorieServiceService } from '../categorie-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-categorie',
  templateUrl: './modifier-categorie.component.html',
  styleUrls: ['./modifier-categorie.component.css']
})
export class ModifierCategorieComponent implements OnInit {

   
  _id: number=-1;
  public Categorie: Categorie={_id: -1, libelle:'',description:''}
  constructor(private CategorieService: CategorieServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.CategorieService.getCategorieById(this._id).subscribe(data => {
      this.Categorie = data.categorie;
    }, error => console.log(error));
  } 
  
  onSubmit(){
    if(this.Categorie.libelle =="" || this.Categorie.description == "")
      {
        this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
      }
      else
      {
        this.CategorieService.updateCategorie(this._id, this.Categorie).subscribe( data =>{
          this.goToCategorieList();
        }, error => console.log(error));
      }
  }

  goToCategorieList(){
    this.ShowNotification('Categorie Update well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/feature/categorie']);
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
