import { Component, OnInit } from '@angular/core';
import { Marque } from '../../classe/marque.class'
import { MarqueServiceService } from './marque-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-marque',
  templateUrl: './marque.component.html',
  styleUrls: ['./marque.component.css']
})
export class MarqueComponent implements OnInit {

  Marques: Marque[]=[];

  constructor(private marqueService: MarqueServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getMarques();
  }

  getMarques(){
    this.marqueService.getMarquesList().subscribe(data => {
      this.Marques = data.Marque;
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

 
  // openSnackBar() {
  //   this._snackBar.open("Add well", "Cancel", {
  //     duration: 3000,
  //   });
  // }

  // openSnackBar_2() {
  //   this._snackBar.open("Delete well", "Cancel", {
  //     duration: 3000,
  //   });
  // }

  // openSnackBar_3() {
  //   this._snackBar.open("Impossible, It has to be at least one role", "Cancel", {
  //     duration: 3000,
  //   });
  // }

}
