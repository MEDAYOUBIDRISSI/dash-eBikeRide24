import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../../classe/categorie.class'
import { CategorieServiceService } from '../categorie-service.service'
import { ActivatedRoute,Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.CategorieService.getCategorieById(this._id).subscribe(data => {
      this.Categorie = data.categorie;
    }, error => console.log(error));
  } 
 
  onSubmit(){
    this.CategorieService.updateCategorie(this._id, this.Categorie).subscribe( data =>{
      this.goToCategorieList();
    }, error => console.log(error));
  }

  goToCategorieList(){
    this.router.navigate(['dash/feature']);
  }


}
