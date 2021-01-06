import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyConfigRoutingModule } from './company-config-routing.module';
import { InstallComponent } from './install/install.component';
import { AppConfigComponent } from './app-config/app-config.component';
import { ChatbotConfigComponent } from './chatbot-config/chatbot-config.component';
import { DoneComponent } from './done/done.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { UpdatedComponent } from './updated/updated.component';
import { RedirectComponent } from './redirect/redirect.component';
@NgModule({
  declarations: [
    InstallComponent,
    AppConfigComponent,
    ChatbotConfigComponent,
    DoneComponent,
    UpdatedComponent,
    RedirectComponent,
  ],
  imports: [
    CommonModule,
    CompanyConfigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
})
export class CompanyConfigModule {}
