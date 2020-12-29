import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-app-config',
  templateUrl: './app-config.component.html',
  styleUrls: ['./app-config.component.scss'],
})
export class AppConfigComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private companyService: CompanyService,
    private router: Router,
    private location: Location
  ) {}
  configForm: FormGroup;
  companyConfig;
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.initForm();
    this.getConfig();
  }
  initForm() {
    this.configForm = this.fb.group({
      staffMasterID: [''],
      staffMasterToken: [''],
      holidayMasterID: [''],
      holidayMasterToken: [''],
      OTMasterID: [''],
      OTMasterToken: [''],
      departmentMasterID: [''],
      departmentMasterToken: [''],
      notificationMasterID: [''],
      notificationMasterToken: [''],
      holidayManagementID: [''],
      holidayManagementToken: [''],
      OTManagementID: [''],
      OTManagementToken: [''],
      attendanceManagementID: [''],
      attendanceManagementToken: [''],
    });
  }
  submit() {
    if (this.configForm.invalid) {
      return;
    }
    let value = this.configForm.value;
    let body = {
      m_staff_app_id: value.staffMasterID,
      m_staff_app_token: value.staffMasterToken,
      m_holiday_app_id: value.holidayMasterID,
      m_holiday_app_token: value.holidayMasterToken,
      m_ot_app_id: value.OTMasterID,
      m_ot_app_api: value.OTMasterToken,
      m_department_app_id: value.departmentMasterID,
      m_department_app_token: value.departmentMasterToken,
      m_notification_app_id: value.notificationMasterID,
      m_notification_app_token: value.notificationMasterToken,
      t_holiday_app_id: value.holidayManagementID,
      t_holiday_app_token: value.holidayManagementToken,
      t_ot_app_id: value.OTManagementID,
      t_ot_app_token: value.OTManagementToken,
      t_attendance_app_id: value.attendanceManagementID,
      t_attendance_app_token: value.attendanceManagementToken,
    };
    this.companyService.updateCompany(body).subscribe((res) => {
      this.companyConfig = res;
      this.patchValue(this.companyConfig);
      this.router.navigateByUrl('/company-config/chatbot-config');
    });
  }
  getConfig() {
    this.companyService.getCompany().subscribe((res) => {
      this.companyConfig = res;
      this.patchValue(this.companyConfig);
    });
  }
  patchValue(config) {
    this.configForm.patchValue({
      staffMasterID: config.m_staff_app_id,
      staffMasterToken: config.m_staff_app_token,
      holidayMasterID: config.m_holiday_app_id,
      holidayMasterToken: config.m_holiday_app_token,
      OTMasterID: config.m_ot_app_id,
      OTMasterToken: config.m_ot_app_api,
      departmentMasterID: config.m_department_app_id,
      departmentMasterToken: config.m_department_app_token,
      notificationMasterID: config.m_notification_app_id,
      notificationMasterToken: config.m_notification_app_token,
      holidayManagementID: config.t_holiday_app_id,
      holidayManagementToken: config.t_holiday_app_token,
      OTManagementID: config.t_ot_app_id,
      OTManagementToken: config.t_ot_app_token,
      attendanceManagementID: config.t_attendance_app_id,
      attendanceManagementToken: config.t_attendance_app_token,
    });
  }
  back() {
    this.location.back();
  }
}
