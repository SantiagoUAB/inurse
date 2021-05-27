(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/rmJ":
/*!************************************************!*\
  !*** ./src/app/class/class.globalConstants.ts ***!
  \************************************************/
/*! exports provided: ClassGlobalConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassGlobalConstants", function() { return ClassGlobalConstants; });
class ClassGlobalConstants {
}
ClassGlobalConstants.API_BASE = 'http://158.109.74.51:55001/';
// public static API_BASE = 'http://127.0.0.1:8000/';
ClassGlobalConstants.API_LOGIN = ClassGlobalConstants.API_BASE + 'auth/login/';
ClassGlobalConstants.API_REFRESH = ClassGlobalConstants.API_BASE + 'api-token-refresh/';
ClassGlobalConstants.API_PATIENT = ClassGlobalConstants.API_BASE + 'patient/';
ClassGlobalConstants.API_FLOOR = ClassGlobalConstants.API_BASE + 'floor/';
ClassGlobalConstants.API_VISITA = ClassGlobalConstants.API_BASE + 'appointment/';
ClassGlobalConstants.REFRESH_MIN = 10;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\SRP\Git\gitUAB\LISgit\inurse-front-end\inurse-front-end\src\main.ts */"zUnb");


/***/ }),

/***/ "1jAD":
/*!************************************************!*\
  !*** ./src/app/class/classManageHttpClient.ts ***!
  \************************************************/
/*! exports provided: ClassManageHttpClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassManageHttpClient", function() { return ClassManageHttpClient; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

class ClassManageHttpClient {
    constructor() { }
    errorMgmt(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
    }
}


/***/ }),

/***/ "5c5l":
/*!**************************************************!*\
  !*** ./src/app/interceptor/HeaderInterceptor.ts ***!
  \**************************************************/
/*! exports provided: HeaderInterceptor, authInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderInterceptor", function() { return HeaderInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInterceptorProviders", function() { return authInterceptorProviders; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/token-storage.service */ "mwsN");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








const TOKEN_HEADER_KEY = 'Authorization';
let HeaderInterceptor = class HeaderInterceptor {
    constructor(tokenStorageService, authService, router) {
        this.tokenStorageService = tokenStorageService;
        this.authService = authService;
        this.router = router;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.isRefreshing = false;
    }
    intercept(req, next) {
        let authReq = req;
        console.log('INTECEPTOR ', req);
        if (this.tokenStorageService.getToken()) {
            // console.log( 'value tokenStorageService add to header', tokenStorageService);
            authReq = this.addToken(authReq, req);
        }
        return next.handle(authReq)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            console.log('intento lanzar el interceptor para detectar el error ');
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                return this.handle401ErrorReLogin(req, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
            }
        }));
    }
    addToken(authReq, req) {
        authReq = req.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                Authorization: 'Token ' + this.tokenStorageService.getToken(),
            }
        });
        return authReq;
    }
    handle401ErrorReLogin(request, next) {
        this.router.navigate(['/login']);
        return next.handle(request);
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            console.log('entro a refrescar token');
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.authService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((token) => {
                // TODO ver que valor llega en token
                console.log('valor token al refrescar', token);
                this.isRefreshing = false;
                this.refreshTokenSubject.next(token.jwt);
                return next.handle(this.addToken(request, token.token));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(token => token != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(jwt => {
                return next.handle(this.addToken(request, jwt));
            }));
        }
    }
};
HeaderInterceptor.ctorParameters = () => [
    { type: _service_token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
HeaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])()
], HeaderInterceptor);

const authInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"], useClass: HeaderInterceptor, multi: true }
];


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/pacientes.service */ "ZbvY");





