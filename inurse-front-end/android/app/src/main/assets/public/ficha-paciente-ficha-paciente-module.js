(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ficha-paciente-ficha-paciente-module"],{

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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button\r\n        text='back'\r\n        icon=\"chevron-back-outline\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ficha Paciente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content >\r\n  <ion-progress-bar [value]=\"this.progress\"  color=\"secondary\"  *ngIf=\"this.progress > 0\"></ion-progress-bar>\r\n  <ion-grid  class=\"ion-padding ion-margin\" >\r\n    <ion-row>\r\n      <ion-col  class=\"ion-padding-vertical\" >\r\n        <ion-title class=\"ion-no-padding ion-text-left\">Datos Paciente</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n      <ion-col  >\r\n        <ion-label  class=\"ion-no-padding \" >{{ this.patient?.lastName  }}, {{ this.patient?.firstName}} </ion-label>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-icon [name]=\"this.patient?.isMale ? 'male-outline' : 'female-outline' \"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n        <ion-col  >\r\n          <ion-row>\r\n            <ion-label>Peso: {{this.patient?.weight}}</ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-label class=\"ion-align-items-start\"> </ion-label>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n        <ion-col >\r\n          <ion-row>\r\n            <ion-label>Altura: {{this.patient?.height}}</ion-label>\r\n          </ion-row>\r\n          <ion-row>\r\n\r\n            <ion-label class=\"ion-align-items-end\"></ion-label>\r\n          </ion-row>\r\n\r\n        </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-padding-top\">\r\n      <ion-col  >\r\n        <ion-title class=\"ion-no-padding ion-text-left \" >Estado actual</ion-title>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col >\r\n\r\n        <ion-item class=\" \">\r\n\r\n          <ion-select value=\"3\" (ionChange)=\"this.onChangeStatus($event)\"  >\r\n            <ion-select-option value=\"0\">Sin estado</ion-select-option>\r\n            <ion-select-option class=\"1\" value=\"1\">En tratamiento</ion-select-option>\r\n            <ion-select-option value=\"2\">En cirugía</ion-select-option>\r\n            <ion-select-option value=\"3\" >Esperando resultados</ion-select-option>\r\n          </ion-select >\r\n        </ion-item>\r\n\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n\r\n    <ion-row class=\"ion-padding-top\">\r\n      <ion-col   >\r\n        <ion-title class=\"ion-no-padding ion-text-left \" >Constantes</ion-title>\r\n      </ion-col>\r\n      <ion-col> <ion-button size=\"small\" [color]=\"this.isUpdateConstant? 'primary': 'light'\"  fill=\"outline\" (click)=\"postFilePatient()\" > <ion-icon name=\"save-outline\"></ion-icon></ion-button></ion-col>\r\n    </ion-row>\r\n    <ion-row >\r\n        <ion-col  >\r\n          <ion-item>\r\n            <ion-label position=\"stacked\" >Tensión (mmHg)</ion-label>\r\n            <ion-input type=\"number\" [placeholder]=\"this.patient?.tension \" (ionChange)=\"onChangeConstants($event.target.id, $event.target.value)\" id=\"tension\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n      <ion-col  >\r\n        <ion-item>\r\n          <ion-label position=\"stacked\">Temperatura (°C)</ion-label>\r\n          <ion-input type=\"number\" [placeholder]=\"this.patient?.temperature \" (ionChange)=\"onChangeConstants($event.target.id, $event.target.value)\" id=\"temperature\"></ion-input>\r\n        </ion-item>\r\n      </ion-col>\r\n\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n\r\n        <ion-col >\r\n          <ion-item>\r\n            <ion-label position=\"stacked\">Frecuencia Cardiaca (lat/min)</ion-label>\r\n            <ion-input type=\"number\" [placeholder]=\"this.patient?.heardRate\" (ionChange)=\"onChangeConstants($event.target.id, $event.target.value)\" id=\"heardRate\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row id=\"title-history\">\r\n      <ion-col   >\r\n        <ion-title class=\"ion-no-padding ion-text-left\">Historial</ion-title>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button size=\"small\" color=\"primary\"  fill=\"outline\" (click)=addVisitaPaciente()>\r\n          <ion-icon  name=\"add-circle-outline\" class=\"button-add\"  ></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-row>\r\n          <ion-col >\r\n            <ion-infinite-scroll  >\r\n              <ion-item *ngFor=\"let visit of this.historical?.visits\" (click)=verVisitaPaciente(visit.id) >\r\n<!--                <ion-label> {{visit.createdTimestamp}} </ion-label>-->\r\n<!--                <ion-label> {{visit.nurse}} </ion-label>-->\r\n                <ion-label> {{visit.data.getDate() }}/{{visit.data.getMonth()}}/{{visit.data.getFullYear()}} </ion-label>\r\n                <ion-label class=\"ion-text-wrap\"> {{visit.treatment}} </ion-label>\r\n\r\n\r\n\r\n              </ion-item>\r\n\r\n            </ion-infinite-scroll>\r\n\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".button-add {\n  font-size: 200%;\n}\n\n.list-status {\n  display: flex;\n  flex-direction: row;\n}\n\n.list-status, ion-icon {\n  font-size: 150%;\n}\n\nion-label {\n  white-space: normal !important;\n  transform: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZpY2hhLXBhY2llbnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGVBQUE7QUFKRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUxGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7RUFDQSwwQkFBQTtBQUpGIiwiZmlsZSI6ImZpY2hhLXBhY2llbnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWctcGF0aWVudCAsICNpbWctcGF0aWVudCBpb24taWNvbntcclxuICAvL3dpZHRoOiA3cmVtO1xyXG4gIC8vaGVpZ2h0OiA3cmVtO1xyXG59XHJcblxyXG4uYnV0dG9uLWFkZHtcclxuICBmb250LXNpemU6IDIwMCU7XHJcbn1cclxuXHJcblxyXG4ubGlzdC1zdGF0dXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5saXN0LXN0YXR1cyAsIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDE1MCU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");











let FichaPacientePage = class FichaPacientePage {
    constructor(pacienteService, historicalService, auth, router) {
        this.pacienteService = pacienteService;
        this.historicalService = historicalService;
        this.auth = auth;
        this.router = router;
        this.progress = 0;
        this.isUpdateConstant = false;
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
    addVisitaPaciente() {
        this.router.navigate(['/add-visita']);
    }
    add() {
    }
    onChangeStatus($event) {
        console.log('valor evento', $event.target.value);
        this.patient.setCurrentStatus($event.target.value);
        this.postFilePatient();
    }
    onChangeConstants(idElement, newValue) {
        // console.log('valor de id' , idElement);
        // console.log('valor de constante cambiada', newValue);
        this.isUpdateConstant = true;
        switch (idElement) {
            case 'tension':
                this.patient.setTension(newValue);
                break;
            case 'temperature':
                this.patient.setTemperature(newValue);
                break;
            case 'heardRate':
                this.patient.setHeardRate(newValue);
                break;
        }
        // console.log(this.patient);
    }
    postFilePatient() {
        this.pacienteService.saveFilePatient(this.patient).subscribe((event) => {
            switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Sent:
                    console.log('Request send');
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].ResponseHeader:
                    console.log('Response header has ben received!', event.headers);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress:
                    this.progress = Math.round(event.loaded / event.total * 100);
                    console.log(`Progress ... ${this.progress} %`);
                    break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response:
                    console.log('Paciente actualizado', event.body);
                    setTimeout(() => {
                        this.progress = 0;
                    }, 1500);
            }
        });
    }
};
FichaPacientePage.ctorParameters = () => [
    { type: _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"] },
    { type: _service_historical_service__WEBPACK_IMPORTED_MODULE_6__["HistoricalService"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }
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