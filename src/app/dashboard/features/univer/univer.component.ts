import { Component, OnInit } from '@angular/core';
import { Univer } from '../../classe/univer.class'
import { UniverServiceService } from './univer-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-univer',
  templateUrl: './univer.component.html',
  styleUrls: ['./univer.component.css']
})
export class UniverComponent implements OnInit {

  Univers: Univer[]=[];
  private pageSlice=this.Univers
  SearchThings:any 

  constructor(private univerService: UniverServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getUnivers();
  }

  getUnivers(){
    this.univerService.getUniversList().subscribe(data => {
      this.Univers = data.univers;
      this.pageSlice=this.Univers.slice(0,10);
      console.log(this.Univers)
    }); 
  }

  updateUniver(_id: number){ 
    this.router.navigate(['dash/feature-update-Univer', _id]);
  }

  getSilcePage()
  {
    this.pageSlice=this.Univers.slice(0,10);
  }

  deleteUniver(_id: number){
        this.univerService.deleteUniver(_id).subscribe( data => {
          console.log(data);
          this.getUnivers();
        }, error => console.log(error));
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Univers.length)
      {
          endIndex = this.Univers.length;
      }
      this.pageSlice=this.Univers.slice(startIndex,endIndex);
  } 

  Search()
  {
    if(this.SearchThings == "")
    {
      this.ngOnInit()
    }
    else{
      this.Univers=this.Univers.filter(res=>{
        if (res.libelle != "" || res.description != "") {
           return res.libelle.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.description.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())
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
