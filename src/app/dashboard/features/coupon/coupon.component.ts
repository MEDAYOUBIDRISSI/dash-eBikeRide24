import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../classe/coupon.class'
import { CouponServiceService } from './coupon-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  Coupons: Coupon[]=[];
  private pageSlice=this.Coupons
  SearchThings:any 

  constructor(private couponService: CouponServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { } 

  ngOnInit(): void {
    this.getCoupons();
  }

  getCoupons(){
    this.couponService.getCouponsList().subscribe(data => {
      this.Coupons = data;
      this.pageSlice=this.Coupons.slice(0,10);
      console.log(this.Coupons)
    }); 
  }

  updateCoupon(_id: number){ 
    this.router.navigate(['dash/coupon/modifier-coupon', _id]);
  }

  deleteCoupon(_id: number){
        this.couponService.deleteCoupon(_id).subscribe( data => {
          console.log(data);
          this.getCoupons();
          this.ShowNotification('Coupon deleted well','Close','4000',"custom-success-style")
        }, error => console.log(error));
  }

  OnPageChange(event : PageEvent)
  {
      console.log(event)
      const startIndex = event.pageIndex * event.pageSize;
      let endIndex = startIndex + event.pageSize;
      if(endIndex > this.Coupons.length)
      {
          endIndex = this.Coupons.length;
      }
      this.pageSlice=this.Coupons.slice(startIndex,endIndex);
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

    Search()
    {
      if(this.SearchThings == "")
      {
        this.ngOnInit()
      }
      else{
        this.Coupons=this.Coupons.filter(res=>{
          if (res.libelle != "" || res.code != ""|| res.pourcentage != "") {
             return res.libelle.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
                    res.code.toLocaleLowerCase().match(this.SearchThings.toLocaleLowerCase())||
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
    getSilcePage()
    {
      this.pageSlice=this.Coupons.slice(0,10);
    }
}
