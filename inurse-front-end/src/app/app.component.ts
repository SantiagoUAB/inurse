import { Component, OnInit } from '@angular/core';
import { PacientesService } from './service/pacientes.service';

@Component({
  providers: [PacientesService],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  userDni: string;
  public appPages = [
    { title: 'Lista pacientes', url: 'pantalla-principal', icon: 'archive' },
    { title: 'Ficha paciente', url: 'ficha-paciente', icon: 'person' },
    { title: 'Cerrar Sesion', url: 'logout', icon: 'arrow-forward' }
  ];
  constructor(private  pacientesService: PacientesService) {}
  ngOnInit(){
  }
}
