import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Visit} from '../class/class.visit';
import {Historical} from '../class/class.historical';

@Injectable({
  providedIn: 'root'
})
export class HistoricalService {

  constructor(private httpClient: HttpClient) {
    this.urlHistorical = 'http://158.109.74.51:55001/appointment/';
    this.historical = new Historical('');

  }
  urlHistorical: string;
  private historical: Historical;

  getHistocial(){
    // return [...this.historical];
    return this.historical;
  }
  setHistorical(dataHistorical: any){

    this.historical = new Historical(dataHistorical);
  }

  addVisit(visit: Visit){
    console.log('En Historical Service -> se add la visita ', visit);
    // console.log('Historial completo ', this.historical);
    this.historical.add(visit);
  }

  getHistoricalAPI(idPaciente: number){

    return this.httpClient.get(this.urlHistorical + '?patient=' + idPaciente);
  }





}
