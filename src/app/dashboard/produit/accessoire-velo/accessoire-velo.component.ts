import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { AccessoireVeloServiceService } from './accessoire-velo-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SupprimerProduitComponent} from '../supprimer-produit/supprimer-produit.component'

@Component({
  selector: 'app-accessoire-velo',
  templateUrl: './accessoire-velo.component.html',
  styleUrls: ['./accessoire-velo.component.css']
})
export class AccessoireVeloComponent implements OnInit {

  Produits: Produit[]=[];
  Produit: Produit={}
  private pageSlice=this.Produits

  constructor(private AccessoireVeloService: AccessoireVeloServiceService,
    private router: Router,public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.AccessoireVeloService.getAccessoireVelosList().subscribe(data => {
      this.Produits = data.products;
      this.pageSlice=this.Produits.slice(0,10);
      console.log(this.Produits)
    }); 
  }

  deleteProduit(_id: number){
    this.AccessoireVeloService.deleteAccessoireVelo(_id).subscribe( data => {
      console.log(data);
      this.getProduits();
    }, error => console.log(error));
  }

  updateProduit(_id: number){ 
    this.router.navigate(['dash/produits/modifier-accessoirevelo', _id]);
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
    this.AccessoireVeloService.getAccessoireVeloById(_id).subscribe(data => {
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

}