let AppComponent = class AppComponent {
    constructor(pacientesService) {
        this.pacientesService = pacientesService;
        this.appPages = [
            { title: 'Pantalla pincipal', url: 'pantalla-principal', icon: 'archive' },
            { title: 'Ficha paciente', url: 'ficha-paciente', icon: 'person' },
            { title: 'Cerrar Sesion', url: 'logout', icon: 'arrow-forward' }
        ];
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        providers: [_service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"]],
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-list-header>iNurse</ion-list-header>\r\n          <ion-note></ion-note>\r\n          <ion-text>Bienvenido, </ion-text>\r\n          <ion-text><strong>{{pacientesService.getUserDni()}}</strong></ion-text>\r\n          <br /> <br /> <br />\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n\r\n\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\" ></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptor_HeaderInterceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptor/HeaderInterceptor */ "5c5l");









let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"], useClass: _interceptor_HeaderInterceptor__WEBPACK_IMPORTED_MODULE_8__["HeaderInterceptor"], multi: true }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZbvY":
/*!**********************************************!*\
  !*** ./src/app/service/pacientes.service.ts ***!
  \**********************************************/
/*! exports provided: PacientesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacientesService", function() { return PacientesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _class_classManageHttpClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/classManageHttpClient */ "1jAD");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token-storage.service */ "mwsN");







const _URL_PACIENTES = 'http://158.109.74.51:55001/patient';
let PacientesService = class PacientesService {
    constructor(httpClient, tokenStorageService) {
        this.httpClient = httpClient;
        this.tokenStorageService = tokenStorageService;
        // this.idPatient = 1;
        this.urlVisita = 'http://158.109.74.51:55001/appointment';
        this.manageErrors = new _class_classManageHttpClient__WEBPACK_IMPORTED_MODULE_5__["ClassManageHttpClient"]();
    }
    getPacientes() {
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_PATIENT);
    }
    getPaciente(idPaciente) {
        console.log('id paciente en servicio ', idPaciente);
        // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_PATIENT + idPaciente + '/');
    }
    getName() {
    }
    setIdPacient(id) {
        // TODO determinar si es un id valido o controlar id correcto
        this.idPatient = id;
    }
    getIdPacient() {
        // TODO error if null
        return this.idPatient;
    }
    setIdVisita(id) {
        // TODO determinar si es un id valido o controlar id correcto
        this.idVisita = id;
    }
    getIdVisita() {
        // TODO error if null
        console.log('get id visita ', this.idVisita);
        return this.idVisita;
    }
    getVisita(idVisita) {
        console.log('id visita ', idVisita);
        // http://158.109.74.51:55001/patient/?format=json&dni=0000000G
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_VISITA + idVisita + '/');
    }
    getPacienteName(nombrePaciente) {
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_PATIENT + '?Name=' + nombrePaciente);
    }
    getPacienteDni(dniPaciente) {
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_PATIENT + '?dni=' + dniPaciente);
        // return this.httpClient.get(ClassGlobalConstants.API_PATIENT  + dniPaciente + '/');
    }
    saveFilePatient(paciente) {
        return this.httpClient.patch(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_PATIENT + this.idPatient + '/', this.createBodyPacient(paciente), { reportProgress: true, observe: 'events' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.manageErrors.errorMgmt));
    }
    createBodyPacient(paciente) {
        return {
            // token : this.tokenStorageService.getToken(),
            first_name: paciente.getFirstName(),
            last_name: paciente.getLastName(),
            dni: paciente.getDni(),
            age: paciente.getAge(),
            room: paciente.getRoom(),
            sex: paciente.getSex(),
            height: paciente.getHeight(),
            allergies: paciente.getAllergies(),
            current_status: paciente.getCurrentStatusText(),
            tension: paciente.getTension(),
            temperature: paciente.getTemperature(),
            heart_rate: paciente.getHeardRate(),
        };
    }
    setUserDni(dni) {
        localStorage.setItem('userDNI', dni);
        this.usernameSave = localStorage.getItem('userDNI');
        this.usernameSave = dni;
    }
    getUserDni() {
        this.usernameSave = localStorage.getItem('userDNI');
        return this.usernameSave;
    }
};
PacientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_6__["TokenStorageService"] }
];
PacientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PacientesService);



/***/ }),

