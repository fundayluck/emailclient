import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  SignedinResponse,
  SigninResponse,
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
  signedIn$: BehaviorSubject<boolean | null> = new BehaviorSubject<
    boolean | null
  >(null);
  username = '';

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
        tap(({ username }) => {
          this.signedIn$.next(true);
          this.username = username;
        })
      );
  }

  checkAuth() {
    return this.http.get<SignedinResponse>(this.url + '/signedin').pipe(
      tap(({ authenticated, username }) => {
        this.signedIn$.next(authenticated);
        this.username = username;
      })
    );
  }

  signout() {
    return this.http.post(this.url + '/signout', {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signin(credentials: any) {
    return this.http
      .post<SigninResponse>(this.url + '/signin', credentials)
      .pipe(
        tap(({ username }) => {
          this.signedIn$.next(true);
          this.username = username;
        })
      );
  }
}
