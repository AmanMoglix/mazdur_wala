import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { PlpComponent } from './plp/plp.component';
import { ActionModule } from '../action/action.module';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    PlpComponent
  ],
  imports: [
    CommonModule,
    ProductModuleRoutingModule,
    MatSliderModule,
    MatListModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    ActionModule,
    MatButtonModule
  ]
})
export class ProductModuleModule { }
