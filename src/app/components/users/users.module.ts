import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersAddEditComponent } from './users-add-edit/users-add-edit.component';
import { UsersListingComponent } from './users-listing/users-listing.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersAddEditComponent,
    UsersListingComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
