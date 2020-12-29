import { CompanyService } from './../../services/company.service';
import { Component, OnInit } from '@angular/core';
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
    private companyService: CompanyService
  ) {
    translate.addLangs(['en', 'vn', 'jp']);
    translate.setDefaultLang('en');
  }
  newContract = true;
  ngOnInit(): void {
    this.companyService.getCompany().subscribe((res) => {
      this.newContract = false;
      console.log(res);
    });
  }

  changeLeagueOwner(): void {
    this.translate.use(this.selectedCityName);
  }
}
