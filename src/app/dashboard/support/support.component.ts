import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  constructor(public http:HttpClient)
  {

  }

  ngOnInit(): void {
    // const lang = localStorage.getItem('lang') || 'en';
    // const headers = new HttpHeaders({
    //   'Accept-Language ' : lang
    // })
  }

}
