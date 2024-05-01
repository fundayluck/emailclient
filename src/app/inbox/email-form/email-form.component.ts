import { Component, Input } from '@angular/core';
import { Email } from '../../service/response/email/response-email';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  emailForm!: FormGroup;
  @Input() email!: Email;

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to),
      subject: new FormControl(subject),
      from: new FormControl(from),
      text: new FormControl(text),
    });
  }
}
