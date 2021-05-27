(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pantalla-principal-pantalla-principal-module"],{

/***/ "nWdj":
/*!*****************************************************************!*\
  !*** ./src/app/pantalla-principal/pantalla-principal.module.ts ***!
  \*****************************************************************/
/*! exports provided: PantallaPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallaPrincipalPageModule", function() { return PantallaPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pantalla_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pantalla-principal-routing.module */ "wtX7");
/* harmony import */ var _pantalla_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pantalla-principal.page */ "qB8f");
/* harmony import */ var _buscador_buscador_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../buscador/buscador.page */ "5Je2");








let PantallaPrincipalPageModule = class PantallaPrincipalPageModule {
};
PantallaPrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pantalla_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PantallaPrincipalPageRoutingModule"]
        ],
        declarations: [_pantalla_principal_page__WEBPACK_IMPORTED_MODULE_6__["PantallaPrincipalPage"], _buscador_buscador_page__WEBPACK_IMPORTED_MODULE_7__["BuscadorPage"]]
    })
], PantallaPrincipalPageModule);



/***/ }),

/***/ "wtX7":
/*!*************************************************************************!*\
  !*** ./src/app/pantalla-principal/pantalla-principal-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: PantallaPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallaPrincipalPageRoutingModule", function() { return PantallaPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pantalla_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pantalla-principal.page */ "qB8f");




const routes = [
    {
        path: '',
        component: _pantalla_principal_page__WEBPACK_IMPORTED_MODULE_3__["PantallaPrincipalPage"]
    }
];
let PantallaPrincipalPageRoutingModule = class PantallaPrincipalPageRoutingModule {
};
PantallaPrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PantallaPrincipalPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pantalla-principal-pantalla-principal-module.js.map