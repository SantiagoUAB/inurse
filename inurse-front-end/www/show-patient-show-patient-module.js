(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["show-patient-show-patient-module"],{

/***/ "+E45":
/*!*************************************************************!*\
  !*** ./src/app/show-patient/show-patient-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ShowPatientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPatientPageRoutingModule", function() { return ShowPatientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _show_patient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-patient.page */ "iizo");




const routes = [
    {
        path: '',
        component: _show_patient_page__WEBPACK_IMPORTED_MODULE_3__["ShowPatientPage"]
    }
];
let ShowPatientPageRoutingModule = class ShowPatientPageRoutingModule {
};
ShowPatientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ShowPatientPageRoutingModule);



/***/ }),

/***/ "BWWH":
/*!*****************************************************!*\
  !*** ./src/app/show-patient/show-patient.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXBhdGllbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "Wa6e":
/*!*****************************************************!*\
  !*** ./src/app/show-patient/show-patient.module.ts ***!
  \*****************************************************/
/*! exports provided: ShowPatientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPatientPageModule", function() { return ShowPatientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _show_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-patient-routing.module */ "+E45");
/* harmony import */ var _show_patient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-patient.page */ "iizo");
/* harmony import */ var _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ficha-paciente/ficha-paciente.module */ "zgqh");








let ShowPatientPageModule = class ShowPatientPageModule {
};
ShowPatientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _show_patient_routing_module__WEBPACK_IMPORTED_MODULE_5__["ShowPatientPageRoutingModule"],
            _ficha_paciente_ficha_paciente_module__WEBPACK_IMPORTED_MODULE_7__["FichaPacientePageModule"]
        ],
        declarations: [_show_patient_page__WEBPACK_IMPORTED_MODULE_6__["ShowPatientPage"]]
    })
], ShowPatientPageModule);



/***/ }),

/***/ "ZTe1":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/show-patient/show-patient.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n<!--      <ion-menu-button (click)=\"this.auth.setLastPage(this.menuOut)\"></ion-menu-button>-->\r\n      <ion-back-button (click)=\"this.auth.setLastPage(this.menuOut)\"\r\n                       text='back'\r\n                       icon=\"chevron-back-outline\"\r\n      >\r\n      </ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Ficha Paciente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<app-ficha-paciente></app-ficha-paciente>\r\n</ion-content>\r\n");

/***/ }),

/***/ "iizo":
/*!***************************************************!*\
  !*** ./src/app/show-patient/show-patient.page.ts ***!
  \***************************************************/
/*! exports provided: ShowPatientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowPatientPage", function() { return ShowPatientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_show_patient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./show-patient.page.html */ "ZTe1");
/* harmony import */ var _show_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-patient.page.scss */ "BWWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");






let ShowPatientPage = class ShowPatientPage {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.menuOut = _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_5__["ClassGlobalConstants"].MENU_OUT_PACIENTE;
    }
};
ShowPatientPage.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ShowPatientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-patient',
        template: _raw_loader_show_patient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_patient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShowPatientPage);



/***/ })

}]);
//# sourceMappingURL=show-patient-show-patient-module.js.map