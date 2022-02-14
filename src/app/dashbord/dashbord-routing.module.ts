import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { AgentModule } from './agent/agent.module';

const routes: Routes = [
  {path:'', component:ActionComponent},
  {path:'agent',
loadChildren:()=> import('./agent/agent.module').then(() =>AgentModule)}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
