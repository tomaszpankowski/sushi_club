import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuS1Component } from './menu-s1/menu-s1.component';
import { MenuS2Component } from './menu-s2/menu-s2.component';
import { MenuS3Component } from './menu-s3/menu-s3.component';


@NgModule({
  declarations: [
    MenuComponent,
    MenuS1Component,
    MenuS2Component,
    MenuS3Component
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
