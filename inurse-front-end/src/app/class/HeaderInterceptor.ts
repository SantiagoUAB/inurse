import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';


export class HaderInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('Interceptor request', req);


/*    req = req.clone({
      withCredentials: true
    });
    console.log('new outgoing request', req);*/

  /*  return next
      .handle(req)
      .do((ev: HttpEvent<any>) => {
        console.log('got an event',ev);
        if (ev instanceof HttpResponse) {
          console.log('event of type response', ev);
        }
      });*/


    // return next.handle(req);

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
