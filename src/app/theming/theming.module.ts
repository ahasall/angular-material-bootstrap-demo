import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemingRoutingModule } from './theming-routing.module';
import { ThemingComponent } from './theming.component';


@NgModule({
  declarations: [ThemingComponent],
  imports: [
    CommonModule,
    ThemingRoutingModule
  ]
})
export class ThemingModule { }
