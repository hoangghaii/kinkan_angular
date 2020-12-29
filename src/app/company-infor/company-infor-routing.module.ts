import { SuccessComponent } from './success/success.component';
import { FillComponent } from './fill/fill.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FillComponent,
  },
  {
    path: 'fill',
    component: FillComponent,
  },
  {
    path: 'success',
    component: SuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyInforRoutingModule {}
