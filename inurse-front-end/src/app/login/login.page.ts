import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username = '';
  password = '';
  constructor(
    public toastController: ToastController,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  async proceedLogin() {
    if (this.username === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce el usuario',
        duration: 2000
      });
      toast.present();
    } else if (this.password === '') {
      const toast = await this.toastController.create({
        message: 'Por favor, introduce la contraseña',
        duration: 2000
      });
      toast.present();
    }
    // Validar usuario con la info de la BD
    // Rediregir a la página de Listado Plantas, una vez validado el usuario
  }
}
