import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product1Component } from './product1/product1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', redirectTo: 'product1', pathMatch: 'full'
  },
  {
  path: 'product1', component: Product1Component
  }
]

@NgModule({
  imports: [
    CommonModule, 
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    Product1Component
  ],
})
export class ProductModule { }