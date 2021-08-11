import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Coupon } from '../../classe/coupon.class';

@Injectable({
  providedIn: 'root'
})
export class CouponServiceService {

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getCouponsList(): Observable<Coupon[]>{
    return this.httpClient.get<Coupon[]>(`${this.baseURL}/coupon/all`);
  }

  createCoupon(Coupon: Coupon): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/coupon/create`, Coupon);
  }

  getCouponById(_id: number): Observable<Coupon>{
    return this.httpClient.get<Coupon>(`${this.baseURL}/coupon/${_id}`);
  }

  updateCoupon(_id: number, Coupon: Coupon): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/coupon/update?couponID=${_id}`, Coupon);
  }

  deleteCoupon(_id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/coupon/delete?couponID=${_id}`);
  }

}
