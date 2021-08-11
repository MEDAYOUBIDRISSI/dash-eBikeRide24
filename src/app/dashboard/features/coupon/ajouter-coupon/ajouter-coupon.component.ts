import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../../classe/coupon.class'
import { CouponServiceService } from '../coupon-service.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajouter-coupon',
  templateUrl: './ajouter-coupon.component.html',
  styleUrls: ['./ajouter-coupon.component.css']
})
export class AjouterCouponComponent implements OnInit {

  public Coupon: Coupon={pourcentage:0,etat:true}
 
  constructor(private CouponServiceService: CouponServiceService,
    private router: Router) { }
  
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
      this.router.navigate(['dash/coupon']);
    }
    
    onSubmit(){
      console.log(this.Coupon);
      this.saveCoupon();
    }

}
