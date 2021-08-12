import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { AccessoireCyclisteServiceService } from './accessoire-cycliste-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SupprimerProduitComponent} from '../supprimer-produit/supprimer-produit.component'

@Component({
  selector: 'app-accessoire-cycliste',
  templateUrl: './accessoire-cycliste.component.html',
  styleUrls: ['./accessoire-cycliste.component.css']
})
export class AccessoireCyclisteComponent implements OnInit {

  Produits: Produit[]=[];
  Produit: Produit={}
  private pageSlice=this.Produits
  SearchThings:any 

  constructor(private AccessoireCyclisteService: AccessoireCyclisteServiceService,
    private router: Router,public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.AccessoireCyclisteService.getAccessoireCyclistesList().subscribe(data => {
      this.Produits = data.products;
      this.pageSlice=this.Produits.slice(0,10);
      console.log(this.Produits)
    }); 
  }

  getSilcePage()
  {
    this.pageSlice=this.Produits.slice(0,10);
  }

  deleteProduit(_id: number){
    this.AccessoireCyclisteService.deleteAccessoireCycliste(_id).subscribe( data => {
      console.log(data);
      this.getProduits();
    }, error => console.log(error));
  }

  updateProduit(_id: number){ 
    this.router.navigate(['dash/produits/modifier-accessoirecycliste', _id]);
  }
 
  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Produits.length)
      {
          endIndex = this.Produits.length;
      }
      this.pageSlice=this.Produits.slice(startIndex,endIndex);
  } 

  DeleteByDialog(_id: number): void {
    this.AccessoireCyclisteService.getAccessoireCyclisteById(_id).subscribe(data => {
      this.Produit = data.product;
      const dialogRef = this.dialog.open(SupprimerProduitComponent, {
        width: '400px',
        data: this.Produit
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result)
        {
          this.deleteProduit(_id)
        }
      });
    }, error => console.log(error));
  }

  Search()
  {
    if(this.SearchThings == "")
    {
      this.ngOnInit()
    }
    else{
      this.Produits=this.Produits.filter(res=>{
        if (res.libelle != "" || res.hideline != "" || res.codeBare != "") {
          return res.libelle.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                 res.codeBare.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                 res.hideline.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase()); 
         } 
          else 
          { 
            return []; 
          }
      })
      this.getSilcePage()
    }
  }
}
