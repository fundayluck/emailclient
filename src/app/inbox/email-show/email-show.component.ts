import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Email } from '../../service/response/email/response-email';

@Component({
  selector: 'app-email-show',
  standalone: true,
  imports: [],
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css',
})
export class EmailShowComponent {
  email!: Email;

  constructor(private route: ActivatedRoute) {
    console.log('emailshow', route);

    if (this.route.snapshot.data['email']) {
      this.email = this.route.snapshot.data['email'];
      this.route.data.subscribe(({ email }) => {
        this.email = email;
      });
      return;
    }
  }

  ngOnInit() {}
}
