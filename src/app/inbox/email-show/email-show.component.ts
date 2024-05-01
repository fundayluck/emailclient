import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../service/email.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css',
})
export class EmailShowComponent {
  email: any = {};

  constructor(
    private emailService: EmailService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.emailService.getEmailById(id).subscribe((email) => {
        this.email = email;
      });
    });
  }
}
