import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.scss'],
})
export class DoneComponent implements OnInit {
  constructor(private location: Location) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  back() {
    this.location.back();
  }
}
