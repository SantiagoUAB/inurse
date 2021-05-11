import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Config} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
    this.urlLogin = 'http://158.109.74.51:55001';
    this.sessionID = AuthenticationService.NOT_LOG;

  }

  public static NOT_LOG = 'no-login';
  urlLogin: string;
  sessionID: string;

  getSessionID(){
    return this.sessionID;
  }
  login(user: string, pass: string ){

    const postData = { dni: user, password: pass };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'

      }),
      withCredentials: true,
      observe: 'response' as 'response'
    };

    return this.http.post<any>('http://158.109.74.51:55001/auth/login/', postData,
      // {observe : 'response' as 'body'})
      httpOptions)
      .pipe(map( user => {
        console.log(user);
        return user;
      })) ;
  }



  getConfigResponsee(): Observable<HttpResponse<any>>{
    console.log('lanzo get login urlBase');

    return this.http.get<any>(this.urlLogin, {observe: 'response'});

  }

 /* loginReadHeader(user: string, pass: string ){
    const postData = { username: user, password: pass };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      // this is required so that Angular returns the Cookies received from the server.
      // The server sends cookies in Set-Cookie header. Without this, Angular will ignore the Set-Cookie header
      withCredentials: true

    };
    return this.http.post(this.urlLogin, postData,  httpOptions)
      .map( response => ){
      console.log('response from backend service', response);
    }
  }*/




}
