import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { AccessoireVeloServiceService } from './accessoire-velo-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-accessoire-velo',
  templateUrl: './accessoire-velo.component.html',
  styleUrls: ['./accessoire-velo.component.css']
})
export class AccessoireVeloComponent implements OnInit {

  Produits: Produit[]=[];

  constructor(private AccessoireVeloService: AccessoireVeloServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getProduits();
  }

  getProduits(){
    this.AccessoireVeloService.getAccessoireVelosList().subscribe(data => {
      this.Produits = data.products;
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

}
