(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fix-patient-fix-patient-module"],{

/***/ "/xO+":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fix-patient/fix-patient.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button (click)=\"this.auth.setLastPage(this.menuOut)\"></ion-menu-button>\r\n      <ion-back-button (click)=\"this.auth.setLastPage(this.menuOut)\"\r\n                       text='back'\r\n                       icon=\"chevron-back-outline\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Paciente Fijado</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n<app-ficha-paciente></app-ficha-paciente>\r\n</ion-content>\r\n");

/***/ }),

/***/ "GNgg":
/*!*************************************************!*\
  !*** ./src/app/fix-patient/fix-patient.page.ts ***!
  \*************************************************/
/*! exports provided: FixPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixPatientPage", function() { return FixPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fix_patient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fix-patient.page.html */ "/xO+");
/* harmony import */ var _fix_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fix-patient.page.scss */ "bOnx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");






let FixPatientPage = class FixPatientPage {
    constructor(auth) {
        this.auth = auth;
        this.menuOut = _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__["ClassGlobalConstants"].MENU_OUT_PACIENTE;
    }
    ngOnInit() {
    }
};
FixPatientPage.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
FixPatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fix-patient',
        template: _raw_loader_fix_patient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fix_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FixPatientPage);



/***/ }),

/***/ "bOnx":
/*!***************************************************!*\
  !*** ./src/app/fix-patient/fix-patient.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXgtcGF0aWVudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "vJVg":
/*!***************************************************!*\
  !*** ./src/app/fix-patient/fix-patient.module.ts ***!
  \***************************************************/
/*! exports provided: FixPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixPatientPageModule", function() { return FixPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fix_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fix-patient-routing.module */ "xPrO");
/* harmony import */ var _fix_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fix-patient.page */ "GNgg");
/* harmony import */ var _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ficha-paciente/ficha-paciente.module */ "zgqh");








let FixPatientPageModule = class FixPatientPageModule {
};
FixPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fix_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["FixPatientPageRoutingModule"],
            _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__["FichaPacientePageModule"]
        ],
        declarations: [_fix_patient_page__WEBPACK_IMPORTED_MODULE_6__["FixPatientPage"]]
    })
], FixPatientPageModule);



/***/ }),

/***/ "xPrO":
/*!***********************************************************!*\
  !*** ./src/app/fix-patient/fix-patient-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FixPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixPatientPageRoutingModule", function() { return FixPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fix_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fix-patient.page */ "GNgg");




const routes = [
    {
        path: '',
        component: _fix_patient_page__WEBPACK_IMPORTED_MODULE_3__["FixPatientPage"]
    }
];
let FixPatientPageRoutingModule = class FixPatientPageRoutingModule {
};
FixPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FixPatientPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=fix-patient-fix-patient-module.js.map