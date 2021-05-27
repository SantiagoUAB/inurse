(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buscador-buscador-module"],{

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