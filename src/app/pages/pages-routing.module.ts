import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FullLayoutComponent} from '../layout/full-layout/full-layout.component';
import {SimpleLayoutComponent} from '../layout/simple-layout/simple-layout.component';

const routes: Routes = [
  {
    path: 'simple',
    component: SimpleLayoutComponent,
    children: [
      {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    ]
  },
  {
    path: 'full',
    component: FullLayoutComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
      {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
