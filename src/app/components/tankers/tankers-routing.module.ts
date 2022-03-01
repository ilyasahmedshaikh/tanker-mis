import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TankersComponent } from './tankers.component';
import { TankersListingComponent } from './tankers-listing/tankers-listing.component';
import { TankersAddEditComponent } from './tankers-add-edit/tankers-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: TankersComponent,
    children: [
      {
        path: '',
        component: TankersListingComponent
      },
      {
        path: 'tankers-listing',
        component: TankersListingComponent
      },
      {
        path: 'tankers-add-edit',
        component: TankersAddEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankersRoutingModule { }
