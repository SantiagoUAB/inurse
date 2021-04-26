import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlPacientes: string;
  paciente: string;
  private limit: number;


  constructor(private httpClient: HttpClient) {
    this.paciente = '?inc=name,nat,dob,picture&&nat=ES';
    this.limit = 20;
    // this.urlPacientes = 'https://randomuser.me/api/1.3/';
    this.urlPacientes = 'http://158.109.74.51:55001/patient/';
  }

  getPacientes(){
    return this.httpClient.get(this.urlPacientes + this.paciente);
  }

  getPaciente(idPaciente: string){
    //https://randomuser.me/api/1.3/?inc=name,nat,dob,picture&&nat=ES
    // return this.httpClient.get(this.urlPacientes + this.paciente);
    console.log("id paciente " , idPaciente);
    return this.httpClient.get(this.urlPacientes + "?dni="+ idPaciente);
  }

  private getName(){

  }
}
