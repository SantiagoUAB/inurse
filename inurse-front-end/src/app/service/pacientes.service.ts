import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ClassGlobalConstants} from '../class/class.globalConstants';

const _URL_PACIENTES  = 'http://158.109.74.51:55001/patient';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  idVisita: any;
  idPatient: any;
  urlVisita: any;
  usernameSave: string;

  constructor(private httpClient: HttpClient) {
    this.idPatient = 1;
    this.urlVisita = 'http://158.109.74.51:55001/appointment';
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

  getPacienteName(nombrePaciente: String){
    return this.httpClient.get(ClassGlobalConstants.API_PATIENT + '?Name=' + nombrePaciente);
  }
  getPacienteDni(dniPaciente: String){
     return this.httpClient.get(ClassGlobalConstants.API_PATIENT + '?dni=' + dniPaciente);

    //return this.httpClient.get(ClassGlobalConstants.API_PATIENT  + dniPaciente + '/');
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
