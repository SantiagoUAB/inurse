import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {


  constructor(private httpClient: HttpClient) {
  }

  private urlApi = 'http://158.109.74.51:55001/';

  getPlantas() {
    return this.httpClient.get('http://158.109.74.51:55001/floor/');

  }

  getPaciente() {
    return this.httpClient.get('http://158.109.74.51:55001/patient/');

  }

  getRooms(){
    return this.httpClient.get(this.urlApi + 'room');
  }


}
