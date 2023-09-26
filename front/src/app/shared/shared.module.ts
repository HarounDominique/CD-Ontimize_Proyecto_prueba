import { NgModule } from '@angular/core';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommonModule } from '@angular/common';
import { AccountNumberRenderComponent } from '../main/accounts/accounts-home/account-number-render/account-number-render.component';

@NgModule({
  imports: [
    OntimizeWebModule
  ],
  declarations: [
    AccountNumberRenderComponent
  ],
  exports: [
    CommonModule,
    AccountNumberRenderComponent
  ]
})
export class SharedModule { }
