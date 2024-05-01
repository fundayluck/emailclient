import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuard } from './auth/auth.guard';
import { emailResolver } from './service/email/email-resolver.service';

export const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signout', component: SignoutComponent },
  {
    path: 'inbox',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./inbox/home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./inbox/placeholder/placeholder.component').then(
            (m) => m.PlaceholderComponent
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./inbox/email-show/email-show.component').then(
            (m) => m.EmailShowComponent
          ),
        resolve: {
          email: emailResolver,
        },
      },
    ],
  },
];
