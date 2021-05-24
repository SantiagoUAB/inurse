import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PantallaPrincipalPageRoutingModule } from './pantalla-principal-routing.module';

import { PantallaPrincipalPage } from './pantalla-principal.page';
import { BuscadorPage } from '../buscador/buscador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PantallaPrincipalPageRoutingModule
  ],
  declarations: [PantallaPrincipalPage, BuscadorPage]
})
export class PantallaPrincipalPageModule {}
