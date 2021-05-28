import { Component, OnInit } from '@angular/core';
import { PacientesService } from './service/pacientes.service';
import {ClassGlobalConstants} from './class/class.globalConstants';
import {AuthenticationService} from './service/authentication.service';

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
    { title: 'Paciente fijado', url: 'ficha-paciente', icon: 'person' },
    { title: ClassGlobalConstants.MENU_LAST_PATIENT, url: 'ficha-paciente', icon: 'arrow-back' },
    { title: 'Cerrar Sesion', url: 'logout', icon: 'arrow-forward' }
  ];
  constructor(private  pacientesService: PacientesService, private auth: AuthenticationService) {}
  ngOnInit(){
  }


  isLastPatient(optionMenu: string) {

    if (ClassGlobalConstants.MENU_LAST_PATIENT === optionMenu){
      console.log('opcion de menu', optionMenu);
      this.auth.setLastPatient();
    }


  }
}
