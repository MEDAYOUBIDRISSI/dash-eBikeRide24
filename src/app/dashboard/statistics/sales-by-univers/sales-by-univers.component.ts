import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../statistics-service.service'

@Component({
  selector: 'app-sales-by-univers',
  templateUrl: './sales-by-univers.component.html',
  styleUrls: ['./sales-by-univers.component.css']
})
export class SalesByUniversComponent implements OnInit {
  NoteResult: any;
  view: any[] = [800, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor(private StatisticsService: StatisticsServiceService ) {}

  ngOnInit(): void {
    this.getchart();
  }

  // avec pagination...
  getchart() {
    this.StatisticsService
      .getSalesByUniverOfProduct()
      .subscribe((data: any) => {
        this.NoteResult = data.SalesByUniverOfProduct;
      });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
