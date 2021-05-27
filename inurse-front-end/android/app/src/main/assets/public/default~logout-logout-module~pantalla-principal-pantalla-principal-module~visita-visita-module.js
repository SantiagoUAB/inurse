(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~logout-logout-module~pantalla-principal-pantalla-principal-module~visita-visita-module"],{

/***/ "B3bn":
/*!*****************************************************************!*\
  !*** ./src/app/pantalla-principal/pantalla-principal.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  text-decoration: none;\n  padding: 3px;\n  font-weight: 400;\n  font-size: 15px;\n  color: #141313;\n  background-color: #78c3e9;\n  border-radius: 2px;\n  margin-bottom: 5px;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhbnRhbGxhLXByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFESiIsImZpbGUiOiJwYW50YWxsYS1wcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5idXR0b24ge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjMTQxMzEzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc4YzNlOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "QjVG":
/*!********************************************!*\
  !*** ./src/app/service/plantas.service.ts ***!
  \********************************************/
/*! exports provided: PlantasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantasService", function() { return PlantasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../class/class.globalConstants */ "/rmJ");




let PlantasService = class PlantasService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.urlApi = 'http://158.109.74.51:55001/';
    }
    getPlantas() {
        return this.httpClient.get(_class_class_globalConstants__WEBPACK_IMPORTED_MODULE_3__["ClassGlobalConstants"].API_FLOOR);
    }
    getPaciente() {
        return this.httpClient.get('http://158.109.74.51:55001/patient/');
    }
    getRooms() {
        return this.httpClient.get(this.urlApi + 'room/');
    }
};
PlantasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PlantasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PlantasService);



/***/ }),

/***/ "lXuS":
/*!**************************************!*\
  !*** ./src/app/class/class.floor.ts ***!
  \**************************************/
/*! exports provided: Floor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Floor", function() { return Floor; });
class Floor {
    constructor(data) {
        this.results = data['results'];
    }
}


/***/ }),

/***/ "pcoN":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pantalla-principal/pantalla-principal.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"1\">\r\n          <ion-menu-button></ion-menu-button>\r\n        </ion-col>\r\n        <ion-col offSet=\"2\" size=\"6\">\r\n          <ion-title class=\"ion-text-center\">Pantalla Principal</ion-title>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-searchbar placeholder=\"Buscador\" (ionChange)=\"pantallaBuscador($event.detail.value)\"></ion-searchbar>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n<!--  <ion-button (click)=\"this.refreshLogin()\"> Refresh</ion-button>-->\r\n\r\n  <div *ngIf=\"!buscador\">\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"11\">\r\n        <ion-segment scrollable   >\r\n          <ion-segment-button *ngFor=\"let planta of arrayPlanta\" (click)=\"cambioPlanta(planta['floor_num'])\">\r\n\r\n            PLANTA {{planta['floor_num']}}\r\n\r\n          </ion-segment-button>\r\n\r\n        </ion-segment>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  <div *ngIf=\"comprobacionPacienteFijado == '0'\">\r\n    <ion-text>&nbsp; &nbsp; <b>No hay ningún paciente fijado:</b></ion-text>\r\n  </div>\r\n  <div *ngIf=\"comprobacionPacienteFijado == '1'\">\r\n\r\n    <ion-row class=\"ion-align-items-center\">\r\n      <ion-text class=\"ion-padding-end\">&nbsp; &nbsp; <b>Paciente fijado: {{nombrePacienteFijado}} {{apellidoPacienteFijado}}</b></ion-text>\r\n      <ion-button (click) = \"desfijarPaciente()\" expand=\"block\" color=\"danger\" size=\"small\"   fill=\"outline\"><ion-icon name=\"close-circle-sharp\"></ion-icon></ion-button>\r\n    </ion-row>\r\n  </div>\r\n\r\n  <div *ngIf=\"comprobacionPacienteFijado == '1'\">\r\n\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item class=\"paciente\" ion-item *ngFor=\"let item of listaPaciente\" (click)=verFichaPaciente(item[3]) >\r\n      <ion-label class=\"ion-text-wrap\"  >{{item[0]}} : {{item[1]}} {{item[2]}}</ion-label>\r\n      <div *ngIf=\"comprobacionPacienteFijado == '0'\">\r\n        <ion-button (click) = \"fijarPaciente(item[1],item[2])\" expand=\"block\" size=\"small\" color=\"primary\"  fill=\"outline\"><ion-icon name=\"pin-sharp\"></ion-icon></ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</div>\r\n<div *ngIf=\"buscador\">\r\n\r\n\r\n  <app-buscador [pacienteList]=\"pacienteList\"></app-buscador>\r\n\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "qB8f":
/*!***************************************************************!*\
  !*** ./src/app/pantalla-principal/pantalla-principal.page.ts ***!
  \***************************************************************/
/*! exports provided: PantallaPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PantallaPrincipalPage", function() { return PantallaPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pantalla_principal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pantalla-principal.page.html */ "pcoN");
/* harmony import */ var _pantalla_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pantalla-principal.page.scss */ "B3bn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_plantas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/plantas.service */ "QjVG");
/* harmony import */ var _class_class_floor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../class/class.floor */ "lXuS");
/* harmony import */ var _service_pacientes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/pacientes.service */ "ZbvY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/authentication.service */ "bZGi");









