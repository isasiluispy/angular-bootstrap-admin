import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from './full-layout.component';
import {HeaderComponent} from '../components/header/header.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {RouterModule} from '@angular/router';
import {Home, File, ShoppingCart, Users, BarChart2, Layers, PlusCircle, FileText} from 'angular-feather/icons';
import {FeatherModule} from 'angular-feather';

const icons = {Home, File, ShoppingCart, Users, BarChart2, Layers, PlusCircle, FileText};

@NgModule({
  declarations: [
    FullLayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FullLayoutComponent,
    FeatherModule
  ]
})
export class FullLayoutModule { }
