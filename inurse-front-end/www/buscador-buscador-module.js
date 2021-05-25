(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscador-buscador-module"],{

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

/***/ "JyDk":
/*!*****************************************************!*\
  !*** ./src/app/buscador/buscador-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BuscadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPageRoutingModule", function() { return BuscadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _buscador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buscador.page */ "5Je2");




const routes = [
    {
        path: '',
        component: _buscador_page__WEBPACK_IMPORTED_MODULE_3__["BuscadorPage"]
    }
];
let BuscadorPageRoutingModule = class BuscadorPageRoutingModule {
};
BuscadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BuscadorPageRoutingModule);



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

/***/ "gEPg":
/*!*********************************************!*\
  !*** ./src/app/buscador/buscador.module.ts ***!
  \*********************************************/
/*! exports provided: BuscadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuscadorPageModule", function() { return BuscadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _buscador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buscador-routing.module */ "JyDk");
/* harmony import */ var _buscador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buscador.page */ "5Je2");







let BuscadorPageModule = class BuscadorPageModule {
};
BuscadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _buscador_routing_module__WEBPACK_IMPORTED_MODULE_5__["BuscadorPageRoutingModule"]
        ],
        declarations: [_buscador_page__WEBPACK_IMPORTED_MODULE_6__["BuscadorPage"]]
    })
], BuscadorPageModule);



/***/ })

}]);
//# sourceMappingURL=buscador-buscador-module.js.map