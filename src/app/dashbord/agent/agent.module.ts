import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { ListComponent } from './list/list.component';
import { DashbordModule } from '../dashbord.module';
import { ActionModule } from 'src/app/action/action.module';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    ListComponent,
    FormComponent,
  
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    ActionModule,
  ]
})
export class AgentModule { }
