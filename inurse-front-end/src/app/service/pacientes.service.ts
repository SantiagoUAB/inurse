import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  urlVisita: string;

  constructor(private httpClient: HttpClient) {
    this.urlVisita = 'http://158.109.74.51:55001/visita/';
  }

  postVisita(data: any) {
    console.log(data);
    // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
    return this.httpClient.post(this.urlVisita + data);
  }

  private getName() {

  }
}
