import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TankerTradingComponent } from './tanker-trading.component';
import { TankerAddLoadListingComponent } from './tanker-add-load-listing/tanker-add-load-listing.component';
import { TankerAddLoadComponent } from './tanker-add-load/tanker-add-load.component';
import { TankerReleaseLoadListingComponent } from './tanker-release-load-listing/tanker-release-load-listing.component';
import { TankerReleaseLoadComponent } from './tanker-release-load/tanker-release-load.component';

const routes: Routes = [
  {
    path: '',
    component: TankerTradingComponent,
    children: [
      {
        path: '',
        component: TankerAddLoadListingComponent
      },
      {
        path: 'tanker-add-load-listing',
        component: TankerAddLoadListingComponent
      },
      {
        path: 'tanker-add-load',
        component: TankerAddLoadComponent
      },
      {
        path: 'tanker-release-load-listing',
        component: TankerReleaseLoadListingComponent
      },
      {
        path: 'tanker-release-load',
        component: TankerReleaseLoadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TankerTradingRoutingModule { }
