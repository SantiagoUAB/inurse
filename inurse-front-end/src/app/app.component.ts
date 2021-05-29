import { Component, OnInit } from '@angular/core';
import { PacientesService } from './service/pacientes.service';
import {ClassGlobalConstants} from './class/class.globalConstants';
import {AuthenticationService} from './service/authentication.service';
import {ToastController} from "@ionic/angular";
import {TokenStorageService} from "./service/token-storage.service";

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
    { title: ClassGlobalConstants.MENU_LOG_OUT, url: 'login', icon: 'arrow-forward' }
  ];
  constructor(private  pacientesService: PacientesService,
              private auth: AuthenticationService,
              public toastController: ToastController,
              private  tokenStorage: TokenStorageService
  ) {}
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
    }else if ( ClassGlobalConstants.MENU_LOG_OUT === optionMenu){
      this.logOut();
    }

  }

  private logOut() {
    this.auth.logOut().subscribe( data => {
      console.log(data);
      console.log('logout correcto');

      this.auth.isLoggedIn = false;
      this.toast('Has cerrado sesión');
      // this.router.navigate(['/login/']);
      this.tokenStorage.sinOut();
    }, error => {
      this.toast('Error al desconocoido');
      error(error);
    });
  }

  async toast(msg: string){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
