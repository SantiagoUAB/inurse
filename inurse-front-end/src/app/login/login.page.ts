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
    // Validar usuario con la info de la BD
    // Rediregir a la página de Listado Plantas, una vez validado el usuario
  }

  private getDataPatientFile() {
    this.pacienteService.getPaciente(this.username).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);
      console.log(this.patient.dni);
      this.comprovationUser();
    });
  }
  private comprovationUser() {
    if(this.patient.dni === this.username){
      console.log("Tot be, has iniciat sessio correctament");
      //this.router.navigate(['/pantalla-principal']);
    }
  }
}
