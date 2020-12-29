import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss'],
})
export class SuccessComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  back() {
    this.location.back();
  }
}
