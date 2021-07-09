import { Component, OnInit } from '@angular/core';
import { Univer } from '../../classe/univer.class'
import { StatisticsServiceService } from '../statistics-service.service'
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {
  _totalOrders:any
  _totalOrdersPaid:any
  _ordersAmount:any
  _productSolde:any

  constructor(private StatisticsService: StatisticsServiceService,
    private router: Router) { } 

  ngOnInit(): void {
    this.getTotalOrders()
    this.getproductSolde()
  }

  getTotalOrders(){
    this.StatisticsService.getTotalOrders().subscribe(data => {
      this._totalOrders=data.totalOrders
      this.getTotalOrdersPaid()
    }); 
  }
  getproductSolde(){
    this.StatisticsService.getproductSolde().subscribe(data => {
      this._productSolde=data.ProductSolde
    }); 
  }

  getTotalOrdersPaid(){
    this.StatisticsService.getTotalOrdersPaid().subscribe(data => {
      this._totalOrdersPaid=data.totalOrders
      this._ordersAmount=(this._totalOrdersPaid*100)/this._totalOrders
    }); 
  }
}
