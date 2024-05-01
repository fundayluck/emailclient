import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Email } from '../response/email/response-email';
import { inject } from '@angular/core';
import { EmailService } from './email.service';

export const emailResolver: ResolveFn<Email> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const emailService = inject(EmailService);
  const { id } = route.params;

  return emailService.getEmail(id);
};
