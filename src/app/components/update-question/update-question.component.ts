import { Component, OnInit } from '@angular/core';


import {questionBankService} from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  question:any;
  // questionBankId:number;
  id:number;
  constructor(private service:questionBankService,
    private authService:AuthService,private router:Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.authService.isUserLoggedIn) {
      this.router.navigate(['/login']);
    }
    this.activatedRoute.params.subscribe(p => {
      this.id=p['Id'];
    });
    
    this.loadQuestion();
    console.log(this.question);
  }
  loadQuestion(){
    this.service.getQuestion(this.id).subscribe(
      resp=>{
        this.question=resp[0];
        console.log(resp[0]);
      }
    );
  }
  save(): void {
    console.log(this.question);
    this.service.updateQuestion(this.id,this.question)
    .subscribe(
      () => this.router.navigate(['/questionBank',this.question.questionBankId]), // success callback
      () => window.alert('There was an error! Please check the console logs.') // error callback
    );
  }

}
