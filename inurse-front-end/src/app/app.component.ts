import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listado Plantas', url: '/folder/Listado_Plantas', icon: 'apps' },
    { title: 'Paciente Fijado', url: '/folder/Paciente_Fijado', icon: 'person' },
    { title: 'Cerrar Sesion', url: '/folder/Cerrar_Sesion', icon: 'arrow-forward' },
  ];
  constructor() {}
}
