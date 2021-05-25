(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ficha-paciente-ficha-paciente-module"],{

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

/***/ "7/2x":
/*!*****************************************************************!*\
  !*** ./src/app/ficha-paciente/ficha-paciente-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: FichaPacientePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPacientePageRoutingModule", function() { return FichaPacientePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ficha_paciente_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ficha-paciente.page */ "sRYn");




const routes = [
    {
        path: '',
        component: _ficha_paciente_page__WEBPACK_IMPORTED_MODULE_3__["FichaPacientePage"]
    }
];
let FichaPacientePageRoutingModule = class FichaPacientePageRoutingModule {
};
FichaPacientePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FichaPacientePageRoutingModule);



/***/ }),

/***/ "AGPV":
/*!***********************************************!*\
  !*** ./src/app/service/historical.service.ts ***!
  \***********************************************/
/*! exports provided: HistoricalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoricalService", function() { return HistoricalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



let HistoricalService = class HistoricalService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlHistorical = 'http://158.109.74.51:55001/appointment/';
    }
    getHistorical(idPaciente) {
        return this.httpClient.get(this.urlHistorical + '?patient=' + idPaciente);
    }
};
HistoricalService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HistoricalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HistoricalService);



/***/ }),

/***/ "LHx6":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ficha-paciente/ficha-paciente.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n<!--      <ion-menu-button></ion-menu-button>-->\r\n      <ion-back-button\r\n        text='back'\r\n        icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ficha Paciente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-grid class=\"ion-align-items-center\"  >\r\n    <!--    TODO mirar como poner offset como en img paciente-->\r\n    <ion-row >\r\n\r\n      <ion-col offset=\"1\"   >\r\n        <ion-avatar id=\"img-patient\">\r\n          <ion-icon [name]=\"this.patient?.isMale ? 'male-outline' : 'female-outline' \"></ion-icon>\r\n        </ion-avatar>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col offset=\"1\" class=\"ion-padding-vertical\" >\r\n        <ion-title class=\"ion-no-padding ion-text-left\" >Datos paciente</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n        <ion-col  offset=\"1\" >\r\n          <ion-row  >\r\n<!--            <ion-label>Nombre</ion-label>-->\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label  >{{ this.patient?.firstName}}</ion-label>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n        <ion-col offset=\"1\">\r\n          <ion-row>\r\n<!--            <ion-label> Peso </ion-label>-->\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label class=\"ion-align-items-start\"> {{this.patient?.weight}}</ion-label>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n        <ion-col offset=\"1\">\r\n          <ion-row>\r\n<!--            <ion-label>Altura</ion-label>-->\r\n          </ion-row>\r\n          <ion-row>\r\n\r\n            <ion-label class=\"ion-align-items-end\">{{this.patient?.height}}</ion-label>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col offset=\"1\"  class=\"ion-padding-vertical\" >\r\n        <ion-title class=\"ion-no-padding ion-text-left\" >Medico a cargo</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n        <ion-col offset=\"1\">\r\n        <ion-label >nombre medico </ion-label>\r\n        </ion-col>\r\n        <ion-col offset=\"1\">\r\n        <ion-label> nombre enfermera </ion-label>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col offset=\"1\" class=\"ion-padding-vertical\">\r\n        <ion-title class=\"ion-no-padding ion-text-left\">Estado actual</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col offset=\"1\"  class=\"ion-padding-vertical\">\r\n\r\n<!--          <ion-icon *ngFor=\"let state of this.patient.status\" name=\"person-circle-outline\" ></ion-icon>-->\r\n        <div class=\"list-status\">\r\n          <ion-icon name=\"person-circle-outline\"  ></ion-icon>\r\n          <ion-icon name=\"person-circle-outline\" ></ion-icon>\r\n          <ion-icon name=\"person-circle-outline\" ></ion-icon>\r\n          <ion-icon name=\"person-circle-outline\" ></ion-icon>\r\n          <ion-button href=\"#\"   size=\"small\"  > <ion-icon name=\"add-circle-outline\" class=\"button-add\" ></ion-icon></ion-button>\r\n        </div>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col offset=\"1\"  >\r\n        <ion-title class=\"ion-no-padding ion-text-left\" >Constantes</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n        <ion-col offset=\"1\" size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"stacked\" >Tensión</ion-label>\r\n            <ion-input type=\"number\" [placeholder]=\"this.patient?.tension ? this.patient?.tension : 'no data'\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col offset=\"1\" size=\"6\">\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Temperatura</ion-label>\r\n          <ion-input type=\"number\" [placeholder]=\"this.patient?.temperature ? this.patient?.tension : 'no data'\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n        <ion-col offset=\"1\" size=\"6\">\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Frecuencia Cardiaca</ion-label>\r\n            <ion-input type=\"number\" [placeholder]=\"this.patient?.heardRate ? this.patient?.tension : 'no data'\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row id=\"title-history\">\r\n      <ion-col offset=\"1\"  size=\"4\" >\r\n        <ion-title class=\"ion-no-padding ion-text-left\">Historial</ion-title>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"7\"  class=\"ion-no-padding \">\r\n        <ion-button class=\"\" href=\"#\"   size=\"small\">\r\n          <ion-icon  name=\"add-circle-outline\" class=\"button-add\" >          </ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col offset=\"1\">\r\n            <ion-infinite-scroll  >\r\n              <ion-item *ngFor=\"let visit of this.historical?.visits\" (click)=verVisitaPaciente(visit.id) >\r\n<!--                <ion-label> {{visit.createdTimestamp}} </ion-label>-->\r\n<!--                <ion-label> {{visit.nurse}} </ion-label>-->\r\n                <ion-label> {{visit.data.getDate() }}/{{visit.data.getMonth()}}/{{visit.data.getFullYear()}} </ion-label>\r\n                <ion-label class=\"ion-text-wrap\"> {{visit.treatment}} </ion-label>\r\n\r\n\r\n\r\n              </ion-item>\r\n\r\n            </ion-infinite-scroll>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

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




