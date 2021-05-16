import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const _URL_PACIENTES  = 'http://158.109.74.51:55001/patient';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {


  idPatient: any;

  constructor(private httpClient: HttpClient) {
    this.idPatient = 1;
  }

  getPacientes(){
    return this.httpClient.get(_URL_PACIENTES);
  }

  getPaciente(idPaciente: number){

    console.log('id paciente ' , idPaciente);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(_URL_PACIENTES + '/' + idPaciente + '/');
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
}
