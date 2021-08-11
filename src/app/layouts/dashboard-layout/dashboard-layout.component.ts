import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router) { }
  menu = MENU_ITEMS;

  ngOnInit(): void {
    // if(!localStorage.getItem('jwt-IDUser') || !localStorage.getItem('jwt-Token'))
    // {
    //   this.router.navigate(['auth/login']);
    // }
    // (function(d, m){
    //   var kommunicateSettings = {"appId":"6a86750404bbb5c3cef3affcfb9b33b6","popupWidget":true,"automaticChatOpenOnNavigation":true};
    //   var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
    //   s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
    //   var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
    //   (window as any).kommunicate = m; m._globals = kommunicateSettings;
    // })(document, (window as any).kommunicate || {});
  }
  //Designe

}
