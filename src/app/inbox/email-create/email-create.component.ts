import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { Email } from '../../service/response/email/response-email';
import { AuthService } from '../../service/auth.service';
import { EmailService } from '../../service/email/email.service';

@Component({
  selector: 'app-email-create',
  standalone: true,
  imports: [CommonModule, ModalComponent, EmailFormComponent],
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css',
})
export class EmailCreateComponent {
  showModal: boolean = false;
  email: Email;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) {
    this.email = {
      id: '',
      to: '',
      subject: '',
      html: '',
      text: '',
      from: `${authService.username}@angular-email.com`,
    };
  }

  onSubmit(email: Email) {
    this.emailService.sendEmail(email).subscribe(() => {
      this.showModal = false;
    });
  }
}
