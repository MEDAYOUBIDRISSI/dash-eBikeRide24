import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem('jwt-IDUser') || !localStorage.getItem('jwt-Token'))
    {
      this.router.navigate(['auth/login']);
    }
  }

}
