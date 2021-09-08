
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { ProviderComponent } from './provider/provider.component';


const routes: Routes = [
  {
    path: 'provider', component: ProviderComponent
  },
  {
    path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule)
  }
];

@NgModule({
  declarations: [
    AppComponent, 
    ProviderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
