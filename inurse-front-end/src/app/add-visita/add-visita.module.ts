import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddVisitaPageRoutingModule } from './add-visita-routing.module';

import { AddVisitaPage } from './add-visita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddVisitaPageRoutingModule
  ],
  declarations: [AddVisitaPage]
})
export class AddVisitaPageModule {}
