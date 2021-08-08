import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname:string;
  lastname:string;
  email : string;
  password : string;
  cnfpassword : string;

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isUserLoggedIn){
      this.router.navigate(['/view-all']);
    }
  }

  signup(){
    //alert('login not create yet');
    if(this.password !== this.cnfpassword){
      window.alert("password does not match");
    }
    else{
      this.authService.signup(this.firstname,this.lastname,this.email,this.password)
      .subscribe(
        ()=>this.router.navigate(['/login']),
        err=>window.alert(err.message)
      );
    }
    
  }

}
