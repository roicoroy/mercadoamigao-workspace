import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SucessPage } from './sucess.page';

const routes: Routes = [
  {
    path: '',
    component: SucessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SucessPageRoutingModule {}
