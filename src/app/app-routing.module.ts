import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./components/companies/companies.module').then(m => m.CompaniesModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./components/reports/reports.module').then(m => m.ReportsModule)
  },
  {
    path: 'tanker-trading',
    loadChildren: () => import('./components/tanker-trading/tanker-trading.module').then(m => m.TankerTradingModule)
  },
  {
    path: 'tankers',
    loadChildren: () => import('./components/tankers/tankers.module').then(m => m.TankersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
