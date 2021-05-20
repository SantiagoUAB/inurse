import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';
import {Visit} from '../class/class.visit';
import {Patient} from '../class/class.patient';
import {HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.page.html',
  styleUrls: ['./visita.page.scss'],
})
export class VisitaPage implements OnInit {
  patient: Patient;
  visit: Visit;
  private idVisita: number;
  private idPaciente: number;
  pacientName: string;
  username: string;
  treatment: string;
  treatmentAux: string;

  constructor(private patientSevice: PacientesService,
              private router: Router,
              private httpClient: HttpClient,
              public toastController: ToastController) { }

  ngOnInit() {
    this.idVisita = this.patientSevice.getIdVisita();
    this.idPaciente = this.patientSevice.getIdPacient();
    this.getVisitaPatientFile();
    this.getDataPatientFile();
    // this.treatmentAux = this.treatment;
  }

  private getVisitaPatientFile() {
    this.patientSevice.getVisita(this.idVisita).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.visit = new Visit(data);
      this.treatment = this.visit['treatment'];
      this.treatmentAux = this.visit['treatment'];
    });
  }

  private getDataPatientFile() {
    this.patientSevice.getPaciente(this.idPaciente).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);
      this.pacientName = this.patient['firstName'] + ' ' + this.patient['lastName'];
    });
  }

  async confirmVisit() {
    console.log('Treatment: ' + this.treatment);
    console.log('TreatmentAux: ' + this.treatmentAux);
    if (this.treatment !== this.treatmentAux) {
      // const postData = { treatment: this.treatment };
      const postData = { date: this.visit['data'], treatment: this.treatment, patient: '1' };
      console.log(postData);
      this.httpClient.post('http://158.109.74.51:55001/appointment/', postData).subscribe(data => {
        console.log(data);
        console.log('Visita modificada correctamente');
        this.correctModification();
        this.router.navigate(['/ficha-paciente']);
      }, error => {
        console.log('No se ha podido modificar la visita');
      });
    }
    else {
      this.errorModification();
      this.router.navigate(['/ficha-paciente']);
    }
  }
  async correctModification() {
    const toast = await this.toastController.create({
      message: 'Cambios aplicados correctamente',
      duration: 2000
    });
    toast.present();
  }
  async errorModification() {
    const toast = await this.toastController.create({
      message: 'No se han aplicado cambios',
      duration: 2000
    });
    toast.present();
  }

}
