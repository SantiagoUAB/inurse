import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastPatientPage } from './last-patient.page';

const routes: Routes = [
  {
    path: '',
    component: LastPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastPatientPageRoutingModule {}
