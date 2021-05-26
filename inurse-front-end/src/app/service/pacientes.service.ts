import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClassGlobalConstants} from '../class/class.globalConstants';
import {Patient} from '../class/class.patient';
import {catchError} from 'rxjs/operators';
import {ClassManageHttpClient} from '../class/classManageHttpClient';
import {TokenStorageService} from './token-storage.service';

const _URL_PACIENTES  = 'http://158.109.74.51:55001/patient';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  idVisita: any;
  idPatient: any;
  urlVisita: any;
  usernameSave: string;
  private manageErrors: ClassManageHttpClient;

  constructor(private httpClient: HttpClient, private tokenStorageService: TokenStorageService) {
    // this.idPatient = 1;
    this.urlVisita = 'http://158.109.74.51:55001/appointment';
    this.manageErrors = new ClassManageHttpClient();
  }

  getPacientes(){
    return this.httpClient.get(ClassGlobalConstants.API_PATIENT);
  }

  getPaciente(idPaciente: number){

    console.log('id paciente en servicio ' , idPaciente);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(ClassGlobalConstants.API_PATIENT + idPaciente + '/');
  }

  private getName(){

  }

  setIdPacient(id: any){
    // TODO determinar si es un id valido o controlar id correcto
    this.idPatient = id;
  }
  getIdPacient(){
    // TODO error if null
    return  this.idPatient;
  }
  setIdVisita(id: any){
    // TODO determinar si es un id valido o controlar id correcto
    this.idVisita = id;
  }
  getIdVisita(){
    // TODO error if null
    console.log('get id visita ' , this.idVisita);
    return  this.idVisita;
  }
  getVisita(idVisita: number){

    console.log('id visita ' , idVisita);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(ClassGlobalConstants.API_VISITA  + idVisita + '/');
  }

  getPacienteName(nombrePaciente: string){
    return this.httpClient.get(ClassGlobalConstants.API_PATIENT + '?Name=' + nombrePaciente);
  }
  getPacienteDni(dniPaciente: string){
     return this.httpClient.get(ClassGlobalConstants.API_PATIENT + '?dni=' + dniPaciente);

    // return this.httpClient.get(ClassGlobalConstants.API_PATIENT  + dniPaciente + '/');
   }

  changeStatus(value: any) {

    return this.httpClient.post(ClassGlobalConstants.API_PATIENT + this.idPatient + '/change/', {current_status: value});

  }

  saveFilePatient(paciente: Patient) {
    return this.httpClient.post(ClassGlobalConstants.API_PATIENT + this.idPatient + '/change/',
      this.createBodyPacient(paciente),
      {reportProgress: true, observe: 'events'})
      .pipe( catchError(this.manageErrors.errorMgmt));
  }

  private createBodyPacient(paciente: Patient) {
    return {
      // token : this.tokenStorageService.getToken(),
      first_name: paciente.getFirstName(),
      last_name: paciente.getLastName(),
      dni: paciente.getDni(),
      age: paciente.getAge(),
      room: paciente.getRoom(),
      sex: paciente.getSex(),
      height: paciente.getHeight(),
      allergies: paciente.getAllergies(),
      current_status: paciente.getCurrentStatus(),
      tension: paciente.getTension(),
      temperature: paciente.getTemperature(),
      heart_rate: paciente.getHeardRate(),
      _save: 'Save'

    };
  }

  setUserDni(dni: string){
    localStorage.setItem('userDNI', dni);
    this.usernameSave = localStorage.getItem('userDNI');
    this.usernameSave = dni;
  }

  getUserDni() {
    this.usernameSave = localStorage.getItem('userDNI');
    return this.usernameSave;
  }
}
