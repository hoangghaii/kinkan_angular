import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPass = false;
  showError = false;
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {}
  loginForm: FormGroup;
  ngOnInit(): void {
    this.initForm();
  }
  showHide() {
    this.showPass = !this.showPass;
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submit() {
    if (this.loginForm.invalid) {
      return;
    }
    let userInfor = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    this.companyService.login(userInfor).subscribe(
      (res) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.showError = false;
          this.userService.user = true;
          this.companyService.getCompany().subscribe((res) => {
            if (res.status) {
              if (res.admin != 1) {
                this.location.back();
              } else this.router.navigateByUrl('/admin/manage');
            } else this.router.navigateByUrl('/company-config/install');
          });
        }
      },
      (error) => {
        this.showError = true;
      }
    );
  }
}
