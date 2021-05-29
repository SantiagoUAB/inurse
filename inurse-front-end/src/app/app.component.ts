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
    { title: ClassGlobalConstants.MENU_PANTALLA_PRINCIPAL, url: 'pantalla-principal', icon: 'archive' },
    { title: ClassGlobalConstants.MENU_FIX_PATIENT, url: 'fix-patient', icon: 'person' },
    { title: ClassGlobalConstants.MENU_LAST_PATIENT, url: 'last-patient', icon: 'arrow-back' },
    { title: 'Cerrar Sesion', url: 'logout', icon: 'arrow-forward' }
  ];
  constructor(private  pacientesService: PacientesService, private auth: AuthenticationService) {}
  ngOnInit(){
  }


  isLastPatient(optionMenu: string) {

    if (ClassGlobalConstants.MENU_LAST_PATIENT === optionMenu){
      console.log('opcion de menu', optionMenu);
      // this.auth.inLastPatient();
      this.auth.setLastPage(optionMenu);
    }else if (ClassGlobalConstants.MENU_FIX_PATIENT === optionMenu){
      console.log('option menu' , optionMenu);
      this.auth.setLastPage(optionMenu);
    }


  }
}