/***/ "bZGi":
/*!***************************************************!*\
  !*** ./src/app/service/authentication.service.ts ***!
  \***************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-storage.service */ "mwsN");
var AuthenticationService_1;






// const URL_AUTH = 'http://158.109.74.51:55001/auth/login/';
const URL_AUTH = 'http://127.0.0.1:8000/';
let AuthenticationService = AuthenticationService_1 = class AuthenticationService {
    constructor(http, tokenService) {
        this.http = http;
        this.tokenService = tokenService;
        this.isLoggedIn = false;
        this.headers = new Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' });
        // this.sessionID = AuthenticationService.NOT_LOG;
        localStorage.setItem(AuthenticationService_1.SESSION_ID, AuthenticationService_1.NOT_LOG);
    }
    isLogIn() {
        return this.tokenService.isLogIn();
    }
    getSessionID() {
        // return this.sessionID;
        const sessionID = localStorage.getItem(AuthenticationService_1.SESSION_ID);
        return sessionID;
    }
    setSessionID(sessionID) {
        console.log('SETEO EL VALOR ==== ' + sessionID);
        localStorage.setItem(AuthenticationService_1.SESSION_ID, sessionID);
    }
    login(user, pass) {
        const postData = { dni: user, password: pass };
        // console.log('post login', postData);
        return this.http.post(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_4__["ClassGlobalConstants"].API_LOGIN, postData)
            .pipe(
        // si es correcto el login, guardo que estoy logeado
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => this.isLoggedIn = true));
    }
    refreshToken() {
        return this.http.post(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_4__["ClassGlobalConstants"].API_REFRESH, { token: this.tokenService.getToken() })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((token) => {
            console.log(' old token  ', this.tokenService.getToken());
            console.log(' refresh token ', token);
            this.tokenService.saveToken(token.token);
        }));
    }
    getRefreshToken() {
        return localStorage.getItem(this.tokenService.getRefreshToken());
    }
    loginPromise(user, pass) {
        const postData = { dni: user, password: pass };
        /*    const headers = new Headers({'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'});*/
        return this.http.post(URL_AUTH + 'auth/login/', postData
        // , httpOptions
        )
            .toPromise()
            .then(this.handleLoginResponse);
        /*    return this.http.post(this.urlLogin, postData, httpOptions)
              .toPromise().then( (res) => {
                this.handleLoginResponse(res);
              });
            */
    }
    handleLoginResponse(response) {
        console.log('handleLoginResponse ---');
        console.log(response);
        return Promise.resolve(response);
    }
    getConfigResponsee() {
        console.log('lanzo get login urlBase');
        return this.http.get(URL_AUTH, { observe: 'response' });
    }
};
AuthenticationService.NOT_LOG = 'no-login';
AuthenticationService.SESSION_ID = 'sessionid';
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] }
];
AuthenticationService = AuthenticationService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/token-storage.service */ "mwsN");






