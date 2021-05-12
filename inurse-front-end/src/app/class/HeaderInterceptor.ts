import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HaderInterceptor implements HttpInterceptor{

  constructor( public auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('interceptor para add login');
    const authSesionID = this.auth.getSessionID();
    // clone the request and put sessionID
    // const authReq = req.clone({ setHeaders: { Authorization: authSesionID}});
    console.log('Interceptor request', req);
    console.log(localStorage.getItem(AuthenticationService.SESSION_ID));


    const authReq = req.clone({ setHeaders: {
       // Authorization : authSesionID,
      Authorization : 'sessionid=' + authSesionID,
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*'
      }, withCredentials: true}) ;


    // const authReq = req.clone({ setHeaders: { Cookie : 'sessionid=' + authSesionID}});

    return next.handle(authReq);

/*    if (this.auth.getSessionID() === AuthenticationService.NOT_LOG){
      console.log('interceptor para add login');
      // const authSesionID = this.auth.getSessionID();
      // clone the request and put sessionID
      // const authReq = req.clone({ setHeaders: { Authorization: authSesionID}});
      console.log('Interceptor request', req);
      console.log(localStorage.getItem(AuthenticationService.SESSION_ID));


      // const authReq = req.clone({ setHeaders: { Authorization : 'token-santi=486546, sessionid=' + authSesionID}});
      // console.log(next.handle(authReq));
      return next.handle(authReq);
    }else{
      console.log('intercetpor para respuesta');
      return next.handle(req)
        .pipe(
          tap(httpEvent => {
            // skip request
            if (httpEvent.type === 0){

              return;
            }

            // console.log('Interceptor RESPONSE : ', httpEvent);
          })
        );
    }*/


  }


}
