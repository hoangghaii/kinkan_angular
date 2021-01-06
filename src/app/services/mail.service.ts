import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { environment as env } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpService } from './http.service';
@Injectable({
  providedIn: 'root',
})
export class MailService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient, private userService: UserService) {
    super();
  }
  sendContractInfor(mailInfo) {
    const url = this.apiUrl + `email`;
    return this.http.post(url, mailInfo).pipe(
      map((res: any) => {
        if (res) {
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
}
