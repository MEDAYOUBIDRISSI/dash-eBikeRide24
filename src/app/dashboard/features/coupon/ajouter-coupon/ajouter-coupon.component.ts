import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../classe/coupon.class'
import { CouponServiceService } from '../coupon-service.service'
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ajouter-coupon',
  templateUrl: './ajouter-coupon.component.html',
  styleUrls: ['./ajouter-coupon.component.css']
})
export class AjouterCouponComponent implements OnInit {

  public Coupon: Coupon={pourcentage:0,etat:true}
 
  constructor(private CouponServiceService: CouponServiceService,
    private router: Router,
    private snackBar: MatSnackBar) { }
  
    ngOnInit(): void {
    }
  
    saveCoupon(){
      this.CouponServiceService.createCoupon(this.Coupon).subscribe( data =>{
        console.log(data);
        this.goToCouponList();
      },
      error => console.log(error));
    }
  
    goToCouponList(){
      this.ShowNotification('Coupon Add well','Close','4000',"custom-success-style")
      this.router.navigate(['dash/feature/coupon']);
    }
    
    onSubmit(){
      if(this.Coupon.pourcentage>70 || this.Coupon.pourcentage<5)
      {
        this.ShowNotification('Coupon pourcentage should be between 5% and 70%','Close','4000',"custom-error-style")
      }
      else
      {
        if(this.Coupon.libelle =="" || this.Coupon.code == "")
          {
            this.ShowNotification('Please enter all information ','Close','4000',"custom-error-style")
          }
          else
          {
            this.saveCoupon();
          }
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
