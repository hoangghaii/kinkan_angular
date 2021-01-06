import { MailService } from './../../services/mail.service';
import { TranslateService } from '@ngx-translate/core';
import { SweetAlertService } from './../../services/sweet-alert.service';
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
    private companyService: CompanyService,
    private sweetAlertService: SweetAlertService,
    private translateService: TranslateService,
    private mailService: MailService
  ) {}
  newContract = true;
  companyInfor;
  companyForm: FormGroup;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.getCompany();
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
  getCompany() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyInfor = res;
      this.patchValue(this.companyInfor);
      this.newContract = false;
    });
  }
  submit() {
    if (this.companyForm.invalid) {
      this.translateService.get('pleaseFillAll').subscribe((res) => {
        this.sweetAlertService.showErrorAlert(res);
      });
      return;
    }
    let value = this.companyForm.value;
    let possible =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890&%$#@!';
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

    if (this.newContract) {
      this.companyService.createCompany(body).subscribe((res) => {
        let userInfor = {
          email: res.email,
          password: pw,
        };
        this.companyService.login(userInfor).subscribe((user) => {
          let mailInfor = {
            pic_name: res.pic_name,
            code: res.code,
            email: res.email,
            password: pw,
            token: user.token,
          };
          this.mailService.sendContractInfor(mailInfor).subscribe(rs => {
            this.router.navigateByUrl('/company-infor/success');
          });
        })


      }, (error) => {
          this.translateService.get('emailExist').subscribe((res) => {
            this.sweetAlertService.showErrorAlert(res);
          });
      }
      );
    } else {
      this.companyInfor.email = value.email;
      this.companyInfor.company_name = value.companyName;
      this.companyInfor.pic_name = value.picName;
      this.companyInfor.address = value.address;
      this.companyInfor.pic_phone = value.picPhone;
      this.companyService.updateCompany(this.companyInfor).subscribe((res) => {
        this.router.navigateByUrl('/company-config/app-config');
      });
    }
  }
  makeRandom(lengthOfCode: number, possible: string) {
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  patchValue(companyInfor) {
    this.companyForm.patchValue({
      email: companyInfor.email,
      companyName: companyInfor.company_name,
      picName: companyInfor.pic_name,
      address: companyInfor.address,
      picPhone: companyInfor.pic_phone,
      domainKintone: companyInfor.domain_kintone,
      language: companyInfor.language,
    });
    this.companyForm.controls['domainKintone'].disable();
    this.companyForm.controls['language'].disable();
    this.companyForm.controls['email'].disable();
  }
}
