import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import {Patient} from '../class/class.patient';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  patient: Patient;
  username = '';
  password = '';
  constructor(
    public toastController: ToastController,
    private router: Router,
    private pacienteService: PacientesService,
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
    this.getDataPatientFile();
  }

  async getDataPatientFile() {
    this.pacienteService.getPaciente(this.username).subscribe(data => {
      console.log(data['count']);
      if (data['count'] === 0) {
        this.errorUserPassword();
        return;
      }
      else {
        this.patient = new Patient(data);
        console.log(this.patient.dni);
        this.comprovationUser();
      }
    });
  }
  async comprovationUser(){
    if (this.patient.dni === this.username){
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
}
