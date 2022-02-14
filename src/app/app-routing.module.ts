import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { LandingComponent } from './core/landing/landing.component';

const routes: Routes = [
  
    {path: '',
    component:LandingComponent
  },{
    path:'dashboard',
    loadChildren: () => import('./dashbord/dashbord.module').then(m=>m.DashbordModule)
  },
  {
path:'action',
loadChildren: () => import('./action/action.module').then(m => m.ActionModule)

  }
 
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
