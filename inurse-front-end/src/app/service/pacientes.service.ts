import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlPacientes: string;
  idPatient: any;

  constructor(private httpClient: HttpClient) {
    this.idPatient = 1;
    this.urlPacientes = 'http://158.109.74.51:55001/patient';
  }

  getPacientes(){
    return this.httpClient.get(this.urlPacientes);
  }

  getPaciente(idPaciente: number){

    console.log('id paciente ' , idPaciente);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(this.urlPacientes + '/' + idPaciente + '/');
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
