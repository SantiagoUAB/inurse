(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visita-visita-module"],{

/***/ "2Dhv":
/*!**************************************!*\
  !*** ./src/app/class/class.visit.ts ***!
  \**************************************/
/*! exports provided: Visit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Visit", function() { return Visit; });
class Visit {
    constructor(data) {
        // console.log('soy el constructor Visita');
        // console.log(data);
        // this.createdTimestamp =  data['created_at'];
        this.data = new Date(data.date);
        this.id = data.id;
        this.patient = data.patient;
        this.treatment = data.treatment;
        // this.nurse =  data['nurse'];
        // this.description =  data['description'];
    }
}


/***/ }),

/***/ "344I":
/*!***************************************!*\
  !*** ./src/app/visita/visita.page.ts ***!
  \***************************************/
/*! exports provided: VisitaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaPage", function() { return VisitaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_visita_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./visita.page.html */ "R3Ra");
/* harmony import */ var _visita_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visita.page.scss */ "oWcY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/pacientes.service */ "ZbvY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _class_class_visit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../class/class.visit */ "2Dhv");
/* harmony import */ var _class_class_patient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../class/class.patient */ "QEr1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pantalla_principal_pantalla_principal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pantalla-principal/pantalla-principal.page */ "qB8f");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _class_classManageHttpClient__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../class/classManageHttpClient */ "1jAD");













let VisitaPage = class VisitaPage {
    constructor(patientSevice, router, httpClient, toastController) {
        this.patientSevice = patientSevice;
        this.router = router;
        this.httpClient = httpClient;
        this.toastController = toastController;
        this.manageErrors = new _class_classManageHttpClient__WEBPACK_IMPORTED_MODULE_12__["ClassManageHttpClient"]();
        this.progress = 0;
    }
    ngOnInit() {
        this.idVisita = this.patientSevice.getIdVisita();
        this.idPaciente = this.patientSevice.getIdPacient();
        this.getVisitaPatientFile();
        this.getDataPatientFile();
        // this.treatmentAux = this.treatment;
    }
    getVisitaPatientFile() {
        this.patientSevice.getVisita(this.idVisita).subscribe(data => {
            console.log('En ficha paciente');
            console.log(data);
            this.visit = new _class_class_visit__WEBPACK_IMPORTED_MODULE_6__["Visit"](data);
            this.treatment = this.visit['treatment'];
            this.treatmentAux = this.visit['treatment'];
        });
    }
    getDataPatientFile() {
        this.patientSevice.getPaciente(this.idPaciente).subscribe(data => {
            console.log('En ficha paciente');
            console.log(data);
            this.patient = new _class_class_patient__WEBPACK_IMPORTED_MODULE_7__["Patient"](data);
            this.pacientName = this.patient['firstName'] + ' ' + this.patient['lastName'];
        });
    }
    confirmVisit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Treatment: ' + this.treatment);
            console.log('TreatmentAux: ' + this.treatmentAux);
            if (this.treatment !== this.treatmentAux) {
                // const postData = { treatment: this.treatment };
                const postData = { date: this.visit['data'], treatment: this.treatment, patient: this.idPaciente };
                console.log('enio la visita', postData);
                this.httpClient.post('http://158.109.74.51:55001/appointment/', postData, {
                    reportProgress: true,
                    observe: 'events'
                })
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["catchError"])(this.manageErrors.errorMgmt))
                    .subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    // console.log(data);
                    switch (event.type) {
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Sent:
                            console.log('Request send');
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].ResponseHeader:
                            console.log('Response header has ben received!', event.headers);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress:
                            this.progress = Math.round(event.loaded / event.total * 100);
                            console.log(`Progress ... ${this.progress} %`);
                            break;
                        case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response:
                            console.log('New Appointment created! ', event.body);
                            setTimeout(() => {
                                this.progress = 0;
                            }, 1500);
                    }
                    // console.log('Visita modificada correctamente');
                    this.correctModification();
                    yield this.goToFichaPaciente();
                }), error => {
                    console.log('No se ha podido modificar la visita');
                });
            }
            else {
                this.errorModification();
                this.goToFichaPaciente();
            }
        });
    }
    goToFichaPaciente() {
        this.router.navigate(['/ficha-paciente'])
            .then(() => {
            window.location.reload();
        });
    }
    correctModification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Cambios aplicados correctamente',
                duration: 2000
            });
            toast.present();
        });
    }
    errorModification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'No se han aplicado cambios',
                duration: 2000
            });
            toast.present();
        });
    }
    progressResponse(event) {
        switch (event.type) {
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Sent:
                console.log('Request send');
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].ResponseHeader:
                console.log('Response header has ben received!', event.headers);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress:
                this.progress = Math.round(event.loaded / event.total * 100);
                console.log(`Progress ... ${this.progress} %`);
                break;
            case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response:
                console.log('New Appointment created! ', event.body);
                setTimeout(() => {
                    this.progress = 0;
                }, 1500);
        }
    }
};
VisitaPage.ctorParameters = () => [
    { type: _service_pacientes_service__WEBPACK_IMPORTED_MODULE_4__["PacientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] }
];
VisitaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        providers: [_pantalla_principal_pantalla_principal_page__WEBPACK_IMPORTED_MODULE_10__["PantallaPrincipalPage"]],
        selector: 'app-visita',
        template: _raw_loader_visita_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_visita_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VisitaPage);



/***/ }),

