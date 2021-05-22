(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

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
ClassGlobalConstants.API_PATIENT = ClassGlobalConstants.API_BASE + 'patient/';
ClassGlobalConstants.API_FLOOR = ClassGlobalConstants.API_BASE + 'floor/';
ClassGlobalConstants.API_VISITA = ClassGlobalConstants.API_BASE + 'appointment/';


/***/ }),

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _service_token_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../service/token-storage.service */ "mwsN");










let LoginPage = class LoginPage {
    constructor(toastController, router, httpClient, auth, tokenStorage) {
        this.toastController = toastController;
        this.router = router;
        this.httpClient = httpClient;
        this.auth = auth;
        this.tokenStorage = tokenStorage;
        this.username = '';
        this.password = '';
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.form = {
            dni: null,
            password: null,
        };
    }
    ngOnInit() {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.tokenStorage.sinOut();
        }
    }
    proceedLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.form.dni === '') {
                const toast = yield this.toastController.create({
                    message: 'Por favor, introduce el usuario',
                    duration: 2000
                });
                toast.present();
            }
            else if (this.form.password === '') {
                const toast = yield this.toastController.create({
                    message: 'Por favor, introduce la contraseña',
                    duration: 2000
                });
                toast.present();
            }
            // this.sendPostRequest();
            // this.getDataPatientFile();
            // this.loginPromise();
            this.login();
        });
    }
    login() {
        const { password, dni } = this.form;
        console.log('value form', this.form);
        this.auth.login(this.form.dni, this.form.password).subscribe(data => {
            console.log('login correcto', data);
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data.pk);
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.router.navigate(['/pantalla-principal']);
            // this.reloadPage();
        }, error => {
            this.errorMessage = error.error.message;
            console.error(this.errorMessage);
            this.isLoginFailed = true;
        });
    }
    reloadPage() {
        window.location.reload();
    }
    loginPromise() {
        console.log('LOGIN PROMISE .ts ficha paciente');
        this.auth.loginPromise('admin', 'admin').then((data) => {
            console.log('RESPUESTA EN FICHA PACINETE');
            console.log(data);
            console.log(data.body, ' set data');
            this.auth.setSessionID(data.body);
            this.comprovationUser();
            this.toast('he obtenido del servidor ' + data.body);
            this.toast('he obtenido del servidor ' + this.auth.getSessionID());
            this.router.navigate(['/pantalla-principal']);
        });
    }
    sendPostRequest() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const postData = { username: this.username, password: this.password };
            this.httpClient.post('http://158.109.74.51:55001/auth/login/', postData, { observe: 'response' })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                .subscribe(data => {
                console.log(data);
                console.log('login correcto');
                this.comprovationUser();
                this.router.navigate(['/pantalla-principal']);
            }, error => {
                this.errorUserPassword();
                console.log('login incorrecto');
            });
            console.log('read headers');
        });
    }
    /*async getDataPatientFile() {
      this.userService.getUser(this.username).subscribe(data => {
        console.log(data['count']);
        if (data['count'] === 0) {
          this.errorUserPassword();
          return;
        }
        else {
          this.user = new User(data);
          console.log(this.user.username);
          this.comprovationUser();
        }
      });
    }*/
    comprovationUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Has iniciado sesión correctamente',
                duration: 2000
            });
            toast.present();
        });
    }
    errorUserPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Usuario o contaseña incorrectos',
                duration: 2000
            });
            toast.present();
        });
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
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _service_token_storage_service__WEBPACK_IMPORTED_MODULE_9__["TokenStorageService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>INurse</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">DNI</ion-label>\r\n      <ion-input [(ngModel)]=\"this.form.dni\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Contraseña</ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"this.form.password\"></ion-input>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n  <br/>\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" (click)=\"proceedLogin()\" >Iniciar Sesión</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map