import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showComponents: boolean = false;
  constructor(private router: Router) {
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (
          event['url'] != '/login' &&
          event['url'] != '/company-config/redirect' &&
          event['url'] != '/admin/manage' &&
          event['url'] != '/admin/access-denied'
        ) {
          this.showComponents = true;
        }
      }
    });
  }
  ngOnInit(): void {}
  title = 'Kinkan';
}
