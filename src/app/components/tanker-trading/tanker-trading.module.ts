import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TankerTradingRoutingModule } from './tanker-trading-routing.module';
import { TankerTradingComponent } from './tanker-trading.component';
import { TankerAddLoadListingComponent } from './tanker-add-load-listing/tanker-add-load-listing.component';
import { TankerAddLoadComponent } from './tanker-add-load/tanker-add-load.component';
import { TankerReleaseLoadComponent } from './tanker-release-load/tanker-release-load.component';
import { TankerReleaseLoadListingComponent } from './tanker-release-load-listing/tanker-release-load-listing.component';


@NgModule({
  declarations: [
    TankerTradingComponent,
    TankerAddLoadListingComponent,
    TankerAddLoadComponent,
    TankerReleaseLoadComponent,
    TankerReleaseLoadListingComponent
  ],
  imports: [
    CommonModule,
    TankerTradingRoutingModule
  ]
})
export class TankerTradingModule { }
