import {Component, OnInit} from '@angular/core';
import {PacientesService} from '../service/pacientes.service';
import {IPatient} from '../models/interface.patient.model';
import {Patient} from '../class/class.patient';


import {HistoricalService} from '../service/historical.service';
import {Historical} from '../class/class.historical';
import {AuthenticationService} from '../service/authentication.service';

import {HttpEvent, HttpEventType, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {ClassGlobalConstants} from '../class/class.globalConstants';
import {AlertController} from '@ionic/angular';
import { Location } from '@angular/common'

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
    public auth: AuthenticationService,
    private router: Router,
    private alertController: AlertController,
    private location: Location) {

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
    console.log('id paciente OnInit',  this.pacienteService.getIdPacient());

    console.log('valor de key is pantalla principal ', this.auth.getLastPage());

    switch (this.auth.getLastPage()){

      case ClassGlobalConstants.MENU_PANTALLA_PRINCIPAL:
        console.log('--------------------------- Vengo de pantalla principal' , this.auth.getLastPage());
        this.setPatient();
        break;
      case ClassGlobalConstants.MENU_FIX_PATIENT:
        console.log('--------------------------- Vengo de FIX PATIENT' , this.auth.getLastPage());
        this.setFixPatient();
        break;
      case ClassGlobalConstants.MENU_LAST_PATIENT:
        console.log('--------------------------- Vengo de LAST PATIENT' , this.auth.getLastPage());
        this.setLastPatient();
        break;
      default:
        console.log('--------------------------- no vengo del menu', this.auth.getLastPage() );
        if (this.pacienteService.getIdPacient()){
          this.idPaciente = this.pacienteService.getIdPacient();
        }else{
          this.showAlert('Error al cargar el paciente');
        }
        break;
    }

    this.getDataPatientFile();
/*
    if (this.auth.getIsPantallaPrincipal() ){

    } else if (this.auth.getIsLastPatient()){

/!*      if (this.pacienteService.getIdPacient()){
        this.idPaciente = this.pacienteService.getIdPacient();
      }else{
        this.showNoPacienteFijado().then(r => {
          console.log(' se ha lanzado el show alert ');
          console.log('en el then obtenemos', r);
        });
      }*!/
    }else{

/!*      if (localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID)){
        console.log('---------------------------tengo paciente fjado', localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID));
        this.idPaciente = Number(localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID));
      }else{
        console.log('--------------------------- NO TENGO paciente fjado y show' );
        this.idPaciente = this.pacienteService.getIdPacient();
        this.showNoPacienteFijado().then(r => {
          console.log(' se ha lanzado el show alert ');
          console.log('en el then obtenemos', r);
        });
      }*!/


    }*/

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

     console.log('valor de id' , idElement, newValue.length);
     // console.log('valor de constante cambiada', newValue);

     this.isUpdateConstant = true;

     switch (idElement) {
      case 'tension':
        this.patient.setTensionNew(newValue);
        break;
      case 'temperature':
        this.patient.setTemperatureNew(newValue);
        break;
      case 'heardRate':
        this.patient.setHeardRateNew(newValue);
        break;
    }
    // console.log(this.patient);
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
          console.log('Paciente actualizado ', event.body);
          setTimeout(() => {
            this.progress = 0;
          }, ClassGlobalConstants.DELAY_PROGRESS_BAR);
      }
    });
  }

  async showAlert(message: string) {
    const confirm = await this.alertController.create({
      header: 'Aviso',
      message,
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            this.location.back();
          }
        }
      ]
    });
    await confirm.present();

  }


  private setPatient() {
    this.idPaciente = this.pacienteService.getIdPacient();
  }

  private setFixPatient() {

    if (localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID)){
      console.log('---------------------------tengo paciente fjado', localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID));
      this.idPaciente = Number(localStorage.getItem(ClassGlobalConstants.KEY_PACIENTE_ID));
    }else{
      console.log('--------------------------- NO TENGO paciente fjado y show aviso de volver' );
      // this.idPaciente = this.pacienteService.getIdPacient();
      this.showAlert('No hay paciente fijado').then(r => {
        console.log(' se ha lanzado el show alert ');
        console.log('en el then obtenemos', r);
      });
    }

  }

  private setLastPatient() {

    if (this.pacienteService.getIdPacient()){
      this.idPaciente = this.pacienteService.getIdPacient();
    }else{
      this.showAlert('Visita algun paciente').then(r => {
        console.log(' se ha lanzado el show alert ');
        console.log('en el then obtenemos', r);
      });
    }

  }
}
