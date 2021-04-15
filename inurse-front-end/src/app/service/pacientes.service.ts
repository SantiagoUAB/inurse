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
    this.paciente = 'photos';
    this.limit = 20;
    this.urlPacientes = 'https://jsonplaceholder.typicode.com/';
  }

  getPacientes(){
    return this.httpClient.get(this.urlPacientes + this.paciente);
  }

  getPaciente(idPaciente: number){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/' + this.paciente + '/' + idPaciente);
  }
}
