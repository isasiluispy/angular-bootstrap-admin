import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleLayoutComponent } from './simple-layout.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [SimpleLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SimpleLayoutComponent]
})
export class SimpleLayoutModule { }
