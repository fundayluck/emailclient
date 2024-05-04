import { Component, Input } from '@angular/core';
import { ModalComponent } from '../../shared/modal/modal.component';
import { EmailFormComponent } from '../email-form/email-form.component';
import { Email } from '../../service/response/email/response-email';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-email-reply',
  standalone: true,
  imports: [CommonModule, ModalComponent, EmailFormComponent],
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent {
  showModal = false;
  @Input() email!: Email;

  constructor() {
    console.log(this.showModal);
  }

  ngOnInit() {
    const text = this.email.text.replace(/\n/gi, '\n> ');

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `Re: ${this.email.subject}`,
      text: `\n\n--------------${this.email.from} wrote:\n> ${text}`,
    };
  }

  onSubmit(email: Email) {}
}
