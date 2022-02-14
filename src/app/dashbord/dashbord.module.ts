import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordRoutingModule } from './dashbord-routing.module';
import { ActionComponent } from './action/action.component';


@NgModule({
  declarations: [
    ActionComponent
  ],
  imports: [
    CommonModule,
    DashbordRoutingModule
  ],exports: [ActionComponent]
})
export class DashbordModule { }
