import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {
  


  constructor(private httpClient: HttpClient) {}
  getPlantas(){; 
  return this.httpClient.get("http://158.109.74.51:55001/floor/");

}
private urlPaciente="http://158.109.74.51:55001/patient/";

getPaciente(){
  return this.httpClient.get("http://158.109.74.51:55001/patient/")
 
}

  
}
