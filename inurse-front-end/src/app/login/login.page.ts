import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {TokenStorageService} from '../service/token-storage.service';
import {PacientesService} from '../service/pacientes.service';
import {ClassGlobalConstants} from '../class/class.globalConstants';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';


  isLoginFailed = false;
  errorMessage = '';
  public form = {
    dni: null,
    password: null,
  };
  private intervalRefresh: any;
  private i: number;


  constructor(
    public toastController: ToastController,
    private router: Router,
    private httpClient: HttpClient,
    private  auth: AuthenticationService,
    private tokenStorage: TokenStorageService,
    private  pacientesService: PacientesService,
    private alertController: AlertController
  ) { }

  ngOnInit() {

    localStorage.clear();
    if ( this.tokenStorage.getToken()){
      // this.isLoggedIn = true;

      this.tokenStorage.sinOut();
    }
  }
  async proceedLogin() {
    this.setUserDni(this.form.dni);
    if (this.form.dni === null || undefined) {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce el usuario',
        duration: 2000
      });
      toast.present();
    } else if (this.form.password === null || undefined) {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce la contraseña',
        duration: 2000
      });
      toast.present();
    } else {
      // this.sendPostRequest();
      // this.getDataPatientFile();
      // this.loginPromise();
      this.login();
    }

  }
  login(): void {
    const {password, dni} = this.form;
    console.log( 'value form', this.form);
    this.auth.login(this.form.dni, this.form.password).subscribe( data => {

      console.log('login correcto', data);

      this.tokenStorage.saveToken(data.token);
      this.isLoginFailed = false;
      this.correctLogin();
      this.refreshSleep();
      this.router.navigate(['/pantalla-principal/']);
      // this.reloadPage();
    }, error => {
      if (this.isLoginFailed === true) {
        this.errorUserPassword();
      }
      this.errorMessage = error.error.message;
      console.error(this.errorMessage);
      this.isLoginFailed = true;
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
  private loginPromise() {
    console.log('LOGIN PROMISE .ts ficha paciente');
    this.auth.loginPromise('admin', 'admin').then(
      (data: any) => {

        console.log('RESPUESTA EN FICHA PACINETE');
        console.log(data);

        console.log(data.body, ' set data');
        this.auth.setSessionID(data.body);
        this.correctLogin();


        this.toast('he obtenido del servidor ' +  data.body);
        this.toast('he obtenido del servidor ' + this.auth.getSessionID());

        this.router.navigate(['/pantalla-principal/']);
      }
    );
  }

  setUserDni(userDNI) {
    this.pacientesService.setUserDni(userDNI);
  }
  async correctLogin(){
    const toast = await this.toastController.create({
      message: 'Has iniciado sesión correctamente',
      duration: 2000
    });
    toast.present();
  }
  async errorUserPassword() {
    const toast = await this.toastController.create({
      message: 'Usuario o contaseña incorrectos',
      duration: 2000
    });
    toast.present();
  }

  async toast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }


  private refreshSleep() {

    const time = ClassGlobalConstants.REFRESH_MIN * 1000 * 60;
    // const time = 10 * 1000 ; // time en seg
    console.log('refresh login cada', ClassGlobalConstants.REFRESH_MIN, 'min');

    this.intervalRefresh = setInterval(() => {

      this.showAlertRefreshToken().then(r => {
        console.log(' se ha lanzado el show alert ');
        console.log('en el then obtenemos', r);
      });
    }, time);
    // this.timerPrint();
  }

  private timerPrint() {
    this.i = 0;
    setInterval(() => {
      this.i = this.i + 1;
      console.log(' - ', this.i);
    }, 1000);
  }

  async showAlertRefreshToken() {
    const confirm = await this.alertController.create({
      header: 'Refrescar sessión',
      message: '¿Quieres continuar conectado?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            // TODO implementar logout en service
            this.clearIntervalRefresh();
            this.router.navigate(['/login/']);
          }
        },
        {
          text: 'Mantener sessión',
          handler: () => {
            this.auth.refreshToken().subscribe( data => {
              console.log('token refresh' , data );
            });
          }
        }
      ]
    });
    await confirm.present();
  }

  private clearIntervalRefresh() {
    if (this.intervalRefresh) {
      console.log('clear interval');

      clearInterval(this.intervalRefresh);
      console.log('', this.intervalRefresh);
    }
  }
  routerOnActivate(){

  }
}
