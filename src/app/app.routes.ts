import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { HomeComponent } from './inbox/home/home.component';

export const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signout', component: SignoutComponent },
  {
    path: 'inbox',
    loadComponent: () =>
      import('./inbox/home/home.component').then((m) => m.HomeComponent),
  },
];
