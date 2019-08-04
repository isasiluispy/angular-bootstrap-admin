import {NgModule} from '@angular/core';
import {FullLayoutModule} from './full-layout/full-layout.module';

@NgModule({
  imports: [
    FullLayoutModule
  ],
  exports: [
    FullLayoutModule
  ]
})
export class LayoutModule {
}
