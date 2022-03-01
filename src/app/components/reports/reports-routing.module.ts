import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './reports.component';
import { SalesCompanyReportComponent } from './sales-company-report/sales-company-report.component';
import { SalesTankerReportComponent } from './sales-tanker-report/sales-tanker-report.component';
import { SalesExternalTankersComponent } from './sales-external-tankers/sales-external-tankers.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      {
        path: '',
        component: SalesCompanyReportComponent
      },
      {
        path: 'sales-company-report',
        component: SalesCompanyReportComponent
      },
      {
        path: 'sales-tanker-report',
        component: SalesTankerReportComponent
      },
      {
        path: 'sales-external-tankers',
        component: SalesExternalTankersComponent
      },
      {
        path: 'expense-report',
        component: ExpenseReportComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
