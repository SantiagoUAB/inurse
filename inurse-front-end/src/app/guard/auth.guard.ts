import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";
import {ToastController} from "@ionic/angular";
import {TokenStorageService} from "../service/token-storage.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthenticationService,
              private  router: Router,
              public toastController: ToastController,
              private tokenService: TokenStorageService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('AUTH Guard. Esta LOGEADO?', this.authService.isLogIn());

    const url: string = state.url;
    return this.checkLogin(url);
    // return !this.authService.isLogIn();
  }

  private checkLogin(url: string) {

    if (this.authService.isLogIn()){
      return true;
    }
    this.authService.redirectURL = url;

    if (this.tokenService.getToken()){
      this.toast('La sessión se ha caducado');
    }else{
      this.toast('Has de logearte');
    }

    return this.router.parseUrl('/login');
  }

  async toast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }
}
