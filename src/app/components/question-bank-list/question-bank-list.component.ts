import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import {questionBankService} from '../../services/question-bank.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-bank-list',
  templateUrl: './question-bank-list.component.html',
  styleUrls: ['./question-bank-list.component.css']
})
export class QuestionBankListComponent implements OnInit {

    pageNum: number = 1;
    questionBank: Array<any> = [];
    totalQuestionBank: number;
    lastPage: number;
  
    constructor(public service: questionBankService,
      private authService: AuthService,
      private router: Router) { }
  
    ngOnInit(): void {
      if (!this.authService.isUserLoggedIn) {
        this.router.navigate(['/login']);
      }
      else {
        this.loadData();
      }
    }
  
    loadData() {
      this.service.getAllquestionBank(this.service.pageNum,this.authService.userId)
        .subscribe(resp => {
          this.questionBank = resp.data;
          this.totalQuestionBank = resp.count;
          this.pageNum=this.service.pageNum;
          this.lastPage = resp.count % 10 === 0 ? resp.count / 10 : Math.trunc(resp.count / 10) + 1;
        })
    }
  
    gotoPage(where: string = 'first') {
      switch (where) {
        case 'last':
          this.service.pageNum = this.lastPage;
          break;
        case 'prev':
          if (this.service.pageNum > 1) this.service.pageNum--;
          break;
        case 'next':
          if (this.service.pageNum < this.lastPage) this.service.pageNum++;
          break;
        default:
          this.service.pageNum = 1;
      }
      this.loadData();
    }
  
    getBtnClass(btn: string = 'first') {
      
      switch (btn) {
        case 'first':
        case 'prev':
          return this.service.pageNum === 1 ? 'btn-danger' : '';
        default:
          return this.service.pageNum === this.lastPage ? 'btn-danger' : '';
      }
      
    }
}
