import { Component, Input } from '@angular/core';
import { Email } from '../../service/response/email/response-email';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  emailForm!: FormGroup<{
    to: FormControl<string | null>;
    from: FormControl<string | null>;
    subject: FormControl<string | null>;
    text: FormControl<string | null>;
  }>;

  @Input() email!: Email;

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      subject: new FormControl(subject, [Validators.required]),
      from: new FormControl({ value: from, disabled: true }),
      text: new FormControl(text, [Validators.required]),
    });
  }
}
