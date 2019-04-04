import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ChildrenOutletContexts } from '@angular/router';
import { DeliverStatusComponent } from './deliver-status/deliver-status.component';

import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'delivery', component: DeliverStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}

