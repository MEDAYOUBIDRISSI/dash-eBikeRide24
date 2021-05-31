import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave-bare',
  templateUrl: './nave-bare.component.html',
  styleUrls: ['./nave-bare.component.css']
})
export class NaveBareComponent implements OnInit {

  lang:any;

  constructor(){}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }
  changeLang(lang:any)
  {
    localStorage.setItem("lang",lang.target.value);
    window.location.reload();
  }
  changeLanguageToEnglish()
  {
    localStorage.setItem("lang","en");
    window.location.reload();
  }
  changeLanguageToFrensh()
  {
    localStorage.setItem("lang","fr");
    window.location.reload();
  }

}
