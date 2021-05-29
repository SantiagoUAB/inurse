import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPatientPageRoutingModule } from './last-patient-routing.module';

import { LastPatientPage } from './last-patient.page';
import {FichaPacientePageModule} from '../ficha-paciente/ficha-paciente.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LastPatientPageRoutingModule,
        FichaPacientePageModule
    ],
  declarations: [LastPatientPage]
})
export class LastPatientPageModule {}
