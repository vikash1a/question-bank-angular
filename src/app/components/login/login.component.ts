import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn){
      this.router.navigate(['/view-all']);
    }
  }
  login(){
    //alert('login not create yet');
    this.authService.login(this.email,this.password)
    .subscribe(
      ()=>this.router.navigate(['/view-all']),
      err=>window.alert(err.message)
    );
  }
}
