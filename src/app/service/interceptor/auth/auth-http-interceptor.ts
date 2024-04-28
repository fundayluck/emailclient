import {
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
  HttpEventType,
} from '@angular/common/http';
import { filter, Observable, tap } from 'rxjs';

export const AuthHttpInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const modifiedReq = req.clone({
    withCredentials: true,
  });

  return next(modifiedReq).pipe(
    filter((val) => val.type === HttpEventType.Sent),

    tap((val) => {
      console.log('Sent the request');
    })
  );
};
