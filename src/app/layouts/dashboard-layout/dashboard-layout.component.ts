import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENU_ITEMS } from './pages-menu';
import { ActivatedRoute } from '@angular/router'; 
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute,
    private snackBar: MatSnackBar) { }
  menu = MENU_ITEMS;
  token = localStorage.getItem('jwt-IDUser')
  ngOnInit(): void {
    if(!localStorage.getItem('jwt-IDUser') || !localStorage.getItem('jwt-Token'))
    {
      this.router.navigate(['auth/login']);
    }
    (function(d, m){
      var kommunicateSettings = {"appId":"6a86750404bbb5c3cef3affcfb9b33b6","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      (window as any).kommunicate = m; m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});

    if(!this.token)
    {
      this.goToLogin()
    }
  }
  goToLogin(){
    this.ShowNotification('You are not authentified','Close','4000',"custom-error-style")
    this.router.navigate(['auth/login']);
  }

  ShowNotification(content:any, action:any, duration:any,type:any)
    {
      let sb = this.snackBar.open(content, action, {
        duration: duration,
        panelClass: [type]
      });
      sb.onAction().subscribe(() => {
        sb.dismiss();
      });
    }

}