let AuthGuard = class AuthGuard {
    constructor(authService, router, toastController, tokenService) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.tokenService = tokenService;
    }
    canActivate(route, state) {
        console.log('AUTH Guard. Esta LOGEADO?', this.authService.isLogIn());
        const url = state.url;
        return this.checkLogin(url);
        // return !this.authService.isLogIn();
    }
    checkLogin(url) {
        if (this.authService.isLogIn()) {
            return true;
        }
        this.authService.redirectURL = url;
        if (this.tokenService.getToken()) {
            this.toast('La sessión se ha caducado');
        }
        else {
            this.toast('Has de logearte');
        }
        return this.router.parseUrl('/login');
    }
    toast(text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: text,
                duration: 2000
            });
            toast.present();
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _service_token_storage_service__WEBPACK_IMPORTED_MODULE_5__["TokenStorageService"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "mwsN":
/*!**************************************************!*\
  !*** ./src/app/service/token-storage.service.ts ***!
  \**************************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const TOKEN_REFRESH = 'refresh_token';
let TokenStorageService = class TokenStorageService {
    constructor() { }
    sinOut() {
        window.sessionStorage.clear();
    }
    saveToken(token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }
    saveTokenRefresh(token) {
        window.sessionStorage.removeItem(TOKEN_REFRESH);
        window.sessionStorage.setItem(TOKEN_REFRESH, token);
    }
    getRefreshToken() {
        return localStorage.getItem(TOKEN_REFRESH);
    }
    saveUser(user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    getToken() {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }
    isLogIn() {
        return !!window.sessionStorage.getItem(TOKEN_KEY);
    }
    getUser() {
        const user = window.sessionStorage.getItem(USER_KEY);
        if (user) {
            return JSON.parse(user);
        }
        // return {data : 'no data user'};
        return 'no-user';
    }
};
TokenStorageService.ctorParameters = () => [];
TokenStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenStorageService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");




const routes = [
    /*{
      path: '',
      redirectTo: 'folder/Inbox',
      pathMatch: 'full'
    }, */
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | folder-folder-module */ "folder-folder-module").then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule)
    },
    {
        path: 'ficha-paciente',
        loadChildren: () => Promise.all(/*! import() | ficha-paciente-ficha-paciente-module */[__webpack_require__.e("common"), __webpack_require__.e("ficha-paciente-ficha-paciente-module")]).then(__webpack_require__.bind(null, /*! ./ficha-paciente/ficha-paciente.module */ "zgqh")).then(m => m.FichaPacientePageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'pantalla-principal',
        loadChildren: () => Promise.all(/*! import() | pantalla-principal-pantalla-principal-module */[__webpack_require__.e("default~logout-logout-module~pantalla-principal-pantalla-principal-module~visita-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("pantalla-principal-pantalla-principal-module")]).then(__webpack_require__.bind(null, /*! ./pantalla-principal/pantalla-principal.module */ "nWdj")).then(m => m.PantallaPrincipalPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule),
    },
    {
        path: 'logout',
        loadChildren: () => Promise.all(/*! import() | logout-logout-module */[__webpack_require__.e("default~logout-logout-module~pantalla-principal-pantalla-principal-module~visita-visita-module"), __webpack_require__.e("logout-logout-module")]).then(__webpack_require__.bind(null, /*! ./logout/logout.module */ "q6at")).then(m => m.LogoutPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'visita',
        loadChildren: () => Promise.all(/*! import() | visita-visita-module */[__webpack_require__.e("default~logout-logout-module~pantalla-principal-pantalla-principal-module~visita-visita-module"), __webpack_require__.e("common"), __webpack_require__.e("visita-visita-module")]).then(__webpack_require__.bind(null, /*! ./visita/visita.module */ "x6ly")).then(m => m.VisitaPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'buscador',
        loadChildren: () => Promise.all(/*! import() | buscador-buscador-module */[__webpack_require__.e("common"), __webpack_require__.e("buscador-buscador-module")]).then(__webpack_require__.bind(null, /*! ./buscador/buscador.module */ "gEPg")).then(m => m.BuscadorPageModule),
        canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'add-visita',
        loadChildren: () => Promise.all(/*! import() | add-visita-add-visita-module */[__webpack_require__.e("common"), __webpack_require__.e("add-visita-add-visita-module")]).then(__webpack_require__.bind(null, /*! ./add-visita/add-visita.module */ "YDLX")).then(m => m.AddVisitaPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFHQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUdBOztFQUVFLGtCQUFBO0FBQUY7O0FBR0E7RUFDRSwyREFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxzREFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQTtFQUNFLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UsK0JBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUxGOztBQVFBO0VBQ0UsaUNBQUE7QUFMRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xyXG59XHJcblxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xyXG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXHJcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xyXG59XHJcblxyXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xyXG5cclxuICBjb2xvcjogIzc1NzU3NTtcclxuXHJcbiAgbWluLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn1cclxuXHJcbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcclxuICBjb2xvcjogIzYxNmU3ZTtcclxufVxyXG5cclxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XHJcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcclxuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBjb2xvcjogIzczODQ5YTtcclxufVxyXG5cclxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuaW9uLW5vdGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxufVxyXG5cclxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map