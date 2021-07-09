import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../statistics-service.service'

@Component({
  selector: 'app-selling-products',
  templateUrl: './selling-products.component.html',
  styleUrls: ['./selling-products.component.css']
})
export class SellingProductsComponent implements OnInit {

  NoteResult :any;

  view: any[] = [470, 370];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  constructor(private StatisticsService: StatisticsServiceService ) {}

  ngOnInit(): void {
    this.getchart();
  }

  // avec pagination...
  getchart() {
    this.StatisticsService
      .getProductSales()
      .subscribe((data: any) => {
        this.NoteResult = data.ProductSales;
      });
  }

  onSelect(event:any) {
    console.log(event);
  }

}
