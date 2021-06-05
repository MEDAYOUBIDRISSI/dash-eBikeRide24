import { Component, OnInit } from '@angular/core';
import { Auth } from '../../dashboard/classe/auth.class'
import { LoginServiceService } from '../login/login-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth: Auth={email:'',password:''}
 
  constructor(private LoginService: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLogin(){
    this.LoginService.login(this.auth).subscribe( data =>{
      //console.log(data);
      localStorage.setItem("jwt-Token",data.jwt);
      localStorage.setItem("jwt-IDUser",data.payload.id);
      this.goToDashboard();
    },
    error => console.log(error));
  }

  onSubmit(){
    this.saveLogin();
  }

  goToDashboard(){
    this.router.navigate(['dash/feature']);
  }

}
