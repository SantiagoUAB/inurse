import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TOKEN_REFRESH = 'refresh_token';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  sinOut(): void {
    window.sessionStorage.clear();
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveTokenRefresh(token: string): void {
    window.sessionStorage.removeItem(TOKEN_REFRESH);
    window.sessionStorage.setItem(TOKEN_REFRESH, token);
  }
  public getRefreshToken() {
    return localStorage.getItem(TOKEN_REFRESH);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public isLogIn(){
    return !!  window.sessionStorage.getItem(TOKEN_KEY);
  }

  public  getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    // return {data : 'no data user'};
    return 'no-user';
  }

}
