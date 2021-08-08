import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  Logout(){
    // alert('logout not implemnted yet.');
    this.authservice.logout();
    this.router.navigate(['/home']);
  }

}