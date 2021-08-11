import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../classe/coupon.class'
import { CouponServiceService } from '../coupon-service.service'
import { ActivatedRoute,Router } from '@angular/router';

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
    private router: Router) { }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['_id'];

    this.CouponService.getCouponById(this._id).subscribe(data => {
      this.Coupon = data.Coupon;
    }, error => console.log(error));
  } 
 
  onSubmit(){
    this.CouponService.updateCoupon(this._id, this.Coupon).subscribe( data =>{
      this.goToCouponList();
    }, error => console.log(error));
  }

  goToCouponList(){
    this.router.navigate(['dash/coupon']);
  }

}
