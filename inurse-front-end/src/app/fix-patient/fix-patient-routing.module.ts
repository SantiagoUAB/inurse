import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FixPatientPage } from './fix-patient.page';

const routes: Routes = [
  {
    path: '',
    component: FixPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FixPatientPageRoutingModule {}
