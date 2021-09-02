import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { LoaderComponent } from './loader/loader.component';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    LoaderComponent,
    PurePipe,
    ImpurePipe


  ],
  exports: [
    CardComponent,
    LoaderComponent,
    PurePipe,
    ImpurePipe
  ]
})
export class SharedModule { }