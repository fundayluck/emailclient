import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface usernameAvailableResponse {
  avalaible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://api.angular-email.com/auth';

  constructor(private http: HttpClient) {}

  usernameAvailable(username: string) {
    return this.http.post<usernameAvailableResponse>(this.url + '/username', {
      username,
    });
  }

  signup(credentials: any) {
    return this.http.post<any>(this.url + '/signup', credentials);
  }
}
