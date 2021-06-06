import { Component, OnInit } from '@angular/core';
import { User } from '../../../dashboard/classe/user.class'
import { MasterServiceService } from './master-service.service'
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {MatDialog} from '@angular/material/dialog';
import { LogoutComponent } from '../logout/logout.component'

@Component({
  selector: 'app-nave-bare',
  templateUrl: './nave-bare.component.html',
  styleUrls: ['./nave-bare.component.css']
})
export class NaveBareComponent implements OnInit {

  lang:any;

  public User: User={nom:'',prenom:''}
  _id: any;
  constructor(private MasterService: MasterServiceService,
    private router: Router,private cookieService: CookieService,
    public dialog: MatDialog) { } 

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
    this._id = localStorage.getItem('jwt-IDUser')
    this.getUserAuth()
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

  getUserAuth(){
    this.MasterService.getUserAuth(this._id).subscribe(data => {
      this.User = data.User;
    }); 
  }

  logout()
  {
    this.dialog.open(LogoutComponent);
  }
  
}
