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
export class CompanyService extends HttpService {
  apiUrl = env.BASE_URL;

  constructor(private http: HttpClient, private userService: UserService) {
    super();
  }
  getCompany() {
    const url = this.apiUrl + `config`;
    return this.http.get(url).pipe(
      map((res: any) => {
        if (res) {
          this.userService.user = res;
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
  createCompany(companyInfor) {
    const url = this.apiUrl + `signup`;
    return this.http.post(url, companyInfor).pipe(
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
  login(userInfor) {
    const url = this.apiUrl + `login`;
    return this.http.post(url, userInfor).pipe(
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
  updateCompany(companyInfor) {
    const url = this.apiUrl + `config`;
    return this.http.put(url, companyInfor).pipe(
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
  getAllCompany() {
    const url = this.apiUrl + `admin`;
    return this.http.get(url).pipe(
      map((res: any) => {
        if (res) {
          this.userService.user = res;
          return res;
        }
      }),
      catchError((e) => {
        return this.handleError(e);
      })
    );
  }
  updateStatus(companyInfor) {
    const url = this.apiUrl + `config/status`;
    return this.http.put(url, companyInfor).pipe(
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
