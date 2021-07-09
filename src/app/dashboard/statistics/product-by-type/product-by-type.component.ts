import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../statistics-service.service'

@Component({
  selector: 'app-product-by-type',
  templateUrl: './product-by-type.component.html',
  styleUrls: ['./product-by-type.component.css']
})
export class ProductByTypeComponent implements OnInit {

  NoteResult :any;

  constructor(private StatisticsService: StatisticsServiceService ) {}

  ngOnInit(): void {
    this.getchart()
  }

  view: any[] = [400, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  getchart() {
    this.StatisticsService
      .getTypeByProduct()
      .subscribe((data: any) => {
        this.NoteResult = data.ProductByType;
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
