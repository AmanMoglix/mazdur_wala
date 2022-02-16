import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlpComponent } from './plp/plp.component';

const routes: Routes = [
  {path: 'plp', component: PlpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
