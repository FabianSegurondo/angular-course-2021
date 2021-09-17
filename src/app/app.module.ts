import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NoVacunadosService } from './core/services/no-vacunados.service';
import { VacunadosService } from './core/services/vacunados.service';
import { CommonModule } from '@angular/common';
import { VacunadosComponent } from './vacunados/vacunados.component';
import { NoVacunadosComponent } from './no-vacunados/no-vacunados.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    VacunadosComponent,
    NoVacunadosComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    NoVacunadosService,
    VacunadosService,
    VacunadosComponent,
    NoVacunadosComponent,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}