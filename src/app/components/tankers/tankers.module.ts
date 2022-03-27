import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TankersRoutingModule } from './tankers-routing.module';
import { TankersComponent } from './tankers.component';
import { TankersListingComponent } from './tankers-listing/tankers-listing.component';
import { TankersAddEditComponent } from './tankers-add-edit/tankers-add-edit.component';


@NgModule({
  declarations: [
    TankersComponent,
    TankersListingComponent,
    TankersAddEditComponent
  ],
  imports: [
    CommonModule,
    TankersRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TankersModule { }
