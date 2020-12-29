import { environment as env } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * HTTPレスポンスエラー捕捉用Interceptor
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token');
    const isApiUrl = request.url.startsWith(env.BASE_URL);
    const headers =
      token && isApiUrl
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {};

    request = request.clone({
      setHeaders: headers,
    });

    return next.handle(request).pipe(
      map((evt: HttpEvent<any>) => {
        return evt;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
