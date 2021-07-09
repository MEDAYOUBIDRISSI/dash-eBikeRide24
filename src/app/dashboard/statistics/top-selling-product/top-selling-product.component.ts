import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../statistics-service.service'

@Component({
  selector: 'app-top-selling-product',
  templateUrl: './top-selling-product.component.html',
  styleUrls: ['./top-selling-product.component.css']
})
export class TopSellingProductComponent implements OnInit {

  ProductResults:any
  constructor(private StatisticsService: StatisticsServiceService ) {}

  ngOnInit(): void {
    this.getBestSellingProduct()

  }
  getBestSellingProduct() {
    this.StatisticsService
      .getBestSellingProduct()
      .subscribe((data: any) => {
        this.ProductResults = data.ProductSales;
      });
  }

}
