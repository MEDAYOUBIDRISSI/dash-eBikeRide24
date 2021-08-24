import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { BicyletteServiceService } from './bicylette-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator'; 
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SupprimerProduitComponent} from '../supprimer-produit/supprimer-produit.component'


@Component({
  selector: 'app-bicyclette',
  templateUrl: './bicyclette.component.html',
  styleUrls: ['./bicyclette.component.css']
})
export class BicycletteComponent implements OnInit {

  Produits: Produit[]=[];
  Produit: Produit={}
  private pageSlice=this.Produits
  SearchThings:any 

  constructor(private BicyletteService: BicyletteServiceService,
    private router: Router,public dialog: MatDialog,
    private snackBar: MatSnackBar) { } 

    ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.BicyletteService.getBicyclettesList().subscribe(data => {
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
    this.BicyletteService.deleteBicyclette(_id).subscribe( data => {
      console.log(data);
      this.ShowNotification('Product Deleted well','Close','4000',"custom-success-style")
      this.getProduits();
    }, error => console.log(error));
  }

  updateProduit(_id: number){ 
    this.router.navigate(['dash/produits/modifier-bicyclette', _id]);
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
    this.BicyletteService.getBicycletteById(_id).subscribe(data => {
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

  key:string='id'
  reverse:boolean=false
  Sort(key:string)
  {
    this.key=key
    this.reverse=!this.reverse
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
