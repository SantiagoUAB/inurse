import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { User } from '../class/class.user';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: User;
  username = '';
  password = '';
  constructor(
    public toastController: ToastController,
    private router: Router,
    private userService: UsersService,
    private httpClient: HttpClient
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
    this.sendPostRequest();
    // this.getDataPatientFile();
  }

  async sendPostRequest() {
    const postData = { username: this.username, password: this.password };
    this.httpClient.post('http://158.109.74.51:55001/auth/login/', postData).subscribe(data => {
      console.log(data);
      console.log('login correcto');
      // this.router.navigate(['/pantalla-principal']);
    }, error => {
      console.log('login incorrecto');
    });
  }

  /*
  async getDataPatientFile() {
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
  }
  async comprovationUser(){
    if (this.user.username === this.username){
      console.log('Tot be, has iniciat sessio correctament');
      const toast = await this.toastController.create({
        message: 'Has iniciado sesión correctamente',
        duration: 2000
      });
      toast.present();
      // this.router.navigate(['/pantalla-principal']);
    }
  }
  async errorUserPassword() {
    const toast = await this.toastController.create({
      message: 'Usuario o contaseña incorrectos',
      duration: 2000
    });
    toast.present();
  }
  */
}
