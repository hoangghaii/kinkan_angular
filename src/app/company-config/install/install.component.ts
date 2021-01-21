import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export class InstallComponent implements OnInit {
  constructor(private router: Router, private companyService: CompanyService) {}
  user;
  type = 'application/zip';
  async ngOnInit(): Promise< void >{
    window.scrollTo(0, 0);
    this.user = await this.companyService.getCompany().toPromise();
  }
  next() {
    this.router.navigateByUrl('/company-config/app-config');
  }
  getPackage(e) {
    e.preventDefault();
    const form = document.createElement('form');
    document.body.appendChild(form);
    form.setAttribute('style', 'display: none');
    let input: HTMLInputElement;
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'company_code';
    input.value = this.user.code;
    form.appendChild(input);
    form.action = env.BASE_URL+'package';
    form.method = 'GET';
    form.target = '';
    form.submit();
    form.parentNode.removeChild(form);
  }
}
