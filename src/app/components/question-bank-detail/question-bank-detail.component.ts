import { Component, OnInit } from '@angular/core';

import {questionBankService} from '../../services/question-bank.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-bank-detail',
  templateUrl: './question-bank-detail.component.html',
  styleUrls: ['./question-bank-detail.component.css']
})
export class QuestionBankDetailComponent implements OnInit {

  public qb;
  id:number;

  constructor(private service: questionBankService,
    private activatedRoute : ActivatedRoute, private router: Router) {
    // console.log('customer detail initiated');
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.service.questionBankDetail(p['Id']).
      subscribe(data=>{this.qb=data;this.id=p['Id']});
    });
  }
  deleteQuestion(questionId:number){
    this.service.deleteQuestion(questionId).subscribe(
      () => this.router.navigate(['/questionBank',this.id]), // success callback
      err=>window.alert(err.message)
      
    )
  }

}
