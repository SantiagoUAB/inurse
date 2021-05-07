import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlPacientes: string;
  idPatient: any;
  idVisita: any;
  urlVisita: any;

  constructor(private httpClient: HttpClient) {
    this.idPatient = 1;
    this.urlPacientes = 'http://158.109.74.51:55001/patient';
    this.urlVisita = 'http://158.109.74.51:55001/appointment';
  }

  getPacientes(){
    return this.httpClient.get(this.urlPacientes);
  }

  getPaciente(idPaciente: number){

    console.log('id paciente ' , idPaciente);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(this.urlPacientes + '/' + idPaciente + '/');
  }

  getVisita(idVisita: number){

    console.log('id visita ' , idVisita);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(this.urlVisita + '/' + idVisita + '/');
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
}
