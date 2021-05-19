import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {TokenStorageService} from '../service/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  public form = {
    dni: null,
    password: null,
  };

  constructor(
    public toastController: ToastController,
    private router: Router,
    private httpClient: HttpClient,
    private  auth: AuthenticationService,
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    if ( this.tokenStorage.getToken()){
      this.isLoggedIn = true;

      this.tokenStorage.sinOut();
    }
  }
  async proceedLogin() {
    if (this.form.dni === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce el usuario',
        duration: 2000
      });
      toast.present();
    } else if (this.form.password === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce la contraseña',
        duration: 2000
      });
      toast.present();
    }
    // this.sendPostRequest();
    // this.getDataPatientFile();
    // this.loginPromise();
    this.login();
  }
  login(): void {
    const {password, dni} = this.form;
    console.log( 'value form', this.form);
    this.auth.login(this.form.dni, this.form.password).subscribe( data => {

      console.log('login correcto', data);

      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data.pk);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.router.navigate(['/pantalla-principal']);
      // this.reloadPage();
    }, error => {
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
        this.comprovationUser();


        this.toast('he obtenido del servidor ' +  data.body);
        this.toast('he obtenido del servidor ' + this.auth.getSessionID());

        this.router.navigate(['/pantalla-principal']);
      }
    );
  }

  async sendPostRequest() {
    const postData = { username: this.username, password: this.password };
    this.httpClient.post('http://158.109.74.51:55001/auth/login/', postData, {observe: 'response' as 'body'})
      .pipe(first())
      .subscribe(data => {
      console.log(data);
      console.log('login correcto');
      this.comprovationUser();
      this.router.navigate(['/pantalla-principal']);
    }, error => {
      this.errorUserPassword();
      console.log('login incorrecto');
    });

    console.log('read headers');

  }


  /*async getDataPatientFile() {
    this.userService.getUser(this.username).subscribe(data => {
      console.log(data['count']);
      if (data['count'] === 0) {
        this.errorUserPassword();
        return;
      }
      else {
        this.user = new User(data);
        console.log(this.user.username);
        this.comprovationUser();
      }
    });
  }*/
  async comprovationUser(){
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

}
