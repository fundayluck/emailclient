import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailSummary } from './response/email/response-email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  url = 'https://api.angular-email.com/emails';

  constructor(private http: HttpClient) {}

  getEmail() {
    return this.http.get<EmailSummary[]>(this.url, {
      withCredentials: true,
    });
  }

  getEmailById(id: string) {
    return this.http.get<EmailSummary>(this.url + '/' + id, {
      withCredentials: true,
    });
  }
}
