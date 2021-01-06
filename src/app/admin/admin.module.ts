import { ManageComponent } from './manage/manage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AccessDeniedComponent } from './access-denied/access-denied.component';

@NgModule({
  declarations: [ManageComponent, AccessDeniedComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
