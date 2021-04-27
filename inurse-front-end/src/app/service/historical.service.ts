import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {
  urlHistorical: string;
  constructor(private httpClient: HttpClient) {
    this.urlHistorical = 'http://158.109.74.51:55001/historical';
  }

  getHistorical(idPaciente: number){

    return this.httpClient.get(this.urlHistorical +'/?patient=' + idPaciente);
  }
}
