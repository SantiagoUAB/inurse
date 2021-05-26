import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HaderInterceptor implements HttpInterceptor{

  constructor( private token: TokenStorageService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;
    const token = this.token.getToken();

    console.log('INTECEPTOR ', req);
    if (token ){
      // console.log( 'value token add to header', token);


      authReq = req.clone({ setHeaders: {
          'Content-Type':  'application/json',
          Authorization : 'Token ' +  token ,

        }}) ;

    }
    return next.handle(authReq);
  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HaderInterceptor, multi: true }
];
