import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyConfigRoutingModule } from './company-config-routing.module';
import { InstallComponent } from './install/install.component';
import { AppConfigComponent } from './app-config/app-config.component';
import { ChatbotConfigComponent } from './chatbot-config/chatbot-config.component';
import { DoneComponent } from './done/done.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    InstallComponent,
    AppConfigComponent,
    ChatbotConfigComponent,
    DoneComponent,
  ],
  imports: [CommonModule, CompanyConfigRoutingModule,FormsModule, ReactiveFormsModule],
})
export class CompanyConfigModule {}
