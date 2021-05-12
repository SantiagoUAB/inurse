import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';

@Injectable()
export class HaderInterceptor implements HttpInterceptor{

  constructor( public auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {



    if (this.auth.getSessionID() === AuthenticationService.NOT_LOG){
      const authSesionID = this.auth.getSessionID();
      // clone the request and put sessionID
      // const authReq = req.clone({ setHeaders: { Authorization: authSesionID}});
      console.log('Interceptor request', req);

      const authReq = req.clone({ setHeaders: { Authorization : 'token-santi=486546, sessionid=' + authSesionID}});
      // console.log(next.handle(authReq));
      return next.handle(authReq);
    }else{
      return next.handle(req)
        .pipe(
          tap(httpEvent => {
            // skip request
            if (httpEvent.type === 0){

              return;
            }

            console.log('Interceptor RESPONSE : ', httpEvent);
          })
        );
    }


  }


}
