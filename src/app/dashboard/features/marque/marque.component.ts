import { Component, OnInit } from '@angular/core';
import { Marque } from '../../classe/marque.class'
import { MarqueServiceService } from './marque-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  Marques: Marque[]=[];
  private pageSlice=this.Marques

  constructor(private marqueService: MarqueServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getMarques();
  }

  getMarques(){
    this.marqueService.getMarquesList().subscribe(data => {
      this.Marques = data.Marque;
      this.pageSlice=this.Marques.slice(0,10);
      console.log(this.Marques)
    }); 
  }

  updateMarque(_id: number){ 
    this.router.navigate(['dash/feature-update-Marque', _id]);
  }

  deleteMarque(_id: number){
        this.marqueService.deleteMarque(_id).subscribe( data => {
          console.log(data);
          this.getMarques();
        }, error => console.log(error));
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Marques.length)
      {
          endIndex = this.Marques.length;
      }
      this.pageSlice=this.Marques.slice(startIndex,endIndex);
  } 

}