/***/ "QEr1":
/*!****************************************!*\
  !*** ./src/app/class/class.patient.ts ***!
  \****************************************/
/*! exports provided: Patient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patient", function() { return Patient; });
class Patient {
    constructor(data) {
        console.log('hola soy el constructor paciente');
        // console.log(data);
        this.firstName = data.first_name;
        this.age = data.age;
        this.allergies = data.allergies;
        this.currentStatus = data.current_status;
        this.heardRateActual = data.heart_rate;
        this.dni = data.dni;
        this.height = data.height;
        this.id = data.id;
        this.lastName = data.last_name;
        this.sex = data.sex;
        this.temperatureActual = data.temperature;
        this.tensionActual = data.tension;
        this.weight = data.weight;
        this.roomId = data.room.id;
        this.mapCurrentStatus = new Map();
        this.mapCurrentStatus.set(Patient.STATUS_NONE, '0');
        this.mapCurrentStatus.set(Patient.STATUS_TREATMENT, '1');
        this.mapCurrentStatus.set(Patient.STATUS_IN_SURGERY, '2');
        this.mapCurrentStatus.set(Patient.STATUS_WAITING, '3');
        console.log(this.mapCurrentStatus);
        if (this.sex == 'Man') {
            this.isMale = true;
        }
        else {
            this.isMale = false;
        }
    }
    setTension(value) {
        this.tensionActual = value;
    }
    setTensionNew(value) {
        if (this.tensionActual === value) {
            console.log('same values tension');
        }
        this.tensionNew = value;
    }
    setTemperature(value) {
        if (this.temperatureActual === value) {
            console.log('same values temperature');
        }
        this.temperatureActual = value;
    }
    setHeardRate(value) {
        if (this.heardRateActual === value) {
            console.log('same values heardRate');
        }
        this.heardRateActual = value;
    }
    getTension() {
        return this.tensionActual;
    }
    getTemperature() {
        return this.temperatureActual;
    }
    getHeardRate() {
        return this.heardRateActual;
    }
    getFirstName() {
        return this.firstName;
    }
    initMap() {
        this.mapCurrentStatus = new Map();
        this.mapCurrentStatus.set(Patient.STATUS_NONE, '0');
        this.mapCurrentStatus.set(Patient.STATUS_TREATMENT, '1');
        this.mapCurrentStatus.set(Patient.STATUS_IN_SURGERY, '2');
        this.mapCurrentStatus.set(Patient.STATUS_WAITING, '3');
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getDni() {
        return this.dni;
    }
    getRoom() {
        // TODO mirar donde se carga el valor
        return this.roomId;
    }
    getSex() {
        return this.sex;
    }
    getHeight() {
        return this.height;
    }
    getAllergies() {
        return this.allergies;
    }
    getCurrentStatusText() {
        return this.currentStatus;
    }
    getCurrentStatusNum() {
        return this.mapCurrentStatus.get(this.currentStatus);
    }
    setCurrentStatus(value) {
        switch (value) {
            case '0':
                this.currentStatus = Patient.STATUS_NONE;
                break;
            case '1':
                this.currentStatus = Patient.STATUS_TREATMENT;
                break;
            case '2':
                this.currentStatus = Patient.STATUS_IN_SURGERY;
                break;
            case '3':
                this.currentStatus = Patient.STATUS_WAITING;
                break;
            default:
                this.currentStatus = Patient.STATUS_NONE;
                break;
        }
    }
    getTensionNew() {
        return this.tensionNew;
    }
    getTemperatureNew() {
        return this.temperatureNew;
    }
    getHeardRateNew() {
        return this.heardRateNew;
    }
    setTemperatureNew(newValue) {
        this.tensionNew = newValue;
    }
    setHeardRateNew(newValue) {
        this.heardRateNew = newValue;
    }
}
Patient.STATUS_NONE = '---';
Patient.STATUS_TREATMENT = 'treatment';
Patient.STATUS_WAITING = 'waiting for results';
Patient.STATUS_IN_SURGERY = 'in surgery';


/***/ }),

