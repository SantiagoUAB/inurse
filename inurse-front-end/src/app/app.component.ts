import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Pantalla pincipal', url: 'pantalla-principal', icon: 'archive' },
    { title: 'Ficha paciente', url: 'ficha-paciente', icon: 'person' },
    { title: 'Cerrar Sesion', url: 'logout', icon: 'arrow-forward' }

  ];

  constructor() {}
}
