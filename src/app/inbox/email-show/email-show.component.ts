import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../../service/email.service';
import { switchMap } from 'rxjs/operators';
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
    // this.route.params.subscribe(({ id }) => {
    //   this.emailService.getEmail(id).subscribe((email) => {
    //     this.email = email;
    //   });
    // });

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