/***/ "R3Ra":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visita/visita.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <!--      <ion-menu-button></ion-menu-button>-->\r\n      <ion-back-button\r\n        text='back'\r\n        icon=\"chevron-back-outline\">\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Visita</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-progress-bar [value]=\"this.progress\"  color=\"secondary\"  *ngIf=\"this.progress > 0\"></ion-progress-bar>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-card-content>\r\n      <p style=\"color:#566573\">Nombre del paciente:</p>\r\n      <p class=\"ion-text-wrap\"> {{pacientName}} </p>\r\n      </ion-card-content>\r\n    </ion-item>\r\n\r\n  <ion-item>\r\n    <ion-card-content>\r\n      <p style=\"color:#566573\">Informaci??n de la visita:</p>\r\n      <p> {{this.treatment}} </p>\r\n    </ion-card-content>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-item>\r\n    <ion-card-content>\r\n      <p style=\"color:#566573\">Fecha:</p>\r\n      <p class=\"ion-text-wrap\"> {{this.visit?.data.getDate()}}/{{this.visit?.data.getMonth()}}/{{this.visit?.data.getFullYear()}} </p>\r\n    </ion-card-content>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "hQ1k":
/*!*************************************************!*\
  !*** ./src/app/visita/visita-routing.module.ts ***!
  \*************************************************/
/*! exports provided: VisitaPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaPageRoutingModule", function() { return VisitaPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _visita_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visita.page */ "344I");




const routes = [
    {
        path: '',
        component: _visita_page__WEBPACK_IMPORTED_MODULE_3__["VisitaPage"]
    }
];
let VisitaPageRoutingModule = class VisitaPageRoutingModule {
};
VisitaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VisitaPageRoutingModule);



/***/ }),

/***/ "oWcY":
/*!*****************************************!*\
  !*** ./src/app/visita/visita.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdGEucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "x6ly":
/*!*****************************************!*\
  !*** ./src/app/visita/visita.module.ts ***!
  \*****************************************/
/*! exports provided: VisitaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitaPageModule", function() { return VisitaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _visita_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visita-routing.module */ "hQ1k");
/* harmony import */ var _visita_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visita.page */ "344I");







let VisitaPageModule = class VisitaPageModule {
};
VisitaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _visita_routing_module__WEBPACK_IMPORTED_MODULE_5__["VisitaPageRoutingModule"]
        ],
        declarations: [_visita_page__WEBPACK_IMPORTED_MODULE_6__["VisitaPage"]]
    })
], VisitaPageModule);



/***/ })

}]);
//# sourceMappingURL=visita-visita-module.js.map