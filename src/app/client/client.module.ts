import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Client1Component } from './client1/client1.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: '', redirectTo: 'client1', pathMatch: 'full'
    },
    {
      path: 'client1', component: Client1Component
    }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Client1Component]
})
export class ClientModule { }