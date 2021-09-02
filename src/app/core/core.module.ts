import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Core1Component } from './core1/core1.component';
import { LayoutModule } from '../layout/layout.module';
import { HeaderComponent } from '../layout/sidebar/header/header.component';
import { SidebarComponent } from '../layout/sidebar/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule
    
  ],
  declarations: [
    Core1Component
  ],
  exports:[
    Core1Component,
    HeaderComponent,
    SidebarComponent
  ]
})
export class CoreModule { }