let PantallaPrincipalPage = class PantallaPrincipalPage {
    constructor(plantasService, patientSevice, router, authService) {
        this.plantasService = plantasService;
        this.patientSevice = patientSevice;
        this.router = router;
        this.authService = authService;
        this.pacienteList = [];
        this.idPatient = 1; // paciente por defecto
        this.loadPlantas();
        this.loadPacientes();
        console.log(this.resultado);
    }
    loadPacientes() {
        this.plantasService.getPaciente().subscribe(data => {
            console.log('Pacientes');
            console.log(data);
            this.roomPacientes = data['results'];
            console.log(this.roomPacientes);
            console.log('poner planta 1 por defecto');
            this.cambioPlanta(1);
        });
    }
    loadPlantas() {
        this.plantasService.getPlantas().subscribe(data => {
            console.log('Plantas');
            console.log(data);
            this.planta = new _class_class_floor__WEBPACK_IMPORTED_MODULE_5__["Floor"](data);
            this.arrayPlanta = this.planta.results;
        });
    }
    cambioPlanta(planta) {
        console.log('Poner la planta ', planta);
        this.lista = [];
        for (let file of this.roomPacientes) {
            if (planta == (file['room']['floor']['floor_num'])) {
                this.aux2 = [file['room']['room_num'], file['first_name'], file['last_name'], file.id];
                this.lista.push(this.aux2);
            }
        }
        this.listaPaciente = this.lista.sort();
        console.log(this.listaPaciente);
    }
    ngOnInit() {
        this.buscador = false;
        this.nombrePacienteFijado = localStorage.getItem('nombrePacienteFijado');
        this.apellidoPacienteFijado = localStorage.getItem('apellidoPacienteFijado');
        this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
        console.log('Valor inicial paciente fijado: ' + this.comprobacionPacienteFijado);
        if (this.comprobacionPacienteFijado === null || undefined) {
            this.comprobacionPacienteFijado = '0';
        }
    }
    verFichaPaciente(id) {
        console.log('voy a ver la ficha paciente con ID', id);
        this.patientSevice.setIdPacient(id);
        this.router.navigate(['/ficha-paciente/']);
    }
    fijarPaciente(nombre, apellido) {
        console.log('Nombre paciente fijado: ' + nombre);
        console.log('Apellido paciente fijado: ' + apellido);
        localStorage.setItem('comprobacionPacienteFijado', '1');
        this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
        console.log('Paciente fijado: ' + this.comprobacionPacienteFijado);
        localStorage.setItem('nombrePacienteFijado', nombre);
        localStorage.setItem('apellidoPacienteFijado', apellido);
        this.nombrePacienteFijado = nombre;
        this.apellidoPacienteFijado = apellido;
    }
    desfijarPaciente() {
        localStorage.setItem('comprobacionPacienteFijado', '0');
        this.comprobacionPacienteFijado = localStorage.getItem('comprobacionPacienteFijado');
        localStorage.clear();
        this.nombrePacienteFijado = undefined;
        this.apellidoPacienteFijado = undefined;
    }
    getRoomsAuth() {
        console.log('get rooms auth');
        this.plantasService.getRooms().subscribe(data => {
            this.listRooms = data;
        });
    }
    pantallaBuscador(value) {
        this.pacienteList = [];
        if (value != '') {
            var primeraPosicio = parseInt(value.substring(0, 1));
            if (Number.isFinite(primeraPosicio)) {
                this.patientSevice.getPacienteDni(value).subscribe((response) => {
                    response.results.forEach(element => {
                        this.pacienteList.push(element);
                    });
                    console.log("RESULTS ", response.results);
                    console.log("PACIENTE ", this.pacienteList);
                    if (response['count'] !== 0) {
                        this.buscador = true;
                    }
                    else {
                        this.buscador = false;
                    }
                });
            }
            else if (!Number.isFinite(primeraPosicio)) {
                this.patientSevice.getPacienteName(value).subscribe((response = []) => {
                    if (response.results[1] == null) {
                        console.log("nomes una persona");
                        response.results.forEach(element => {
                            this.pacienteList.push(element);
                        });
                        console.log("PACIENTE ", this.pacienteList);
                    }
                    else {
                        console.log("varies persona");
                        response.results.forEach(element => {
                            this.pacienteList.push(element);
                        });
                        // this.pacienteList.push(response.results);
                        console.log("RESULTS ", response.results);
                        console.log("PACIENTE ", this.pacienteList);
                    }
                    if (response['count'] !== 0) {
                        this.buscador = true;
                    }
                    else {
                        this.buscador = false;
                    }
                });
            }
        }
        else {
            this.buscador = false;
        }
    }
    refreshLogin() {
        this.authService.refreshToken().subscribe(data => {
            console.log('token refresh', data);
        });
    }
};
PantallaPrincipalPage.ctorParameters = () => [
    { type: _service_plantas_service__WEBPACK_IMPORTED_MODULE_4__["PlantasService"] },
    { type: _service_pacientes_service__WEBPACK_IMPORTED_MODULE_6__["PacientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"] }
];
PantallaPrincipalPage.propDecorators = {
    idPatient: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PantallaPrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pantalla-principal',
        template: _raw_loader_pantalla_principal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pantalla_principal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PantallaPrincipalPage);



/***/ })

}]);
//# sourceMappingURL=default~logout-logout-module~pantalla-principal-pantalla-principal-module~visita-visita-module.js.map