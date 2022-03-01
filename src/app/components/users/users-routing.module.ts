import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersListingComponent } from './users-listing/users-listing.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListingComponent
      },
      {
        path: 'users-listing',
        component: UsersListingComponent
      },
      {
        path: 'users-add-edit',
        component: UsersAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
