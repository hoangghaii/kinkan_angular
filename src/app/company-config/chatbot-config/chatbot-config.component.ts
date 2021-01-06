import { MailService } from './../../services/mail.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
@Component({
  selector: 'app-chatbot-config',
  templateUrl: './chatbot-config.component.html',
  styleUrls: ['./chatbot-config.component.scss'],
})
export class ChatbotConfigComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private location: Location,
    private fb: FormBuilder,
    private translateService: TranslateService,
    private sweetAlertService: SweetAlertService,
    private mailService:MailService
  ) {}
  companyConfig;
  chatbotToken;
  newContract = true;;
  chatbotForm: FormGroup;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initForm();
    this.getConfig();
  }
  initForm() {
    this.chatbotForm = this.fb.group({
      chatbotToken: ['', Validators.required],
    });
  }
  getConfig() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyConfig = res;
      this.newContract = false;
      this.chatbotForm.patchValue({
        chatbotToken: this.companyConfig.chatbot_token,
      });
    });
  }
  next() {
    if (this.chatbotForm.invalid) {
      this.translateService.get('pleaseFillAll').subscribe((res) => {
        this.sweetAlertService.showErrorAlert(res);
      });
      return;
    }
    let create = true;
    if (this.companyConfig.status)
      create = false;
    this.companyConfig.status = 1;
    this.companyConfig.chatbot_token = this.chatbotForm.value.chatbotToken;
    this.companyService.updateCompany(this.companyConfig).subscribe((res) => {
      if (create) {
        this.router.navigateByUrl('/company-config/done');
      }
      else
         this.router.navigateByUrl('/company-config/updated');
    });
  }
  back() {
    this.location.back();
  }
}
