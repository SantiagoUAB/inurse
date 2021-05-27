import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {IPatient} from '../models/interface.patient.model';
import {Patient} from '../class/class.patient';

import {fakeAsync} from '@angular/core/testing';
import {HistoricalService} from '../service/historical.service';
import {Historical} from '../class/class.historical';
import {AuthenticationService} from '../service/authentication.service';
import {first} from 'rxjs/operators';
import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.page.html',
  styleUrls: ['./ficha-paciente.page.scss'],
})
export class FichaPacientePage implements OnInit {
  patient: Patient;
  historical: Historical;
  private idPaciente: number;
  headers: string[];
  progress: number;
  isUpdateConstant: boolean;



  constructor(
    private pacienteService: PacientesService,
    private  historicalService: HistoricalService,
    private  auth: AuthenticationService,
    private router: Router) {

    this.progress = 0;
    this.isUpdateConstant = false;


  }

  private loginPromise() {
    console.log('LOGIN PROMISE .ts ficha paciente');
    this.auth.loginPromise('admin', 'admin').then(
      (data: any) => {

        console.log('RESPUESTA EN FICHA PACINETE');
        console.log(data);

        console.log(data.body);
        this.auth.setSessionID(data.body.cookie);


      }
    );
  }

  ngOnInit() {
    console.log('id paciente',  this.pacienteService.getIdPacient());
    this.idPaciente = this.pacienteService.getIdPacient();

    this.getDataPatientFile();
  }


  public getDataPatientFile() {
    this.pacienteService.getPaciente(this.idPaciente).subscribe(data => {
      console.log('En ficha paciente');
      console.log(data);
      this.patient = new Patient(data);
      this.getDataPatientHistorical(this.patient.id);

    });
  }

  private getDataPatientHistorical(idPatient: number) {
    this.historicalService.getHistorical(idPatient).subscribe(data => {
      console.log('Historial paciente ', idPatient);
      console.log(data);
      this.historical = new Historical( data);

    });
  }

  verVisitaPaciente( id: any){
    console.log('ir a la visita con ID', id);
    this.pacienteService.setIdVisita(id);
    this.router.navigate(['/visita']);
  }
  addVisitaPaciente() {
    this.router.navigate(['/add-visita']);
  }

  add() {

  }

  onChangeStatus($event: any) {
    console.log('valor evento', $event.target.value);

    this.patient.setCurrentStatus( $event.target.value);
    this.postFilePatient();

  }

  onChangeConstants(idElement: string, newValue: string) {

    // console.log('valor de id' , idElement);
    // console.log('valor de constante cambiada', newValue);
    this.isUpdateConstant = true;
    switch (idElement) {
      case 'tension':
        this.patient.setTension(newValue);
        break;
      case 'temperature':
        this.patient.setTemperature(newValue);
        break;
      case 'heardRate':
        this.patient.setHeardRate(newValue);
        break;
    }
    console.log(this.patient);
  }

  postFilePatient() {
    this.pacienteService.saveFilePatient(this.patient).subscribe((event: HttpEvent<any>) => {

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
    });


  }
}