const _URL_PACIENTES = 'http://158.109.74.51:55001/patient';
let PacientesService = class PacientesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.idPatient = 1;
        this.urlVisita = 'http://158.109.74.51:55001/appointment';
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
        //return this.httpClient.get(ClassGlobalConstants.API_PATIENT  + dniPaciente + '/');
    }
};
PacientesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PacientesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PacientesService);



/***/ }),

/***/ "eSZ1":
/*!*******************************************!*\
  !*** ./src/app/class/class.historical.ts ***!
  \*******************************************/
/*! exports provided: Historical */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Historical", function() { return Historical; });
/* harmony import */ var _class_visit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.visit */ "2Dhv");

class Historical {
    constructor(data) {
        this.visits = [];
        // console.log('hola soy el constructor historial');
        // console.log(data);
        /*    for (let i = 0; i < data.results.length; i++){
              // console.log(data['results'][i]['nurse']);
              // console.log(data['results'][i]['created_at']);
              // console.log(data['results'][i]['description']);
        
              this.visits.push( new Visit( data.results[i]));
        
            }*/
        for (const visit of data.results) {
            if (visit) {
                // console.log(visit);
                this.visits.push(new _class_visit__WEBPACK_IMPORTED_MODULE_0__["Visit"](visit));
            }
        }
    }
}


/***/ }),

/***/ "fBDT":
/*!*********************************************************!*\
  !*** ./src/app/ficha-paciente/ficha-paciente.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#img-patient, #img-patient ion-icon {\n  width: 7rem;\n  height: 7rem;\n}\n\n.button-add {\n  font-size: 200%;\n}\n\n.list-status {\n  display: flex;\n  flex-direction: row;\n}\n\n.list-status, ion-icon {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZpY2hhLXBhY2llbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJmaWNoYS1wYWNpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaW1nLXBhdGllbnQgLCAjaW1nLXBhdGllbnQgaW9uLWljb257XHJcbiAgd2lkdGg6IDdyZW07XHJcbiAgaGVpZ2h0OiA3cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWFkZHtcclxuICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcblxyXG4ubGlzdC1zdGF0dXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5saXN0LXN0YXR1cyAsIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "sRYn":
/*!*******************************************************!*\
  !*** ./src/app/ficha-paciente/ficha-paciente.page.ts ***!
  \*******************************************************/
