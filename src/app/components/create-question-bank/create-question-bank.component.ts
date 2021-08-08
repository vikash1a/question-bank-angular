import { Component, OnInit } from '@angular/core';

import {questionBankService} from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-question-bank',
  templateUrl: './create-question-bank.component.html',
  styleUrls: ['./create-question-bank.component.css']
})
export class CreateQuestionBankComponent implements OnInit {

  questionBank:any={};
  constructor(private service:questionBankService,
    private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  save(): void {
    this.questionBank.userId=this.authService.userId;
    console.log(this.questionBank);
    this.service.createQuestionBank(this.questionBank)
      .subscribe(
        () => this.router.navigate(['/view-all']), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
  }

}
