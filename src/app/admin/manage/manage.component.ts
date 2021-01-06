import { Router } from '@angular/router';
import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  constructor(private companyService: CompanyService, private router: Router) {}
  listCompany;
  ngOnInit(): void {
    this.companyService.getCompany().subscribe(
      (res) => {
        if (res.admin != 1) this.router.navigateByUrl('/admin/access-denied');
        this.getAllCompany();
      },
      (error) => {
        this.router.navigateByUrl('/login');
      }
    );
  }
  getAllCompany() {
    this.companyService.getAllCompany().subscribe((res) => {
      console.log(res);
      this.listCompany = res;
    });
  }
  enable(id) {
    for (let index = 0; index < this.listCompany.length; index++) {
      if (this.listCompany[index].id == id) {
        this.listCompany[index].status = 1;
        this.companyService
          .updateStatus(this.listCompany[index])
          .subscribe((res) => {
            console.log(res);
            this.listCompany = res;
          });
      }
    }
  }
  disable(id) {
    for (let index = 0; index < this.listCompany.length; index++) {
      if (this.listCompany[index].id == id) {
        this.listCompany[index].status = 0;
        this.companyService
          .updateStatus(this.listCompany[index])
          .subscribe((res) => {
            console.log(res);
            this.listCompany = res;
          });
      }
    }
  }
}
