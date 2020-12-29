import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
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
    private fb: FormBuilder
  ) {}
  companyConfig;
  chatbotToken;
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
      this.chatbotForm.patchValue({
        chatbotToken: this.companyConfig.chatbot_token,
      });
    });
  }
  next() {
    this.companyConfig.status = 1;
    this.companyConfig.chatbot_token = this.chatbotForm.value.chatbotToken;
    this.companyService.updateCompany(this.companyConfig).subscribe((res) => {
      this.router.navigateByUrl('/company-config/done');
    });
  }
  back() {
    this.location.back();
  }
}
