(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["last-patient-last-patient-module"],{

/***/ "+/BJ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/last-patient/last-patient.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button (click)=\"this.auth.setLastPage(this.menuOut)\"></ion-menu-button>\r\n      <ion-back-button (click)=\"this.auth.setLastPage(this.menuOut)\"\r\n                       text='back'\r\n                       icon=\"chevron-back-outline\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Último paciente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen=\"true\">\r\n  <app-ficha-paciente></app-ficha-paciente>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "705x":
/*!*****************************************************!*\
  !*** ./src/app/last-patient/last-patient.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXN0LXBhdGllbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "UwB5":
/*!*************************************************************!*\
  !*** ./src/app/last-patient/last-patient-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LastPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPatientPageRoutingModule", function() { return LastPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _last_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./last-patient.page */ "vka1");




const routes = [
    {
        path: '',
        component: _last_patient_page__WEBPACK_IMPORTED_MODULE_3__["LastPatientPage"]
    }
];
let LastPatientPageRoutingModule = class LastPatientPageRoutingModule {
};
LastPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LastPatientPageRoutingModule);



/***/ }),

/***/ "tKuV":
/*!*****************************************************!*\
  !*** ./src/app/last-patient/last-patient.module.ts ***!
  \*****************************************************/
/*! exports provided: LastPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPatientPageModule", function() { return LastPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _last_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./last-patient-routing.module */ "UwB5");
/* harmony import */ var _last_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./last-patient.page */ "vka1");
/* harmony import */ var _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ficha-paciente/ficha-paciente.module */ "zgqh");








let LastPatientPageModule = class LastPatientPageModule {
};
LastPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _last_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["LastPatientPageRoutingModule"],
            _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__["FichaPacientePageModule"]
        ],
        declarations: [_last_patient_page__WEBPACK_IMPORTED_MODULE_6__["LastPatientPage"]]
    })
], LastPatientPageModule);



/***/ }),

/***/ "vka1":
/*!***************************************************!*\
  !*** ./src/app/last-patient/last-patient.page.ts ***!
  \***************************************************/
/*! exports provided: LastPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastPatientPage", function() { return LastPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_last_patient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./last-patient.page.html */ "+/BJ");
/* harmony import */ var _last_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./last-patient.page.scss */ "705x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");






let LastPatientPage = class LastPatientPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.menuOut = _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__["ClassGlobalConstants"].MENU_OUT_PACIENTE;
    }
};
LastPatientPage.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
LastPatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-last-patient',
        template: _raw_loader_last_patient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_last_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LastPatientPage);



/***/ })

}]);
//# sourceMappingURL=last-patient-last-patient-module.js.map