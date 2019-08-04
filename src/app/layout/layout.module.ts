import {NgModule} from '@angular/core';
import {SimpleLayoutModule} from './simple-layout/simple-layout.module';
import {FullLayoutModule} from './full-layout/full-layout.module';

@NgModule({
  imports: [
    SimpleLayoutModule,
    FullLayoutModule
  ],
  exports: [
    SimpleLayoutModule,
    FullLayoutModule
  ]
})
export class LayoutModule {
}
