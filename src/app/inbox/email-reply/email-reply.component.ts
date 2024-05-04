import { Component } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { Email } from '../../service/response/email/response-email';

@Component({
  selector: 'app-email-reply',
  standalone: true,
  imports: [ModalComponent, EmailFormComponent],
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent {
  showModal = false;
  email!: Email;

  constructor() {}

  onSubmit(email: Email) {}
}
