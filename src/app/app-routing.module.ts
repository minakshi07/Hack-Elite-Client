import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeRecruiterComponent } from './home-recruiter/home-recruiter.component';
import { HomeJobApplicantComponent } from './home-job-applicant/home-job-applicant.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { ExploreCandidatesComponent } from './explore-candidates/explore-candidates.component';
import { ShortlistedCandidatesComponent } from './shortlisted-candidates/shortlisted-candidates.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
   
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'user-signup',
    component: UserSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'home-recruiter',
    component: HomeRecruiterComponent,
    children:[
      {
        path: 'explore',
        component: ExploreCandidatesComponent,
        pathMatch: 'full'
      },
      {
        path: 'shortlist',
        component: ShortlistedCandidatesComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home-job-applicant',
    component: HomeJobApplicantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    anchorScrolling: 'enabled',

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
