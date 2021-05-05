import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {  }

  login(user: string, pass: string ){
    const postData = { username: user, password: pass };
    return this.http.post('http://158.109.74.51:55001/auth/login/', postData,
      {observe: 'response'})
      .pipe(map( user => {
        console.log(user);
        return user;
      })) ;
  }
}
