import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompaniesComponent } from './companies.component';
import { CompaniesListingComponent } from './companies-listing/companies-listing.component';
import { CompaniesAddEditComponent } from './companies-add-edit/companies-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CompaniesComponent,
    children: [
      {
        path: '',
        component: CompaniesListingComponent
      },
      {
        path: 'companies-listing',
        component: CompaniesListingComponent
      },
      {
        path: 'companies-add-edit',
        component: CompaniesAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaniesRoutingModule { }
