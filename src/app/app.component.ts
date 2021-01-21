import { UserService } from './services/user.service';
import { NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router, private userService: UserService) {}
  ngOnInit(): void {}
  title = 'Kinkan';
}
