import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowPatientPageRoutingModule } from './show-patient-routing.module';

import { ShowPatientPage } from './show-patient.page';
import {FichaPacientePageModule} from '../ficha-paciente/ficha-paciente.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShowPatientPageRoutingModule,
        FichaPacientePageModule
    ],
  declarations: [ShowPatientPage]
})
export class ShowPatientPageModule {}
