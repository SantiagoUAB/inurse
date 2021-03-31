import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaPacientePage } from './ficha-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: FichaPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPacientePageRoutingModule {}
