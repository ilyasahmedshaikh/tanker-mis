import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SalesCompanyReportComponent } from './sales-company-report/sales-company-report.component';
import { SalesTankerReportComponent } from './sales-tanker-report/sales-tanker-report.component';
import { SalesExternalTankersComponent } from './sales-external-tankers/sales-external-tankers.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';


@NgModule({
  declarations: [
    ReportsComponent,
    SalesCompanyReportComponent,
    SalesTankerReportComponent,
    SalesExternalTankersComponent,
    ExpenseReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule
  ]
})
export class ReportsModule { }
