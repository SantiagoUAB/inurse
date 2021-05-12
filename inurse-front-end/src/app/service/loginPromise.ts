/*

import { Injectable } from '@angular/core';
import { Headers, HttpClient, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class CustomerService {


  private loginUrl = 'http://127.0.0.1:8000/user/login';
  private headers = new Headers({'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'});


  constructor(private http: HttpClient) { }


  login(details:string): Promise<string>{
    return this.http.post(this.loginUrl, details, {headers:this.headers,withCredentials:true})
      .toPromise().then(this.handleLoginResponse)
      .catch(this.handleError);
  }
  private handleLoginResponse(response: Response): Promise<string>{
    console.log(response);
    return Promise.resolve(response.json());
  }
  private handleError(error: any): Promise<string> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
*/
