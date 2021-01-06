import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { CompanyService } from './../../services/company.service';
import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  multiLang = [
    {
      code: 'vn',
      lang: 'Tiếng Việt',
      imgLang: 'https://www.flaticon.com/svg/static/icons/svg/330/330465.svg',
    },
    {
      code: 'en',
      lang: 'English',
      imgLang: 'https://www.flaticon.com/svg/static/icons/svg/555/555417.svg',
    },
    {
      code: 'jp',
      lang: '日本語',
      imgLang: 'https://cdn.countryflags.com/thumbs/japan/flag-400.png',
    },
  ];
  selectedCityName = 'en';

  constructor(
    public translate: TranslateService,
    public userService: UserService,
  ) {
    translate.addLangs(['en', 'vn', 'jp']);
    translate.setDefaultLang('en');
  }
  interval;
  ngOnInit(): void {
  }

  changeLeagueOwner(): void {
    this.translate.use(this.selectedCityName);
  }
}
