import { UserService } from './user.service';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
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
import Swal from 'sweetalert2';
import { TokenService } from './token.service';
/**
 * HTTPレスポンスエラー捕捉用Interceptor
 */
@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private translateService: TranslateService,
    private userService: UserService,
    private tokenService: TokenService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = this.tokenService.getWithExpiry('token');
    const isApiUrl = request.url.startsWith(env.BASE_URL);
    const headers =
      token && isApiUrl
        ? {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }
        : {
            'Content-Type': 'application/json',
          };
    request = request.clone({
      setHeaders: headers,
    });

    return next.handle(request).pipe(
      map((evt: HttpEvent<any>) => {
        return evt;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 500) {

        }
        if (err.status === 400) {

        }
        if (err.status === 422) {

        }
        if (err.status === 401 && this.userService.user) {
          this.translateService.get('plzLoginAgain').subscribe((msg) => {
            Swal.fire({
              title: msg,
              confirmButtonText: `Ok`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                this.router.navigateByUrl('/login');
              }
            });
          });
        }
        return throwError(err);
      })
    );
  }
}
