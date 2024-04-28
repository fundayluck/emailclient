import { CommonModule, JsonPipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { InputComponent } from '../../shared/input/input.component';
import { AuthService } from '../../service/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  authForm = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [this.uniqueUsername.validate]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    },
    { validators: [this.matchPassword.validate] }
  );

  constructor(
    private authService: AuthService,
    private uniqueUsername: UniqueUsername,
    private matchPassword: MatchPassword
  ) {}

  onSubmit() {
    if (this.authForm.invalid) {
      return;
    }

    const formValue = this.authForm.value;

    this.authService.signup(formValue).subscribe({
      next: (response) => {},
      error: (err) => {
        if (!err.status) {
          this.authForm.setErrors({ noConnection: true });
        }
      },
    });

    console.log(this.authForm.value);
  }
}
