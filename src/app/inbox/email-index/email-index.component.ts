import { Component } from '@angular/core';
import { EmailService } from '../../service/email.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-index',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent {
  emails: any = [];

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getEmail().subscribe((emails) => {
      this.emails = emails;
    });
  }
}
