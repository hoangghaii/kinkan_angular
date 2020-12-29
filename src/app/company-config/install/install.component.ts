import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-install',
  templateUrl: './install.component.html',
  styleUrls: ['./install.component.scss'],
})
export class InstallComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  next() {
    this.router.navigateByUrl('/company-config/app-config');
  }
}
