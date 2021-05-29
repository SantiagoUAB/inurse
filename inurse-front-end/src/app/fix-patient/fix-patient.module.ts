import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FixPatientPageRoutingModule } from './fix-patient-routing.module';

import { FixPatientPage } from './fix-patient.page';
import {FichaPacientePageModule} from '../ficha-paciente/ficha-paciente.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FixPatientPageRoutingModule,
        FichaPacientePageModule
    ],
  declarations: [FixPatientPage]
})
export class FixPatientPageModule {}
