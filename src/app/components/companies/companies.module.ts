import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { CompaniesListingComponent } from './companies-listing/companies-listing.component';
import { CompaniesAddEditComponent } from './companies-add-edit/companies-add-edit.component';


@NgModule({
  declarations: [
    CompaniesComponent,
    CompaniesListingComponent,
    CompaniesAddEditComponent
  ],
  imports: [
    CommonModule,
    CompaniesRoutingModule
  ]
})
export class CompaniesModule { }
