import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyInforRoutingModule } from './company-infor-routing.module';
import { FillComponent } from './fill/fill.component';
import { SuccessComponent } from './success/success.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [FillComponent, SuccessComponent],
  imports: [
    CommonModule,
    CompanyInforRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CompanyInforModule {}
