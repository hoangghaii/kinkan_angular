import { CompanyService } from './../../services/company.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.scss'],
})
export class FillComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private companyService: CompanyService
  ) {}
  companyForm: FormGroup;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initForm();
  }
  initForm() {
    this.companyForm = this.fb.group({
      email: ['', Validators.required],
      companyName: ['', Validators.required],
      picName: ['', Validators.required],
      address: ['', Validators.required],
      picPhone: ['', Validators.required],
      domainKintone: ['', Validators.required],
      language: ['', Validators.required],
    });
  }
  submit() {
    if (this.companyForm.invalid) {
      return;
    }
    let value = this.companyForm.value;
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,./;'[]=-)(*&^%$#@!~`";
    let pw = this.makeRandom(10, possible);
    let body = {
      email: value.email,
      password: pw,
      company_name: value.companyName,
      pic_name: value.picName,
      address: value.address,
      pic_phone: value.picPhone,
      domain_kintone: value.domainKintone,
      language: value.language,
    };
    console.log(body);
    this.companyService
      .createCompany(body)
      .subscribe((res) => console.log(res));

    this.router.navigateByUrl('/company-infor/success');
  }
  makeRandom(lengthOfCode: number, possible: string) {
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
