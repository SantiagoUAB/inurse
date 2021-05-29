import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Historical} from "../class/class.historical";
import {Visit} from "../class/class.visit";

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {
  urlHistorical: string;
  private idPaciente: number;
  historical: Historical;
  constructor(private httpClient: HttpClient) {
    this.urlHistorical = 'http://158.109.74.51:55001/appointment/';
  }

  getHistoricalAPI(idPaciente: number){

    return this.httpClient.get(this.urlHistorical + '?patient=' + idPaciente);
  }

  setHistorical(historical: any){
    this.historical = new Historical( historical);
  }
  getHistorical(){
    return this.historical;
  }

  addVisit(visita: Visit){
    this.historical.addVisit(visita);

  }
}
