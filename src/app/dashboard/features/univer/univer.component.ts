import { Component, OnInit } from '@angular/core';
import { Univer } from '../../classe/univer.class'
import { UniverServiceService } from './univer-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-univer',
  templateUrl: './univer.component.html',
  styleUrls: ['./univer.component.css']
})
export class UniverComponent implements OnInit {

  Univers: Univer[]=[];

  constructor(private univerService: UniverServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getUnivers();
  }

  getUnivers(){
    this.univerService.getUniversList().subscribe(data => {
      this.Univers = data.univers;
      console.log(this.Univers)
    }); 
  }

  updateUniver(_id: number){ 
    this.router.navigate(['dash/feature-update-Univer', _id]);
  }

  deleteUniver(_id: number){
        this.univerService.deleteUniver(_id).subscribe( data => {
          console.log(data);
          this.getUnivers();
        }, error => console.log(error));
  }

}
