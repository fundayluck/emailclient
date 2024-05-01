import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../service/email.service';
import { switchMap } from 'rxjs/operators';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { Email } from '../../service/response/email/response-email';

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css',
})
export class EmailShowComponent {
  email!: Email;

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap(({ id }) => {
          return this.emailService.getEmail(id);
        })
      )
      .subscribe((email) => {
        this.email = email;
      });
  }
}
