import { Component } from '@angular/core';
import { EmailService } from '../../service/email/email.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-email-index',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent {
  emails: any = [];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe((emails) => {
      this.emails = emails;
    });
  }
}
