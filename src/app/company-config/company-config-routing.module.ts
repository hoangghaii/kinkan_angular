import { RedirectComponent } from './redirect/redirect.component';
import { UpdatedComponent } from './updated/updated.component';
import { AppConfigComponent } from './app-config/app-config.component';
import { ChatbotConfigComponent } from './chatbot-config/chatbot-config.component';
import { DoneComponent } from './done/done.component';
import { InstallComponent } from './install/install.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: InstallComponent,
  },
  {
    path: 'install',
    component: InstallComponent,
  },
  {
    path: 'done',
    component: DoneComponent,
  },
  {
    path: 'chatbot-config',
    component: ChatbotConfigComponent,
  },
  {
    path: 'app-config',
    component: AppConfigComponent,
  },
  {
    path: 'updated',
    component: UpdatedComponent,
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyConfigRoutingModule {}
