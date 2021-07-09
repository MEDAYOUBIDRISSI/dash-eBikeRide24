import { Component, OnInit } from '@angular/core';
import { StatisticsServiceService } from '../statistics-service.service'

@Component({
  selector: 'app-topsellers',
  templateUrl: './topsellers.component.html',
  styleUrls: ['./topsellers.component.css']
})
export class TopsellersComponent implements OnInit {

  ClientResults:any
  constructor(private StatisticsService: StatisticsServiceService ) {}

  ngOnInit(): void {
    this.getTopClients()
  }
  getTopClients() {
    this.StatisticsService
      .getTopClients()
      .subscribe((data: any) => {
        this.ClientResults = data.TopClients;
      });
  }

}
