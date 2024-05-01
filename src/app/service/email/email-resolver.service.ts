import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Email } from '../response/email/response-email';
import { EmailService } from './email.service';

@Injectable({
  providedIn: 'root',
})
export class EmailResolver implements Resolve<Email> {
  constructor(private emailService: EmailService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;

    return this.emailService.getEmail(id).pipe(
      catchError(() => {
        this.router.navigateByUrl('/inbox/page/not-found-page');

        return EMPTY;
      })
    );
  }
}
