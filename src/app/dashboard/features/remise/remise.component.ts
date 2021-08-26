import { Component, OnInit } from '@angular/core';
import { Remise } from '../../classe/remise.class'
import { RemiseServiceService } from './remise-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'app-remise',
  templateUrl: './remise.component.html',
  styleUrls: ['./remise.component.css']
})
export class RemiseComponent implements OnInit {

  Remises: Remise[]=[];
  private pageSlice=this.Remises
  SearchThings:any 
  dateNow = Date.now();

  constructor(private remiseService: RemiseServiceService,
    public datepipe: DatePipe,
    private router: Router,
    private snackBar: MatSnackBar) { } 

  ngOnInit(): void {
    this.getRemises();
  }

  getRemises(){
    this.remiseService.getRemisesList().subscribe(data => {
      this.Remises = data.Remises;
      this.pageSlice=this.Remises.slice(0,10);
      console.log(this.Remises)
    }); 
  }

  // compareTwoDate(date1:any,date2:any)
  // {
  //   var debut_date:any
  //   var fine_date:any
  //   var dNow:any
  //   debut_date =this.datepipe.transform(date1, 'yMMdd');
  //   fine_date =this.datepipe.transform(date2, 'yMMdd');
  //   dNow=this.datepipe.transform(this.dateNow, 'yMMdd');
  //   if(parseInt(debut_date) > parseInt(dNow))
  //   {
  //       console.log("debut est grand")
  //   }
  // }

  getSilcePage()
  {
    this.pageSlice=this.Remises.slice(0,10);
  }

  updateRemise(_id: number){ 
    this.router.navigate(['dash/feature-update-Remise', _id]);
  }

  deleteRemise(_id: number){
        this.remiseService.deleteRemise(_id).subscribe( data => {
          console.log(data);
          this.getRemises();
          this.ShowNotification('Remise deleted well','Close','4000',"custom-success-style")
        }, error => console.log(error));
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Remises.length)
      {
          endIndex = this.Remises.length;
      }
      this.pageSlice=this.Remises.slice(startIndex,endIndex);
  } 

  Search()
  {
    if(this.SearchThings == "")
    {
      this.ngOnInit()
    }
    else{
      this.Remises=this.Remises.filter(res=>{
        if (res.libelle != "" || res.pourcentage != null) {
           return res.libelle.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                  res.pourcentage.toLocaleString().match(this.SearchThings.toLocaleString())
          } 
          else 
          { 
            return []; 
          }
      })
      this.getSilcePage()
    }
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
