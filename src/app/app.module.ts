import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooltoStringPipe } from './pipes/boolToString.pipe';
import { PersonComponent } from './persona/person.component';

@NgModule({
  declarations: [
    AppComponent,PersonComponent,BooltoStringPipe
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }