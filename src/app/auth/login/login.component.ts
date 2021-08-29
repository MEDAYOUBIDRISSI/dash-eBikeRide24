import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from './login-service.service'
import { Router } from '@angular/router';
import { Auth } from '../../dashboard/classe/auth.class';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  public auth: Auth={email:'',password:''}
  constructor(private LoginService: LoginServiceService,
    private router: Router,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  saveLogin(){
    this.LoginService.login(this.auth).subscribe( data =>{
      //console.log(data);
      localStorage.setItem("jwt-Token",data.jwt);
      localStorage.setItem("jwt-IDUser",data.payload.id);
      this.goToIndex();
    },
    error => this.ShowNotification('Email address or password is incorrect','Close','4000',"custom-error-style"));
  }

  onSubmit(){
    if(this.auth.email=="")
    {
      this.ShowNotification('please write your email','Close','4000',"custom-error-style")
    }
    else if(this.auth.password=="")
    {
      this.ShowNotification('please write your password','Close','4000',"custom-error-style")
    }
    else
    {
      this.saveLogin();
    }
  }

  goToIndex(){
    this.router.navigate(['dash/produits']);
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