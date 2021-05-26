import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {Router} from '@angular/router';
import {Visit} from '../class/class.visit';
import {Patient} from '../class/class.patient';
import {HttpClient, HttpEvent, HttpEventType} from '@angular/common/http';
import {ToastController} from '@ionic/angular';
import {PantallaPrincipalPage} from '../pantalla-principal/pantalla-principal.page';
import {catchError} from 'rxjs/operators';
import {ClassManageHttpClient} from '../class/classManageHttpClient';

@Component({
  selector: 'app-add-visita',
  templateUrl: './add-visita.page.html',
  styleUrls: ['./add-visita.page.scss'],
})
export class AddVisitaPage implements OnInit {
  patient: Patient;
  visit: Visit;
  private idVisita: number;
  private idPaciente: number;
  pacientName: string;
  username: string;
  treatment: string;
  treatmentAux: string;
  currentDate: Date;

  manageErrors: ClassManageHttpClient;
  progress: number;

  constructor(private patientSevice: PacientesService,
              private router: Router,
              private httpClient: HttpClient,
              public toastController: ToastController

  ) {
    this.manageErrors = new ClassManageHttpClient();
    this.progress = 0;
  }

  ngOnInit() {
    this.idVisita = this.patientSevice.getIdVisita();
    this.idPaciente = this.patientSevice.getIdPacient();
    // this.getVisitaPatientFile();
    this.getDataPatientFile();
    this.currentDate = new Date();
    console.log('Data actual: ' + this.currentDate);
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
    if (true)     {
      // const postData = { treatment: this.treatment };
      const postData = { date: this.currentDate, nurse: 2 ,  treatment: this.treatment, patient: this.idPaciente };

      this.httpClient.post('http://158.109.74.51:55001/appointment/', postData, {
        reportProgress: true,
        observe: 'events'})
        .pipe(
          catchError(this.manageErrors.errorMgmt)
        )
        .subscribe(async (event: HttpEvent<any>) => {
          // console.log(data);
          console.log('enio la visita', postData);
          switch (event.type){
            case HttpEventType.Sent:
              console.log('Request send');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has ben received!', event.headers);
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Progress ... ${this.progress} %`);
              break;
            case HttpEventType.Response:
              console.log('New Appointment created! ', event.body);
              await this.goToFichaPaciente();

              setTimeout(() => {
                this.progress = 0;
              }, 1500);
          }
          // console.log('Visita modificada correctamente');



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
    this.router.navigate(['/pantalla-principal'])
      .then(() => {
        window.location.reload();
        this.correctModification();
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

  private progressResponse( event: HttpEvent<any>) {
    switch (event.type){
      case HttpEventType.Sent:
        console.log('Request send');
        break;
      case HttpEventType.ResponseHeader:
        console.log('Response header has ben received!', event.headers);
        break;
      case HttpEventType.UploadProgress:
        this.progress = Math.round(event.loaded / event.total * 100);
        console.log(`Progress ... ${this.progress} %`);
        break;
      case HttpEventType.Response:
        console.log('New Appointment created! ', event.body);
        setTimeout(() => {
          this.progress = 0;
        }, 1500);
    }
  }
}
