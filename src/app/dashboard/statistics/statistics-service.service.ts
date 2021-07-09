import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Univer } from '../classe/univer.class';

@Injectable({
  providedIn: 'root'
})
export class StatisticsServiceService { 

  private baseURL = "http://localhost:5000";

  constructor(private httpClient: HttpClient) { }

  getTotalOrders(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/totalOrders`);
  }
  getproductSolde(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/productSolde`);
  }
  getTotalOrdersPaid(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/totalOrdersPaid`);
  }
  getProductSales(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/ProductSales`);
  }

  getBestSellingProduct(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/BestSellingProduct`);
  }

  getTypeByProduct(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/TypeByProduct`);
  }

  getSalesByUniverOfProduct(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/SalesByUniverOfProduct`);
  }

  getTopClients(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/TopClients`);
  }
  getBuyers(): Observable<any>{
    return this.httpClient.get<any>(`${this.baseURL}/statistic/productSolde`);
  }
}
