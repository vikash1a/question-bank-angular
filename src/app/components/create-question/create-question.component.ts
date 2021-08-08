import { Component, OnInit } from '@angular/core';

import {questionBankService} from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {

  question:any={};
  questionBankId:number;
  constructor(private service:questionBankService,
    private authService:AuthService,private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
  }
  save(): void {
    this.activatedRoute.params.subscribe(p => {
      this.question.questionBankId=p['Id'];
      console.log(this.question);
      this.service.createQuestion(this.question)
      .subscribe(
        () => this.router.navigate(['/questionBank',this.question.questionBankId]), // success callback
        () => window.alert('There was an error! Please check the console logs.') // error callback
      );
    });
   
  }

}
