import {
  HTTP_INTERCEPTORS,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, switchMap, take, tap} from 'rxjs/operators';
import {AuthenticationService} from '../service/authentication.service';
import {Injectable} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {Router} from "@angular/router";
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{

  constructor( private tokenStorageService: TokenStorageService,
               private authService: AuthenticationService,
               private  router: Router) { }
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isRefreshing = false;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;

    console.log('INTECEPTOR ', req);
    if (this.tokenStorageService.getToken()){
      // console.log( 'value tokenStorageService add to header', tokenStorageService);
      authReq = this.addToken(authReq, req);
    }

    return next.handle(authReq)
      .pipe(catchError( err => {
        console.log('intento lanzar el interceptor para detectar el error ');
        if (err instanceof  HttpErrorResponse && err.status === 401){
          return this.handle401ErrorReLogin(req, next);
        }else{
          return throwError(err);
        }
      })) ;
  }

  private addToken(authReq: HttpRequest<any>, req: HttpRequest<any>) {
    authReq = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + this.tokenStorageService.getToken(),

      }
    });
    return authReq;
  }

  private handle401ErrorReLogin(request: HttpRequest<any>, next: HttpHandler){
      this.router.navigate(['/login/']);

      return next.handle(request);
  }
  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {

    if (!this.isRefreshing){
      console.log('entro a refrescar token');
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.authService.refreshToken().pipe(
        switchMap((token: any) => {
          // TODO ver que valor llega en token
          console.log('valor token al refrescar', token);
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token.jwt);
          return next.handle(this.addToken(request, token.token));
        }));
    }else{
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        }));
    }
  }
}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
];
