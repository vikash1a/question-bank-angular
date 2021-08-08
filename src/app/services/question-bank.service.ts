// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class QuestionBankService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

const baseurl='http://localhost:3000/questionBank/';
const baseurl_1='http://localhost:3000/question/';

@Injectable({
  providedIn: 'root'
})
export class questionBankService {

  pageNum: number = 1;

  constructor(private http:HttpClient,private authservice:AuthService) { 
    //console.log('constructor is initiated');
   }
   getAllquestionBank(pageNum:number,userId:number): Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
      return this.http.get(baseurl+'?page='+pageNum+'&id='+userId, options)
      .map(resp=>resp as Array<any>);
   }

   questionBankDetail(id:number): Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
      return this.http.get(baseurl+id, options)
      .map(resp=>resp as Array<any>);
   }
   createQuestionBank(questionBank:any):Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
    return this.http.post(baseurl,questionBank,options)
   }
   createQuestion(question:any):Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
    return this.http.post(baseurl_1,question,options)
   }
   updateQuestion(id:number,question:any):Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
    return this.http.post(baseurl_1+id,question,options)
   }
   getQuestion(id:number):Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
    return this.http.get(baseurl_1+id,options).map(resp=>resp as Array<any>);
   }
   deleteQuestion(id:number):Observable<any>{
    const options = {
      headers: {
        'Authorization': 'JWT ' + this.authservice.token
      }
    };
    return this.http.delete(baseurl_1+id,options);
   }
}
