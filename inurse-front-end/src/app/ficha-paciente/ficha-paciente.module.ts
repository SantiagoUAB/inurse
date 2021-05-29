import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPacientePageRoutingModule } from './ficha-paciente-routing.module';

import { FichaPacientePage } from './ficha-paciente.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        FichaPacientePageRoutingModule
    ],
    exports: [
        FichaPacientePage
    ],
    declarations: [FichaPacientePage]
})
export class FichaPacientePageModule {}
