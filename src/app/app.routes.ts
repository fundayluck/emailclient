import { Routes } from '@angular/router';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { AuthGuard } from './auth/auth.guard';
import { EmailResolver } from './service/email/email-resolver.service';
import { NotFoundComponent } from './inbox/not-found/not-found.component';
import { EmailShowComponent } from './inbox/email-show/email-show.component';
import { PlaceholderComponent } from './inbox/placeholder/placeholder.component';
import { HomeComponent } from './inbox/home/home.component';

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
        component: PlaceholderComponent,
      },
      {
        path: ':id',
        component: EmailShowComponent,
        resolve: {
          email: EmailResolver,
        },
      },
      {
        path: 'page/not-found-page',
        component: NotFoundComponent,
      },
    ],
  },
];
