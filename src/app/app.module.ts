import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WalletsComponent } from './wallets/wallets.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, WalletsComponent, TransactionsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
