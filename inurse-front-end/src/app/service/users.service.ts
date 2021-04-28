import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlPacientes: string;

  constructor(private httpClient: HttpClient) {
    this.urlPacientes = 'http://158.109.74.51:55001/auth/login/';
  }

  getUser(username: string) {
    return this.httpClient.get(this.urlPacientes + '?username=' + username);
  }
}
