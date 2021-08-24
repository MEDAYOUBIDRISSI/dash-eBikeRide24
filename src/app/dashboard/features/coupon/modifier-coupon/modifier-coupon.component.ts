import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../classe/coupon.class'
import { CouponServiceService } from '../coupon-service.service'
import { ActivatedRoute,Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-modifier-coupon',
  templateUrl: './modifier-coupon.component.html',
  styleUrls: ['./modifier-coupon.component.css']
})
export class ModifierCouponComponent implements OnInit {

  _id: number=-1;
  public Coupon: Coupon={pourcentage:0}
  constructor(private CouponService: CouponServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.CouponService.getCouponById(this._id).subscribe(data => {
      this.Coupon = data.Coupon;
    }, error => console.log(error));
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
            this.CouponService.updateCoupon(this._id, this.Coupon).subscribe( data =>{
              this.goToCouponList();
            }, error => console.log(error));
          }
      }
  }

  goToCouponList(){
    this.ShowNotification('Coupon Update well','Close','4000',"custom-success-style")
    this.router.navigate(['dash/feature/coupon']);
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
