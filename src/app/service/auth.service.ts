import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  signupCredentialsResponse,
  SignupResponse,
  usernameAvailableResponse,
} from './response/auth/response-auth';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api.angular-email.com/auth';
  signedIn$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<usernameAvailableResponse>(this.url + '/username', {
      username,
    });
  }

  signup(credentials: signupCredentialsResponse) {
    return this.http
      .post<SignupResponse>(this.url + '/signup', credentials)
      .pipe(
        tap(() => {
          this.signedIn$.next(true);
        })
      );
  }
}
