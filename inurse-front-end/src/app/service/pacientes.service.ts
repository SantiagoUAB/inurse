import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlPacientes: string;
  paciente: string;
  private limit: number;
  private idPaciente: string;

  constructor(private httpClient: HttpClient) {
    this.paciente = '?inc=name,nat,dob,picture&&nat=ES';
    this.limit = 20;
    this.urlPacientes = 'https://randomuser.me/api/1.3/';
  }

  getPacientes(){
    return this.httpClient.get(this.urlPacientes + this.paciente);
  }

  getPaciente(idPaciente: number){
    //https://randomuser.me/api/1.3/?inc=name,nat,dob,picture&&nat=ES
    console.log('Datos paciente')
    const data = this.httpClient.get(this.urlPacientes + this.paciente);
    console.log(data);
    return this.httpClient.get(this.urlPacientes + this.paciente);
  }

  private getName(){

  }
}
