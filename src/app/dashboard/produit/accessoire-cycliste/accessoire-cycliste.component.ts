import { Component, OnInit } from '@angular/core';
import { Produit } from '../../classe/produit.class'
import { AccessoireCyclisteServiceService } from './accessoire-cycliste-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-accessoire-cycliste',
  templateUrl: './accessoire-cycliste.component.html',
  styleUrls: ['./accessoire-cycliste.component.css']
})
export class AccessoireCyclisteComponent implements OnInit {

  Produits: Produit[]=[];
  private pageSlice=this.Produits

  constructor(private AccessoireCyclisteService: AccessoireCyclisteServiceService,
    private router: Router) { } 

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
}
