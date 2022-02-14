import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionRoutingModule } from './action-routing.module';
import { RenderComponent } from './render/render.component';


@NgModule({
  declarations: [
    RenderComponent
  ],
  imports: [
    CommonModule,
    ActionRoutingModule
  ],
  exports: [RenderComponent]
})
export class ActionModule { }
