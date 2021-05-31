import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'
import { Local } from 'protractor/built/driverProviders';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-left-bare',
  templateUrl: './left-bare.component.html',
  styleUrls: ['./left-bare.component.css']
})
export class LeftBareComponent implements OnInit {

  lang:any;

  constructor()
  {

  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLang(lang:any)
  {
    localStorage.setItem("lang",lang.target.value);
    window.location.reload();
  }

}
