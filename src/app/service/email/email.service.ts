import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email, EmailSummary } from '../response/email/response-email';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  url = 'https://api.angular-email.com/emails';

  constructor(private http: HttpClient) {}

  getEmails() {
    return this.http.get<EmailSummary[]>(this.url, {
      withCredentials: true,
    });
  }

  getEmail(id: string) {
    return this.http.get<Email>(this.url + '/' + id, {
      withCredentials: true,
    });
  }

  sendEmail(email: Email) {
    return this.http.post<Email>(this.url, email);
  }
}