/*! exports provided: FichaPacientePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPacientePage", function() { return FichaPacientePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ficha_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ficha-paciente.page.html */ "LHx6");
/* harmony import */ var _ficha_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ficha-paciente.page.scss */ "fBDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/pacientes.service */ "ZbvY");
/* harmony import */ var _class_class_patient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/class.patient */ "QEr1");
/* harmony import */ var _service_historical_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/historical.service */ "AGPV");
/* harmony import */ var _class_class_historical__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../class/class.historical */ "eSZ1");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");










let FichaPacientePage = class FichaPacientePage {
    constructor(pacienteService, historicalService, auth, router) {
        this.pacienteService = pacienteService;
        this.historicalService = historicalService;
        this.auth = auth;
        this.router = router;
        this.idPaciente = 1; // paciente por defecto
    }
    loginPromise() {
        console.log('LOGIN PROMISE .ts ficha paciente');
        this.auth.loginPromise('admin', 'admin').then((data) => {
            console.log('RESPUESTA EN FICHA PACINETE');
            console.log(data);
            console.log(data.body);
            this.auth.setSessionID(data.body.cookie);
        });
    }
    ngOnInit() {
        console.log('id paciente', this.pacienteService.getIdPacient());
        this.idPaciente = this.pacienteService.getIdPacient();
        this.getDataPatientFile();
    }
    getDataPatientFile() {
        this.pacienteService.getPaciente(this.idPaciente).subscribe(data => {
            console.log('En ficha paciente');
            console.log(data);
            this.patient = new _class_class_patient__WEBPACK_IMPORTED_MODULE_5__["Patient"](data);
            this.getDataPatientHistorical(this.patient.id);
        });
    }
    getDataPatientHistorical(idPatient) {
        this.historicalService.getHistorical(idPatient).subscribe(data => {
            console.log('Historial paciente ', idPatient);
            console.log(data);
            this.historical = new _class_class_historical__WEBPACK_IMPORTED_MODULE_7__["Historical"](data);
        });
    }
    verVisitaPaciente(id) {
        console.log('ir a la visita con ID', id);
        this.pacienteService.setIdVisita(id);
        this.router.navigate(['/visita']);
    }
    add() {
    }
};
FichaPacientePage.ctorParameters = () => [
    { type: _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"] },
    { type: _service_historical_service__WEBPACK_IMPORTED_MODULE_6__["HistoricalService"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }
];
FichaPacientePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ficha-paciente',
        template: _raw_loader_ficha_paciente_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ficha_paciente_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FichaPacientePage);



/***/ }),

/***/ "zgqh":
/*!*********************************************************!*\
  !*** ./src/app/ficha-paciente/ficha-paciente.module.ts ***!
  \*********************************************************/
/*! exports provided: FichaPacientePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FichaPacientePageModule", function() { return FichaPacientePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ficha_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ficha-paciente-routing.module */ "7/2x");
/* harmony import */ var _ficha_paciente_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ficha-paciente.page */ "sRYn");







let FichaPacientePageModule = class FichaPacientePageModule {
};
FichaPacientePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ficha_paciente_routing_module__WEBPACK_IMPORTED_MODULE_5__["FichaPacientePageRoutingModule"]
        ],
        declarations: [_ficha_paciente_page__WEBPACK_IMPORTED_MODULE_6__["FichaPacientePage"]]
    })
], FichaPacientePageModule);



/***/ })

}]);
//# sourceMappingURL=ficha-paciente-ficha-paciente-module.js.map