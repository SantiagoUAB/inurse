import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlPacientes: string;

  constructor(private httpClient: HttpClient) {
    this.urlPacientes = 'http://158.109.74.51:55001/patient/';
  }

  getPaciente(idPaciente: string) {
    console.log('id paciente ', idPaciente);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.get(this.urlPacientes + '?dni=' + idPaciente);
  }
}
