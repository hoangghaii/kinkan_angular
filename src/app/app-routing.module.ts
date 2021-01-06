import { ManageComponent } from './admin/manage/manage.component';
import { LoadingComponent } from './parts/loading/loading.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./company-infor/company-infor.module').then(
        (m) => m.CompanyInforModule
      ),
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'company-infor',
    loadChildren: () =>
      import('./company-infor/company-infor.module').then(
        (m) => m.CompanyInforModule
      ),
  },
  {
    path: 'company-config',
    loadChildren: () =>
      import('./company-config/company-config.module').then(
        (m) => m.CompanyConfigModule
      ),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(
        (m) => m.AdminModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
