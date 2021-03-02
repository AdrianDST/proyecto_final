(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/asignaturas/asignaturas.component */ "./src/app/components/asignaturas/asignaturas.component.ts");
/* harmony import */ var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ciclos/ciclos.component */ "./src/app/components/ciclos/ciclos.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







const routes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "ciclos", component: _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_1__["CiclosComponent"] },
    { path: "asignaturas", component: _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_0__["AsignaturasComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'rutas';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ciclos/ciclos.component */ "./src/app/components/ciclos/ciclos.component.ts");
/* harmony import */ var _components_asir_asir_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/asir/asir.component */ "./src/app/components/asir/asir.component.ts");
/* harmony import */ var _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dam/dam.component */ "./src/app/components/dam/dam.component.ts");
/* harmony import */ var _components_daw_daw_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/daw/daw.component */ "./src/app/components/daw/daw.component.ts");
/* harmony import */ var _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/asignatura/asignatura.component */ "./src/app/components/asignatura/asignatura.component.ts");
/* harmony import */ var _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/asignaturas/asignaturas.component */ "./src/app/components/asignaturas/asignaturas.component.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__["CiclosComponent"],
        _components_asir_asir_component__WEBPACK_IMPORTED_MODULE_7__["AsirComponent"],
        _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_8__["DamComponent"],
        _components_daw_daw_component__WEBPACK_IMPORTED_MODULE_9__["DawComponent"],
        _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_10__["AsignaturaComponent"],
        _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_11__["AsignaturasComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    _components_ciclos_ciclos_component__WEBPACK_IMPORTED_MODULE_6__["CiclosComponent"],
                    _components_asir_asir_component__WEBPACK_IMPORTED_MODULE_7__["AsirComponent"],
                    _components_dam_dam_component__WEBPACK_IMPORTED_MODULE_8__["DamComponent"],
                    _components_daw_daw_component__WEBPACK_IMPORTED_MODULE_9__["DawComponent"],
                    _components_asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_10__["AsignaturaComponent"],
                    _components_asignaturas_asignaturas_component__WEBPACK_IMPORTED_MODULE_11__["AsignaturasComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/asignatura/asignatura.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/asignatura/asignatura.component.ts ***!
  \***************************************************************/
/*! exports provided: AsignaturaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaComponent", function() { return AsignaturaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function AsignaturaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r1.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class AsignaturaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsignaturaComponent.ɵfac = function AsignaturaComponent_Factory(t) { return new (t || AsignaturaComponent)(); };
AsignaturaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignaturaComponent, selectors: [["app-asignatura"]], inputs: { asignatura: "asignatura" }, decls: 12, vars: 5, consts: [[1, "card", 2, "width", "16rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [4, "ngFor", "ngForOf"], ["alt", "...", 1, "card-img-top", 2, "width", "2rem", "height", "2rem", 3, "src"]], template: function AsignaturaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AsignaturaComponent_div_11_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.asignatura.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.asignatura.profesor, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Ciclo:", ctx.asignatura.ciclo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Curso", ctx.asignatura.curso, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignatura.conocimientos);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZ25hdHVyYS9hc2lnbmF0dXJhLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsignaturaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asignatura',
                templateUrl: './asignatura.component.html',
                styleUrls: ['./asignatura.component.css']
            }]
    }], function () { return []; }, { asignatura: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/asignaturas/asignaturas.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/asignaturas/asignaturas.component.ts ***!
  \*****************************************************************/
/*! exports provided: AsignaturasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturasComponent", function() { return AsignaturasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../asignatura/asignatura.component */ "./src/app/components/asignatura/asignatura.component.ts");





function AsignaturasComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-asignatura", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("asignatura", item_r1);
} }
class AsignaturasComponent {
    constructor(servicio) {
        this.servicio = servicio;
    }
    ngOnInit() {
        this.asignaturasPintar = this.servicio.getAsignaturas();
    }
}
AsignaturasComponent.ɵfac = function AsignaturasComponent_Factory(t) { return new (t || AsignaturasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"])); };
AsignaturasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsignaturasComponent, selectors: [["app-asignaturas"]], decls: 21, vars: 1, consts: [[1, "row"], [1, "col"], ["placeholder", "Introduce el nombre de la asignatura"], ["placeholder", "introduce el nombre del ciclo"], ["placeholder", "Introduce el nombre del conocimiento"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg"], ["class", "col", 4, "ngFor", "ngForOf"], [3, "asignatura"]], template: function AsignaturasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "filtrar por nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "filtrar por ciclo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "filtrar por conocimiento");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Filtrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Los resultados de busqueda son");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AsignaturasComponent_div_20_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asignaturasPintar);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _asignatura_asignatura_component__WEBPACK_IMPORTED_MODULE_3__["AsignaturaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpZ25hdHVyYXMvYXNpZ25hdHVyYXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsignaturasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asignaturas',
                templateUrl: './asignaturas.component.html',
                styleUrls: ['./asignaturas.component.css']
            }]
    }], function () { return [{ type: _services_datos_service__WEBPACK_IMPORTED_MODULE_1__["DatosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/asir/asir.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/asir/asir.component.ts ***!
  \***************************************************/
/*! exports provided: AsirComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsirComponent", function() { return AsirComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AsirComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsirComponent.ɵfac = function AsirComponent_Factory(t) { return new (t || AsirComponent)(); };
AsirComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsirComponent, selectors: [["app-asir"]], decls: 2, vars: 0, template: function AsirComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "asir works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXNpci9hc2lyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsirComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-asir',
                templateUrl: './asir.component.html',
                styleUrls: ['./asir.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/ciclos/ciclos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ciclos/ciclos.component.ts ***!
  \*******************************************************/
/*! exports provided: CiclosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiclosComponent", function() { return CiclosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_datos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/datos.service */ "./src/app/services/datos.service.ts");
/* harmony import */ var src_app_services_doscolumnas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/doscolumnas.service */ "./src/app/services/doscolumnas.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function CiclosComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.nombre, " ");
} }
function CiclosComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.nombre, " ");
} }
function CiclosComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r5.imagen, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r5.nombre, " ", item_r5.curso, "");
} }
class CiclosComponent {
    constructor(gestorRutasActivas, servicioDatos, dosColumnas) {
        this.gestorRutasActivas = gestorRutasActivas;
        this.servicioDatos = servicioDatos;
        this.dosColumnas = dosColumnas;
        this.elementos = [];
        this.elementosJSON = [];
    }
    ngOnInit() {
        this.ciclosTotal = this.dosColumnas.getCiclo();
        this.ciclosPintarDam = this.servicioDatos.getAsignaturasDam();
        this.ciclosPintarDaw = this.servicioDatos.getAsignaturasDaw();
        //console.log(this.gestorRutasActivas.snapshot.paramMap.get('id'));
        //this.numero =  parseInt(this.getorRutasActivas.snapshot.paramMap.get('id'));
        this.gestorRutasActivas.paramMap.subscribe(param => {
            //console.log(param.get('id'));
            this.numero = parseInt(param.get('id'));
            console.log(this.numero);
        });
        //console.log(this.numero);
        //console.log(this.servicioDatos.getArrayUno());
    }
}
CiclosComponent.ɵfac = function CiclosComponent_Factory(t) { return new (t || CiclosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_doscolumnas_service__WEBPACK_IMPORTED_MODULE_3__["DoscolumnasService"])); };
CiclosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CiclosComponent, selectors: [["app-ciclos"]], decls: 19, vars: 3, consts: [[1, "row"], [1, "col"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "card", 2, "width", "16rem"], [1, "card-body"], ["alt", "...", 1, "card-img-top", 2, "width", "12rem", "height", "12rem", 3, "src"], [1, "card-title"], [1, "card-text"], ["href", "#", "role", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function CiclosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Los ciclos tecnologicos son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Asignaturas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CiclosComponent_li_9_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DAW");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Asignaturas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CiclosComponent_li_16_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CiclosComponent_div_18_Template, 12, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosPintarDam);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosPintarDaw);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ciclosTotal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2ljbG9zL2NpY2xvcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CiclosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ciclos',
                templateUrl: './ciclos.component.html',
                styleUrls: ['./ciclos.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_datos_service__WEBPACK_IMPORTED_MODULE_2__["DatosService"] }, { type: src_app_services_doscolumnas_service__WEBPACK_IMPORTED_MODULE_3__["DoscolumnasService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/dam/dam.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/dam/dam.component.ts ***!
  \*************************************************/
/*! exports provided: DamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamComponent", function() { return DamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DamComponent {
    constructor() { }
    ngOnInit() {
    }
}
DamComponent.ɵfac = function DamComponent_Factory(t) { return new (t || DamComponent)(); };
DamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DamComponent, selectors: [["app-dam"]], decls: 2, vars: 0, template: function DamComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "dam works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFtL2RhbS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dam',
                templateUrl: './dam.component.html',
                styleUrls: ['./dam.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/daw/daw.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/daw/daw.component.ts ***!
  \*************************************************/
/*! exports provided: DawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DawComponent", function() { return DawComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DawComponent {
    constructor() { }
    ngOnInit() {
    }
}
DawComponent.ɵfac = function DawComponent_Factory(t) { return new (t || DawComponent)(); };
DawComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DawComponent, selectors: [["app-daw"]], decls: 2, vars: 0, template: function DawComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "daw works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGF3L2Rhdy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DawComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-daw',
                templateUrl: './daw.component.html',
                styleUrls: ['./daw.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 37, vars: 0, consts: [[1, "display-4"], [1, "lead"], [1, "my-4"], [1, "list-group"], [1, "list-group-item"], ["href", "https://www.cesjuanpablosegundo.es/", "role", "button", 1, "btn", "btn-primary", "btn-lg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Grados tecnicos Ces Juan Pablo II ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Aplicacion web creada por Adrian Lopez para el ciclo de desarrollo de Aplicaciones Multiplataforma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Aplicacion realizada para el modulo de DI,hecha en ANGULAR que consta de:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Componente home: representa la entrega inicial de la aplicacion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Componente Ciclos: representa tantas cartas como ciclos existan en el CiclosService");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Componente Asignaturas: representa tantas cartas como asignaturas haya en el servicio AsignaturaService. Adicionalmente se cuenta con un filtro para poder ver asignaturas espec\u00EDficas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Componente Asignatura: representa el aspecto que tendr\u00E1 una carta de las de arriba mencionadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Componente DetalleCiclo: representa el detalle de un ciclo,donde se mostrar\u00E1n los conocimientos necesarios para poder aprobar el ciclo y todas las asignaturas que lo componen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Componente NavBar: representa la barra de navegacion superior donde se muestra un menu con las siguientes posibilidades: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Inicio: Llevar\u00E1 al componente Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Ciclos: Llevar\u00E1 al componente Ciclos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Asignaturas: Llevar\u00E1 al componente Asignaturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Servicios: se debera crear al menos dos servicios que provean de datos tanto para los ciclos como para las asignaturas(hecho)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pipes: se deber\u00E1 crear al menos dos directivas personalizada que realice alguna transformacion en la aplicacion(No hecho)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Ir a la web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/ciclos"]; };
const _c2 = function () { return ["/asignaturas"]; };
class NavbarComponent {
    constructor(gestorRutas) {
        this.gestorRutas = gestorRutas;
        // necesito el objeto Router
        this.datoPasar = 1;
    }
    ngOnInit() {
    }
    irCiclo(numero) {
        //console.log("Elemento pulsado");
        // voy a navegar desde el Router
        this.gestorRutas.navigate(['ciclos', numero]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 17, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-2", "mb-lg-0"], [1, "nav-item"], ["aria-current", "page", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["role", "button", "aria-expanded", "false", "routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Ciclos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Asignaturas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/datos.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/datos.service.ts ***!
  \*******************************************/
/*! exports provided: DatosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosService", function() { return DatosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatosService {
    constructor() {
        this.asignaturasFiltrarDaw = [
            {
                nombre: 'Sistemas informáticos',
                profesor: 'Isaac Sampedro',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'windows', imagen: 'assets/images/win.png' },
                    { nombre: 'linux', imagen: 'assets/images/linux.png' },
                    { nombre: 'virtualizacion', imagen: 'assets/images/virtual.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Programación',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Bases de datos',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'sqlserver', imagen: 'assets/images/sql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Lenguajes de Marcas',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'html', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'xml', imagen: 'assets/images/html.jpeg' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Entornos de desarrollo',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'scrum', imagen: 'assets/images/scrum.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Empresa e Iniciativa emprendedora',
                profesor: 'Marta Jimenez',
                conocimientos: [
                    { nombre: 'emprender', imagen: 'assets/images/empresa.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Inglés',
                profesor: 'Rocio',
                conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'react', imagen: 'assets/images/react.png' },
                    { nombre: 'webpack', imagen: 'assets/images/webpack.jpg' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
                profesor: 'David Ventura',
                conocimientos: [
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Despliegue de Aplicaciones',
                profesor: 'Jesus Nuño',
                conocimientos: [
                    { nombre: 'apache', imagen: 'assets/images/apache.jpeg' },
                    { nombre: 'tomcat', imagen: 'assets/images/tomcat.png' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de Interfaces Web',
                profesor: 'Victor Martín',
                conocimientos: [
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'bootstrap', imagen: 'assets/images/boots.png' },
                    { nombre: 'diseño', imagen: 'assets/images/disenio.jpg' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
        ];
        this.asignaturasFiltrarDam = [
            {
                nombre: 'Sistemas informáticos',
                profesor: 'Isaac Sampedro',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'windows', imagen: 'assets/images/win.png' },
                    { nombre: 'linux', imagen: 'assets/images/linux.png' },
                    { nombre: 'virtualizacion', imagen: 'assets/images/virtual.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Programación',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Bases de datos',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'sqlserver', imagen: 'assets/images/sql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Lenguajes de Marcas',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'html', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'xml', imagen: 'assets/images/html.jpeg' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Entornos de desarrollo',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'scrum', imagen: 'assets/images/scrum.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Empresa e Iniciativa emprendedora',
                profesor: 'Marta Jimenez',
                conocimientos: [
                    { nombre: 'emprender', imagen: 'assets/images/empresa.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Inglés',
                profesor: 'Rocio',
                conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Programación Multimedia y Dispositivos Moviles',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                ],
                ciclo: 'DAM ',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de interfaces',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'javafx', imagen: 'assets/images/javafx.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'angular', imagen: 'assets/images/angular.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Acceso a Datos',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'mongo', imagen: 'assets/images/mongo.jpg' },
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Programacion de servicios y procesos',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'seguridad', imagen: 'assets/images/seguridad.jpg' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Sistemas de gestión empresarial',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'erp', imagen: 'assets/images/erp.jpg' },
                    { nombre: 'odoo', imagen: 'assets/images/odoo.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            }
        ];
        this.asignaturas = [
            {
                nombre: 'Sistemas informáticos',
                profesor: 'Isaac Sampedro',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'windows', imagen: 'assets/images/win.png' },
                    { nombre: 'linux', imagen: 'assets/images/linux.png' },
                    { nombre: 'virtualizacion', imagen: 'assets/images/virtual.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Programación',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Bases de datos',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'sqlserver', imagen: 'assets/images/sql.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Lenguajes de Marcas',
                profesor: 'Javier Martinez',
                conocimientos: [
                    { nombre: 'html', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'xml', imagen: 'assets/images/html.jpeg' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Entornos de desarrollo',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                    { nombre: 'scrum', imagen: 'assets/images/scrum.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 1,
            },
            {
                nombre: 'Empresa e Iniciativa emprendedora',
                profesor: 'Marta Jimenez',
                conocimientos: [
                    { nombre: 'emprender', imagen: 'assets/images/empresa.png' },
                ],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Inglés',
                profesor: 'Rocio',
                conocimientos: [{ nombre: 'ingles', imagen: 'assets/images/ingles.jpg' }],
                ciclo: 'DAM | DAW',
                curso: 2,
            },
            {
                nombre: 'Programación Multimedia y Dispositivos Moviles',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                ],
                ciclo: 'DAM ',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de interfaces',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'javafx', imagen: 'assets/images/javafx.jpg' },
                    { nombre: 'json', imagen: 'assets/images/json.png' },
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'angular', imagen: 'assets/images/angular.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Acceso a Datos',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'java', imagen: 'assets/images/java.png' },
                    { nombre: 'mysql', imagen: 'assets/images/mysql.png' },
                    { nombre: 'mongo', imagen: 'assets/images/mongo.jpg' },
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Programacion de servicios y procesos',
                profesor: 'Jesús Niño',
                conocimientos: [
                    { nombre: 'seguridad', imagen: 'assets/images/seguridad.jpg' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Sistemas de gestión empresarial',
                profesor: 'Hector Alonso',
                conocimientos: [
                    { nombre: 'erp', imagen: 'assets/images/erp.jpg' },
                    { nombre: 'odoo', imagen: 'assets/images/odoo.png' },
                ],
                ciclo: 'DAM',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Cliente',
                profesor: 'Borja Martín',
                conocimientos: [
                    { nombre: 'js', imagen: 'assets/images/js.jpg' },
                    { nombre: 'react', imagen: 'assets/images/react.png' },
                    { nombre: 'webpack', imagen: 'assets/images/webpack.jpg' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo Aplicaciones Web Entorno Servidor',
                profesor: 'David Ventura',
                conocimientos: [
                    { nombre: 'php', imagen: 'assets/images/php.png' },
                    { nombre: 'node', imagen: 'assets/images/node.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Despliegue de Aplicaciones',
                profesor: 'Jesus Nuño',
                conocimientos: [
                    { nombre: 'apache', imagen: 'assets/images/apache.jpeg' },
                    { nombre: 'tomcat', imagen: 'assets/images/tomcat.png' },
                    { nombre: 'powershell', imagen: 'assets/images/powershell.png' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
            {
                nombre: 'Desarrollo de Interfaces Web',
                profesor: 'Victor Martín',
                conocimientos: [
                    { nombre: 'xml', imagen: 'assets/images/xml.jpg' },
                    { nombre: 'bootstrap', imagen: 'assets/images/boots.png' },
                    { nombre: 'diseño', imagen: 'assets/images/disenio.jpg' },
                ],
                ciclo: 'DAW',
                curso: 2,
            },
        ];
    }
    getAsignaturas() {
        return this.asignaturas;
    }
    getAsignaturasDam() {
        return this.asignaturasFiltrarDam;
    }
    getAsignaturasDaw() {
        return this.asignaturasFiltrarDaw;
    }
}
DatosService.ɵfac = function DatosService_Factory(t) { return new (t || DatosService)(); };
DatosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatosService, factory: DatosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/doscolumnas.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/doscolumnas.service.ts ***!
  \*************************************************/
/*! exports provided: DoscolumnasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoscolumnasService", function() { return DoscolumnasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DoscolumnasService {
    constructor() {
        this.ciclo = [
            {
                nombre: 'DAM',
                curso: 1,
                asignaturas: [],
                imagen: 'assets/images/dam.jpeg',
            },
            {
                nombre: 'DAM',
                curso: 2,
                asignaturas: [],
                imagen: 'assets/images/dam.jpeg',
            },
            {
                nombre: 'DAW',
                curso: 1,
                asignaturas: [],
                imagen: 'assets/images/daw.jpeg',
            },
            {
                nombre: 'DAW',
                curso: 2,
                asignaturas: [],
                imagen: 'assets/images/daw.jpeg',
            },
        ];
    }
    getCiclo() {
        return this.ciclo;
    }
}
DoscolumnasService.ɵfac = function DoscolumnasService_Factory(t) { return new (t || DoscolumnasService)(); };
DoscolumnasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DoscolumnasService, factory: DoscolumnasService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoscolumnasService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\adril\OneDrive\Escritorio\Nueva carpeta (23)\proyecto_angular-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map