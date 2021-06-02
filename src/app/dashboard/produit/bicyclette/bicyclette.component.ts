import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { BicyletteServiceService } from './bicylette-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bicyclette',
  templateUrl: './bicyclette.component.html',
  styleUrls: ['./bicyclette.component.css']
})
export class BicycletteComponent implements OnInit {

  Produits: Produit[]=[];

  constructor(private BicyletteService: BicyletteServiceService,
    private router: Router) { } 

    ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.BicyletteService.getBicyclettesList().subscribe(data => {
      this.Produits = data.products;
      console.log(this.Produits)
    }); 
  }

  deleteProduit(_id: number){
    this.BicyletteService.deleteBicyclette(_id).subscribe( data => {
      console.log(data);
      this.getProduits();
    }, error => console.log(error));
  }

  updateProduit(_id: number){ 
    this.router.navigate(['dash/produits/modifier-bicyclette', _id]);
  }

  //Supprimer
  // const index: number = this.myArray.indexOf("mes");
  // this.myArray.splice(index, 1);

  
}
