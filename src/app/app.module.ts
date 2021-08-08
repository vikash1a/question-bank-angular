import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuestionBankListComponent } from './components/question-bank-list/question-bank-list.component';
import { QuestionBankDetailComponent } from './components/question-bank-detail/question-bank-detail.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { CreateQuestionBankComponent } from './components/create-question-bank/create-question-bank.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routeConfig: Array<Route> = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'view-all',
    component: QuestionBankListComponent
  },
  {
    path:'questionBank/:Id',
    component:QuestionBankDetailComponent
  },
  {
    path:'questionBank',
    component:CreateQuestionBankComponent
  },
  {
    path:'questionBank/:Id/question',
    component:CreateQuestionComponent
  },
  {
    path:'question/:Id',
    component:UpdateQuestionComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
    QuestionBankListComponent,
    QuestionBankDetailComponent,
    UpdateQuestionComponent,
    CreateQuestionBankComponent,
    CreateQuestionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routeConfig),
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
