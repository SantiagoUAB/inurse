import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TokenStorageService} from '../service/token-storage.service';
import {PantallaPrincipalPage} from '../pantalla-principal/pantalla-principal.page';
import {AuthenticationService} from "../service/authentication.service";

@Component({
  providers: [PantallaPrincipalPage],
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(
    public toastController: ToastController,
    private router: Router,
    private httpClient: HttpClient,
    private tokenStorage: TokenStorageService,
    private pantallaPrincipal: PantallaPrincipalPage,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
    this.logout();
    this.pantallaPrincipal.desfijarPaciente();
  }

  logout() {

    const postData = {content: ''};
    this.httpClient.post('http://158.109.74.51:55001/auth/logout/', postData).subscribe(data => {
      console.log(data);
      console.log('logout correcto');

      this.auth.isLoggedIn = false;
      this.comprovationUser();
      this.router.navigate(['/login']);
      this.tokenStorage.sinOut();
    }, error => {
      this.errorUserPassword();

      console.log('logout incorrecto');
      this.router.navigate(['/login']);
      error(error);
    });
  }

  async comprovationUser(){
    const toast = await this.toastController.create({
      message: 'Has cerrado sesión',
      duration: 2000
    });
    toast.present();
  }
  async errorUserPassword() {
    const toast = await this.toastController.create({
      message: 'No has podido cerrar sesión',
      duration: 2000
    });
    toast.present();
  }

}
