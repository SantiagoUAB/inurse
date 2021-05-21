import { Component, OnInit } from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';
import {Visit} from '../class/class.visit';
import {Patient} from '../class/class.patient';
import {HttpClient} from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import {FichaPacientePage} from '../ficha-paciente/ficha-paciente.page';
import {PantallaPrincipalPage} from '../pantalla-principal/pantalla-principal.page';

@Component({
  providers: [PantallaPrincipalPage],
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
              public toastController: ToastController,
              public pantallaPrincipal: PantallaPrincipalPage
  ) { }

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
      this.httpClient.post('http://158.109.74.51:55001/appointment/', postData).subscribe(async data => {
        console.log(data);
        console.log('Visita modificada correctamente');
        this.correctModification();
        // this.fichaPaciente.getDataPatientFile();
        // this.fichaPaciente.ngOnInit();
        
        await this.goToFichaPaciente();


      }, error => {
        console.log('No se ha podido modificar la visita');
      });
    }
    else {
      this.errorModification();
      this.goToFichaPaciente();
    }
  }


  private goToFichaPaciente() {
    this.router.navigate(['/ficha-paciente'])
      .then(() => {
        window.location.reload();
      });
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

function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
