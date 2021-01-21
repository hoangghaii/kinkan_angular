import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { environment as env } from 'src/environments/environment';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  constructor(private location: Location, public translate: TranslateService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  back() {
    this.location.back();
  }
  getGuideline(e) {
    e.preventDefault();
    let language = this.translate.currentLang
      ? this.translate.currentLang
      : this.translate.defaultLang;


    const form = document.createElement('form');
    document.body.appendChild(form);
    form.setAttribute('style', 'display: none');
    let input: HTMLInputElement;
    input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'language';
    input.value = language;
    form.appendChild(input);
    form.action = env.BASE_URL+'guideline';
    form.method = 'GET';
    form.target = '';
    form.submit();
    form.parentNode.removeChild(form);
  }
}
