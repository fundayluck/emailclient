import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';

export const AuthHttpInterceptor = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const modifiedReq = req.clone({
    withCredentials: true,
  });

  return next(modifiedReq);
};
