(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dash_board_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dash-board/welcome/welcome.component */ "./src/app/components/dash-board/welcome/welcome.component.ts");
/* harmony import */ var _components_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/invoice/invoice-list/invoice-list.component */ "./src/app/components/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _components_clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clients/client-list/client-list.component */ "./src/app/components/clients/client-list/client-list.component.ts");
/* harmony import */ var _components_clients_add_edit_client_add_edit_client_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/clients/add-edit-client/add-edit-client.component */ "./src/app/components/clients/add-edit-client/add-edit-client.component.ts");
/* harmony import */ var _components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/sign-in/sign-in.component */ "./src/app/components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/sign-up/sign-up.component */ "./src/app/components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _components_clients_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/clients/client-detail/client-detail.component */ "./src/app/components/clients/client-detail/client-detail.component.ts");
/* harmony import */ var _components_invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/invoice/invoice-form/invoice-form.component */ "./src/app/components/invoice/invoice-form/invoice-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Components








var routes = [
    { path: '', component: _components_dash_board_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'sign-in', component: _components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_6__["SignInComponent"] },
    { path: 'sign-up', component: _components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'invoices', component: _components_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_3__["InvoiceListComponent"] },
    { path: 'add-edit-invoice', component: _components_invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_9__["InvoiceFormComponent"] },
    { path: 'clients', component: _components_clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_4__["ClientListComponent"] },
    { path: 'clients/:clientId', component: _components_clients_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_8__["ClientDetailComponent"] },
    { path: 'add-edit-client', component: _components_clients_add_edit_client_add_edit_client_component__WEBPACK_IMPORTED_MODULE_5__["AddEditClientComponent"] },
    { path: 'add-edit-client/:id', component: _components_clients_add_edit_client_add_edit_client_component__WEBPACK_IMPORTED_MODULE_5__["AddEditClientComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n    <mat-sidenav #sidenav role=\"navigation\">\r\n        <app-sidenav-list (closeSideNav)=\"sidenav.close()\"></app-sidenav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content>\r\n        <app-header (sideNavToggle)=\"sidenav.toggle()\"></app-header>\r\n        <main>\r\n            <div class=\"container\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n        </main>\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container,\nmat-sidenav-content,\nmats-sidenav {\n  height: 100%;\n}\nmat-sidenav {\n  width: 250px;\n}\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/invoice/invoice-form/invoice-form.component */ "./src/app/components/invoice/invoice-form/invoice-form.component.ts");
/* harmony import */ var _components_dash_board_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dash-board/welcome/welcome.component */ "./src/app/components/dash-board/welcome/welcome.component.ts");
/* harmony import */ var _components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/auth/sign-in/sign-in.component */ "./src/app/components/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/auth/sign-up/sign-up.component */ "./src/app/components/auth/sign-up/sign-up.component.ts");
/* harmony import */ var _components_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/invoice/invoice-list/invoice-list.component */ "./src/app/components/invoice/invoice-list/invoice-list.component.ts");
/* harmony import */ var _components_clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/clients/client-list/client-list.component */ "./src/app/components/clients/client-list/client-list.component.ts");
/* harmony import */ var _components_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navigation/header/header.component */ "./src/app/components/navigation/header/header.component.ts");
/* harmony import */ var _components_navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/navigation/sidenav-list/sidenav-list.component */ "./src/app/components/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _components_clients_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/clients/client-detail/client-detail.component */ "./src/app/components/clients/client-detail/client-detail.component.ts");
/* harmony import */ var _components_clients_add_edit_client_add_edit_client_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/clients/add-edit-client/add-edit-client.component */ "./src/app/components/clients/add-edit-client/add-edit-client.component.ts");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/invoice.service */ "./src/app/services/invoice.service.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _helpers_debounce_helper__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/debounce.helper */ "./src/app/helpers/debounce.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Components












// Services


// Others

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_invoice_invoice_form_invoice_form_component__WEBPACK_IMPORTED_MODULE_10__["InvoiceFormComponent"],
                _components_dash_board_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
                _components_invoice_invoice_list_invoice_list_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceListComponent"],
                _components_clients_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_15__["ClientListComponent"],
                _components_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_12__["SignInComponent"],
                _components_auth_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                _components_navigation_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_17__["SidenavListComponent"],
                _components_clients_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailComponent"],
                _components_clients_add_edit_client_add_edit_client_component__WEBPACK_IMPORTED_MODULE_19__["AddEditClientComponent"],
                _components_container_container_component__WEBPACK_IMPORTED_MODULE_20__["ContainerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_3__["AlertModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"]
            ],
            providers: [_services_invoice_service__WEBPACK_IMPORTED_MODULE_21__["InvoiceService"], _services_client_service__WEBPACK_IMPORTED_MODULE_22__["ClientService"], _helpers_debounce_helper__WEBPACK_IMPORTED_MODULE_23__["Debounce"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/sign-in/sign-in.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/sign-in/sign-in.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  sign-in works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/auth/sign-in/sign-in.component.less":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/sign-in/sign-in.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/auth/sign-in/sign-in.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/sign-in/sign-in.component.ts ***!
  \**************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignInComponent = /** @class */ (function () {
    function SignInComponent() {
    }
    SignInComponent.prototype.ngOnInit = function () { };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/auth/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.less */ "./src/app/components/auth/sign-in/sign-in.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/sign-up/sign-up.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/sign-up/sign-up.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\r\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\r\n    <mat-form-field>\r\n      <input \r\n        type=\"email\" \r\n        matInput \r\n        placeholder=\"Your Email\" \r\n        ngModel name=\"email\" \r\n        email \r\n        required\r\n        #emailInput=\"ngModel\">\r\n        <mat-error *ngIf=\"emailInput.hasError('required')\">Email is required</mat-error>\r\n        <mat-error *ngIf=\"!emailInput.hasError('required')\">Email is invalid!</mat-error>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n      <input \r\n        type=\"password\" \r\n        matInput \r\n        placeholder=\"Your Password\" \r\n        ngModel name=\"password\" \r\n        required \r\n        minlength=\"6\"\r\n        #pwInput=\"ngModel\">\r\n        <mat-error *ngIf=\"pwInput.hasError('required')\">Password is required</mat-error>\r\n        <mat-error *ngIf=\"pwInput.hasError('minlength')\">Should be at least 6 characters</mat-error>\r\n    </mat-form-field>\r\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"form.invalid\">Submit</button>\r\n  </form>\r\n</section>"

/***/ }),

/***/ "./src/app/components/auth/sign-up/sign-up.component.less":
/*!****************************************************************!*\
  !*** ./src/app/components/auth/sign-up/sign-up.component.less ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 300px;\n}\n"

/***/ }),

/***/ "./src/app/components/auth/sign-up/sign-up.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/sign-up/sign-up.component.ts ***!
  \**************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent.prototype.onSubmit = function (form) {
        console.log('Form:', form.value);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/auth/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.less */ "./src/app/components/auth/sign-up/sign-up.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/add-edit-client/add-edit-client.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clients/add-edit-client/add-edit-client.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container form\">\r\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"submitClient()\">\r\n    <h2>Contact Information</h2>\r\n    <div class=\"row\">\r\n      <div class=\"row-item col-sm-2\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Title</mat-label>\r\n          <input matInput placeholder=\"Title\" type=\"text\" [(ngModel)]=\"client.title\" name=\"title\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row-item col-sm-5\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>First Name</mat-label>\r\n          <input matInput placeholder=\"First Name\" type=\"text\" [(ngModel)]=\"client.firstName\" name=\"first\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row-item col-sm-5\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input matInput placeholder=\"Last Name\" type=\"text\" [(ngModel)]=\"client.lastName\" name=\"last\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"row-item col-sm-12\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Company Name</mat-label>\r\n          <input matInput placeholder=\"Company Name\" type=\"text\" [(ngModel)]=\"client.companyName\" name=\"company\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"row-item col-sm-6\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Phone</mat-label>\r\n          <input matInput placeholder=\"Phone number\" type=\"tel\" [(ngModel)]=\"client.phone\" name=\"phone\" (input)=\"phoneChange()\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row-item col-sm-6\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Email</mat-label>\r\n          <input matInput placeholder=\"Email\" type=\"email\" [(ngModel)]=\"client.email\" name=\"email\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  \r\n    <h2>Billing Address</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Address 1</mat-label>\r\n          <input matInput placeholder=\"Street and number\" type=\"text\" [(ngModel)]=\"client.billingAddress.address1\" name=\"billingAddress1\" (input)=\"billingAddress1Change($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-6 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Address 2</mat-label>\r\n          <input matInput placeholder=\"Suite, unit, building, floor, etc.\" type=\"text\" [(ngModel)]=\"client.billingAddress.address2\" name=\"billingAddress2\" (input)=\"billingAddress2Change($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>City</mat-label>\r\n          <input matInput placeholder=\"City\" type=\"text\" [(ngModel)]=\"client.billingAddress.city\" name=\"billingCity\" (input)=\"billingCityChange($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>State / Province</mat-label>\r\n          <input matInput placeholder=\"State / Province\" type=\"text\" [(ngModel)]=\"client.billingAddress.state\" name=\"billingState\" (input)=\"billingStateChange($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Zip Code</mat-label>\r\n          <input matInput placeholder=\"Zip Code\" type=\"text\" [(ngModel)]=\"client.billingAddress.zipCode\" name=\"billingZipCode\" (input)=\"billingZipCodeChange($event)\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row shipping-address-label\">\r\n      <div class=\"col-sm-6\">\r\n        <h2>Shipping Address</h2>\r\n      </div>\r\n      <div class=\"col-sm-6 same-as-billing-checkbox\">\r\n        <mat-checkbox (click)=\"copyBilling()\" [(ngModel)]=\"sameAsBilling\" name=\"sameAsBilling\">Same as Billing Address</mat-checkbox>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"row-item col-sm-6\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Address 1</mat-label>\r\n          <input matInput placeholder=\"Street and number\" type=\"text\" [(ngModel)]=\"client.shippingAddress.address1\" name=\"shippingAddress1\" [disabled]=\"sameAsBilling\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-6 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Address 2</mat-label>\r\n          <input matInput placeholder=\"Suite, unit, building, floor, etc.\" type=\"text\" [(ngModel)]=\"client.shippingAddress.address2\" name=\"shippingAddress2\" [disabled]=\"sameAsBilling\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>City</mat-label>\r\n          <input matInput placeholder=\"City\" type=\"text\" [(ngModel)]=\"client.shippingAddress.city\" name=\"shippingCity\" [disabled]=\"sameAsBilling\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>State / Province</mat-label>\r\n          <input matInput placeholder=\"State / Province\" type=\"text\" [(ngModel)]=\"client.shippingAddress.state\" name=\"shippingState\" [disabled]=\"sameAsBilling\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-sm-4 row-item\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Zip Code</mat-label>\r\n          <input matInput placeholder=\"Zip Code\" type=\"text\" [(ngModel)]=\"client.shippingAddress.zipCode\" name=\"shippingZipCode\" [disabled]=\"sameAsBilling\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"clientForm.invalid\">{{submitButtonText}}</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/clients/add-edit-client/add-edit-client.component.less":
/*!***********************************************************************************!*\
  !*** ./src/app/components/clients/add-edit-client/add-edit-client.component.less ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\n  margin-top: 60px;\n  margin-bottom: 60px;\n  max-width: 700px;\n}\n.form mat-form-field {\n  display: inline;\n}\n.form .row-item {\n  padding: 0 10px;\n}\n"

/***/ }),

/***/ "./src/app/components/clients/add-edit-client/add-edit-client.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/clients/add-edit-client/add-edit-client.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AddEditClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEditClientComponent", function() { return AddEditClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Models

var AddEditClientComponent = /** @class */ (function () {
    function AddEditClientComponent(clientService, router, route) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.sameAsBilling = false;
        this.addClientError = false;
    }
    AddEditClientComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.params['id']) {
            this.client = this.clientService.getCurrentClient();
            this.isAddingClient = false;
            this.submitButtonText = 'Update Client';
        }
        else {
            this.client = new _models_client__WEBPACK_IMPORTED_MODULE_3__["Client"]();
            this.isAddingClient = true;
            this.submitButtonText = 'Add Client';
        }
    };
    AddEditClientComponent.prototype.submitClient = function () {
        if (this.isAddingClient) {
            this.clientService.addClient(this.client);
        }
        else {
            this.clientService.updateClient(this.client);
        }
        // if (!this.clientService.addClient(this.client)) {
        //   this.addClientError = true;
        // } else {
        //   this.addClientError = false;
        //   this.router.navigate(['/clients']);
        // }
    };
    AddEditClientComponent.prototype.copyBilling = function () {
        if (!this.sameAsBilling) {
            this.client.shippingAddress = __assign({}, this.client.billingAddress);
        }
        else {
            this.client.shippingAddress.address1 = '';
            this.client.shippingAddress.address2 = '';
            this.client.shippingAddress.city = '';
            this.client.shippingAddress.state = '';
            this.client.shippingAddress.zipCode = '';
        }
    };
    AddEditClientComponent.prototype.phoneChange = function () {
        // ToDo: format phone
    };
    AddEditClientComponent.prototype.billingAddress1Change = function (event) {
        if (this.sameAsBilling) {
            this.client.shippingAddress.address1 = event.target.value;
        }
    };
    AddEditClientComponent.prototype.billingAddress2Change = function (event) {
        if (this.sameAsBilling) {
            this.client.shippingAddress.address2 = event.target.value;
        }
    };
    AddEditClientComponent.prototype.billingCityChange = function (event) {
        if (this.sameAsBilling) {
            this.client.shippingAddress.city = event.target.value;
        }
    };
    AddEditClientComponent.prototype.billingStateChange = function (event) {
        if (this.sameAsBilling) {
            this.client.shippingAddress.state = event.target.value;
        }
    };
    AddEditClientComponent.prototype.billingZipCodeChange = function (event) {
        if (this.sameAsBilling) {
            this.client.shippingAddress.zipCode = event.target.value;
        }
    };
    AddEditClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-edit-client',
            template: __webpack_require__(/*! ./add-edit-client.component.html */ "./src/app/components/clients/add-edit-client/add-edit-client.component.html"),
            styles: [__webpack_require__(/*! ./add-edit-client.component.less */ "./src/app/components/clients/add-edit-client/add-edit-client.component.less")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AddEditClientComponent);
    return AddEditClientComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/client-detail/client-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/client-detail/client-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6 offset-md-1\">\r\n    <div class=\"client-detail\">\r\n      <div class=\"client-detail-header\">\r\n        <h2>{{client.displayName}} </h2>\r\n        <p>Client ID #{{client.id}}</p>\r\n      </div>\r\n      <hr class=\"dividing-line\">\r\n      <div class=\"client-detail-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"client-detail-section-header\">\r\n              <h5>Billing Address</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-1\">\r\n            <div class=\"client-detail-section-body\">\r\n              <p>{{client.billingAddress.address1}}</p>\r\n              <p *ngIf=\"client.billingAddress.address2\">{{client.billingAddress.address2}}</p>\r\n              <p>{{client.billingAddress.city}} {{client.billingAddress.state}} {{client.billingAddress.zipCode }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"client-detail-section\">\r\n        <div class=\"row\" *ngIf=\"!isBillingAndShippingSame\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"client-detail-section-header\">\r\n              <h5>Shipping Address</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-1\">\r\n            <div class=\"client-detail-section-body\">\r\n              <p>{{client.shippingAddress.address1}}</p>\r\n              <p *ngIf=\"client.billingAddress.address2\">{{client.billingAddress.address2}}</p>\r\n              <p>{{client.shippingAddress.city}} {{client.shippingAddress.state}} {{client.shippingAddress.zipcode }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"client-detail-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"client-detail-section-header\">\r\n              <h5>Contact Information</h5>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 offset-md-1\">\r\n            <div class=\"client-detail-section-body\">\r\n              <p>\r\n                <span class=\"contact\">Phone:</span> {{client.phone}}</p>\r\n              <p>\r\n                <span class=\"contact\">Email:</span>\r\n                <a href=\"mailto:{{client.email}}\"> {{client.email}}</a>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <hr class=\"dividing-line\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteClient()\">Delete</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"editClient()\">Edit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"cold-md-4 offset-md-1\">\r\n    <div class=\"containers\">\r\n      <div *ngIf=\"client.containers; else no_containers\">\r\n        <div *ngFor=\"let container of client.containers\">\r\n          {{container}}\r\n        </div>\r\n      </div>\r\n      <ng-template #no_containers>No containers available</ng-template>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/clients/client-detail/client-detail.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/components/clients/client-detail/client-detail.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-detail {\n  margin-top: 32px;\n  background-color: #ffffff;\n  border: 1px solid #e7e7e7;\n  padding: 16px 32px;\n}\n.client-detail p {\n  margin-bottom: 8px;\n}\n.client-detail .dividing-line {\n  margin-bottom: 32px;\n  margin-top: 32px;\n}\n.client-detail-header h3 {\n  margin-top: 16px;\n}\n.client-detail-header p {\n  color: #595959;\n}\n.client-detail-section {\n  margin-bottom: 16px;\n}\n.client-detail-section .contact {\n  font-size: 15px;\n  font-weight: bold;\n}\n.containers {\n  margin-top: 32px;\n  padding: 16px 32px;\n}\n"

/***/ }),

/***/ "./src/app/components/clients/client-detail/client-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/clients/client-detail/client-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
    }
    ClientDetailComponent.prototype.ngOnInit = function () {
        this.client = this.clientService.getCurrentClient();
        this.isBillingAndShippingSame = this.compareBillingAndShippingAddress();
    };
    ClientDetailComponent.prototype.compareBillingAndShippingAddress = function () {
        return Object.is(this.client.billingAddress, this.client.shippingAddress);
    };
    ClientDetailComponent.prototype.editClient = function () {
        this.router.navigate(['/add-edit-client', this.client.id]);
    };
    ClientDetailComponent.prototype.deleteClient = function () {
        this.clientService.deleteClient(this.client.id);
        this.router.navigate(['/clients']);
    };
    ClientDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! ./client-detail.component.html */ "./src/app/components/clients/client-detail/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.less */ "./src/app/components/clients/client-detail/client-detail.component.less")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/clients/client-list/client-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/client-list/client-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"client-list\" >\r\n  <div class=\"client-list-header\">\r\n    <h3>Client List</h3>\r\n  </div>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    \r\n      <!-- Date Column -->\r\n      <ng-container matColumnDef=\"date\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.createdDate}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.displayName}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- Email Column -->\r\n      <ng-container matColumnDef=\"email\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\r\n      </ng-container>\r\n    \r\n      <!-- Detail Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disabled> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-icon matTooltip=\"View and Edit this company's information\" (click)=\"goToClientDetail(element)\">edit\r\n          </mat-icon>\r\n          <!-- <button \r\n              mat-raised-button matTooltip=\"View and Edit this company's information\" \r\n              aria-label=\"Button that displays a tooltip when focused or hovered over\"\r\n              (click)=\"goToClientDetail(element)\">\r\n              View Detail\r\n            </button> -->\r\n        </td>\r\n      </ng-container>\r\n    \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/clients/client-list/client-list.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/components/clients/client-list/client-list.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".client-list {\n  margin-top: 60px;\n  margin-bottom: 60px;\n}\n.client-list th.mat-sort-header-sorted {\n  color: black;\n}\n.client-list mat-icon:hover {\n  cursor: pointer;\n  color: #3f51b5;\n}\n"

/***/ }),

/***/ "./src/app/components/clients/client-list/client-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/clients/client-list/client-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services

var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.displayedColumns = ['date', 'name', 'email', 'actions'];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.clientService.getClients());
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ClientListComponent.prototype.goToClientDetail = function (client) {
        this.clientService.setCurrentClient(client);
        this.router.navigate(['/clients', client.id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ClientListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ClientListComponent.prototype, "paginator", void 0);
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/components/clients/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.less */ "./src/app/components/clients/client-list/client-list.component.less")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_3__["ClientService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/components/container/container.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/container/container.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-list\" *ngIf=\"containerList.length > 0\">\r\n  <h5>Container List</h5>\r\n  <div class=\"container-list__table\">\r\n    <table mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <!-- Product/Service Column -->\r\n      <ng-container matColumnDef=\"product/service\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Product/Service </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.product}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Description Column -->\r\n      <ng-container matColumnDef=\"description\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Quantity Column -->\r\n      <ng-container matColumnDef=\"quantity\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Quanity </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.quantity}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Rate Column -->\r\n      <ng-container matColumnDef=\"rate\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disabled> Rate </th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          {{element.rate}}\r\n        </td>\r\n      </ng-container>\r\n\r\n      <!-- Amount Column -->\r\n      <ng-container matColumnDef=\"amount\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Actions Column -->\r\n      <ng-container matColumnDef=\"actions\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Actions </th>\r\n        <td mat-cell *matCellDef=\"let element; let i = index;\">\r\n          <mat-icon matTooltip=\"View and edit container\" (click)=\"editContainer(element, i)\" class=\"edit-icon\">edit\r\n          </mat-icon>\r\n          <mat-icon matTooltip=\"View and edit container\" (click)=\"removeContainer(i)\" class=\"delete-icon\">delete\r\n          </mat-icon>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n</div>\r\n<div class=\"add-edit-container\">\r\n  <h5>Add Container</h5>\r\n  <form #clientForm=\"ngForm\" (ngSubmit)=\"addContainer()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Product/Service</mat-label>\r\n          <input matInput type=\"text\" name=\"product\" [(ngModel)]=\"currentContainer.product\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-5\">\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Description</mat-label>\r\n          <input matInput type=\"text\" name=\"description\" [(ngModel)]=\"currentContainer.description\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Qty</mat-label>\r\n          <input matInput type=\"number\" name=\"quantity\" [(ngModel)]=\"currentContainer.quantity\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-1\">\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Rate</mat-label>\r\n          <input matInput type=\"number\" name=\"rate\" [(ngModel)]=\"currentContainer.rate\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <mat-form-field appearance=\"standard\">\r\n          <mat-label>Amount</mat-label>\r\n          <input matInput type=\"number\" name=\"amount\" [(ngModel)]=\"currentContainer.amount\">\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-default\">Add</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/components/container/container.component.less":
/*!***************************************************************!*\
  !*** ./src/app/components/container/container.component.less ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  display: inline;\n}\n.container-item-description {\n  background-color: aqua;\n}\n.container-list {\n  margin-bottom: 16px;\n}\n.container-list__table {\n  border: 1px solid grey;\n  border-radius: 3px;\n}\n.container-list__table mat-icon:hover {\n  cursor: pointer;\n}\n.container-list__table .edit-icon {\n  color: #3f51b5;\n}\n.container-list__table .delete-icon {\n  color: red;\n  padding-left: 32px;\n}\n"

/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/container */ "./src/app/models/container.ts");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/invoice.service */ "./src/app/services/invoice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Models

// Services

var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(invoiceService) {
        this.invoiceService = invoiceService;
        this.displayedColumns = ['product/service', 'description', 'quantity', 'rate', 'amount', 'actions'];
    }
    ContainerComponent.prototype.ngOnInit = function () {
        this.currentContainer = new _models_container__WEBPACK_IMPORTED_MODULE_2__["Container"]();
        this.containerList = this.invoiceService.getContainerList();
        this.containerId = 1;
    };
    ContainerComponent.prototype.addContainer = function () {
        if (this.edittingPosition >= 0) {
            this.containerList[this.edittingPosition] = this.currentContainer;
            this.edittingPosition = -1;
        }
        else {
            this.currentContainer.id = this.containerId;
            this.containerList.push(this.currentContainer);
        }
        this.currentContainer = new _models_container__WEBPACK_IMPORTED_MODULE_2__["Container"]();
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.containerList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ContainerComponent.prototype.editContainer = function (element, i) {
        this.currentContainer = element;
        this.edittingPosition = i;
    };
    ContainerComponent.prototype.removeContainer = function (i) {
        this.containerList.splice(i, 1);
        // this.invoiceService.currentInvoice.container.splice(i, 1);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.containerList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ContainerComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ContainerComponent.prototype, "paginator", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.less */ "./src/app/components/container/container.component.less")]
        }),
        __metadata("design:paramtypes", [_services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/components/dash-board/welcome/welcome.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/dash-board/welcome/welcome.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center center\">\r\n  <section>\r\n    <h1>Activity</h1>\r\n    <p>Company's current activity</p>\r\n  </section>\r\n  <section>\r\n    <h1>Orders</h1>\r\n    <p>Company's most current orders</p>\r\n  </section>\r\n  <section>\r\n    <h1>Announcement</h1>\r\n    <p>Company's announcement</p>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dash-board/welcome/welcome.component.less":
/*!**********************************************************************!*\
  !*** ./src/app/components/dash-board/welcome/welcome.component.less ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome {\n  text-align: center;\n  margin-top: 16px;\n}\n"

/***/ }),

/***/ "./src/app/components/dash-board/welcome/welcome.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/dash-board/welcome/welcome.component.ts ***!
  \********************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/components/dash-board/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.less */ "./src/app/components/dash-board/welcome/welcome.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/invoice-form/invoice-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-form/invoice-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invoice\">\r\n  <div class=\"page-header\">\r\n    <h3>Create Invoice</h3>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"contrast-container\">\r\n        <div class=\"form\">\r\n          <form #clientForm=\"ngForm\" (ngSubmit)=\"submitClient()\">\r\n            <h5>Contact Information</h5>\r\n            <div class=\"row\">\r\n              <div class=\"row-item col-sm-12\">\r\n                <div class=\"client-name\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Company Name</mat-label>\r\n                    <input matInput placeholder=\"Company Name\" [(ngModel)]=\"testText\" type=\"text\"\r\n                      name=\"company\" (keyup)=\"searchClient(testText)\">\r\n                  </mat-form-field>\r\n                  <div class=\"client-list\" *ngIf=\"(searchedClients.length > 0) && isSearchingClient\">\r\n                    <ul>\r\n                      <li *ngFor=\"let client of searchedClients\" (click)=\"selectClient(client)\">{{client.displayName}}</li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"row-item col-sm-2\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Title</mat-label>\r\n                  <input matInput placeholder=\"Title\" [(ngModel)]=\"invoice.client.title\" type=\"text\" name=\"title\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"row-item col-sm-5\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>First Name</mat-label>\r\n                  <input matInput placeholder=\"First Name\" [(ngModel)]=\"invoice.client.firstName\" type=\"text\" name=\"first\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"row-item col-sm-5\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Last Name</mat-label>\r\n                  <input matInput placeholder=\"Last Name\" [(ngModel)]=\"invoice.client.lastName\" type=\"text\" name=\"last\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"row-item col-sm-6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Phone</mat-label>\r\n                  <input matInput placeholder=\"Phone number\" [(ngModel)]=\"invoice.client.phone\" type=\"tel\" name=\"phone\"\r\n                    (input)=\"phoneChange()\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"row-item col-sm-6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input matInput placeholder=\"Email\" [(ngModel)]=\"invoice.client.email\" type=\"email\" name=\"email\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <h5>Billing Address</h5>\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-6 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address 1</mat-label>\r\n                  <input matInput placeholder=\"Street and number\" [(ngModel)]=\"invoice.client.billingAddress.address1\"\r\n                    type=\"text\" name=\"billingAddress1\" (input)=\"billingAddress1Change($event)\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-6 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address 2</mat-label>\r\n                  <input matInput placeholder=\"Suite, unit, building, floor, etc.\" [(ngModel)]=\"invoice.client.billingAddress.address2\"\r\n                    type=\"text\" name=\"billingAddress2\" (input)=\"billingAddress2Change($event)\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>City</mat-label>\r\n                  <input matInput placeholder=\"City\" [(ngModel)]=\"invoice.client.billingAddress.city\" type=\"text\" name=\"billingCity\"\r\n                    (input)=\"billingCityChange($event)\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>State / Province</mat-label>\r\n                  <input matInput placeholder=\"State / Province\" [(ngModel)]=\"invoice.client.billingAddress.state\" type=\"text\"\r\n                    name=\"billingState\" (input)=\"billingStateChange($event)\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Zip Code</mat-label>\r\n                  <input matInput placeholder=\"Zip Code\" [(ngModel)]=\"invoice.client.billingAddress.zipCode\" type=\"text\"\r\n                    name=\"billingZipCode\" (input)=\"billingZipCodeChange($event)\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row shipping-address-label\">\r\n              <div class=\"col-sm-6\">\r\n                <h5>Shipping Address</h5>\r\n              </div>\r\n              <div class=\"col-sm-6 same-as-billing-checkbox\">\r\n                <mat-checkbox (click)=\"copyBilling()\" name=\"sameAsBilling\">Same as Billing Address</mat-checkbox>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"row-item col-sm-6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address 1</mat-label>\r\n                  <input matInput placeholder=\"Street and number\" [(ngModel)]=\"invoice.client.shippingAddress.address1\"\r\n                    type=\"text\" name=\"shippingAddress1\" [disabled]=\"sameAsBilling\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-6 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address 2</mat-label>\r\n                  <input matInput placeholder=\"Suite, unit, building, floor, etc.\" [(ngModel)]=\"invoice.client.shippingAddress.address2\"\r\n                    type=\"text\" name=\"shippingAddress2\" [disabled]=\"sameAsBilling\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>City</mat-label>\r\n                  <input matInput placeholder=\"City\" [(ngModel)]=\"invoice.client.shippingAddress.city\" type=\"text\" name=\"shippingCity\"\r\n                    [disabled]=\"sameAsBilling\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>State / Province</mat-label>\r\n                  <input matInput placeholder=\"State / Province\" [(ngModel)]=\"invoice.client.shippingAddress.state\"\r\n                    type=\"text\" name=\"shippingState\" [disabled]=\"sameAsBilling\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col-sm-4 row-item\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Zip Code</mat-label>\r\n                  <input matInput placeholder=\"Zip Code\" [(ngModel)]=\"invoice.client.shippingAddress.zipCode\" type=\"text\"\r\n                    name=\"shippingZipCode\" [disabled]=\"sameAsBilling\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"contrast-container\">\r\n        <p>This area will be determined later</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"contrast-container\">\r\n        <app-container></app-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button type=\"button\" (click)=\"submitInvoice()\">Submit Invoice</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/invoice/invoice-form/invoice-form.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-form/invoice-form.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form mat-form-field {\n  display: inline;\n}\n.form .client-list {\n  position: relative;\n  z-index: 1;\n  border: 1px solid gray;\n  border-radius: 5px;\n  background: #ffffff;\n  width: 100%;\n  top: -26px;\n}\n.form .client-list ul {\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  -webkit-padding-end: 0;\n          padding-inline-end: 0;\n}\n.form .client-list ul li {\n  list-style-type: none;\n  padding: 4px 16px 4px;\n}\n.form .client-list ul li:hover {\n  background: lightblue;\n}\n"

/***/ }),

/***/ "./src/app/components/invoice/invoice-form/invoice-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-form/invoice-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvoiceFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceFormComponent", function() { return InvoiceFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/client */ "./src/app/models/client.ts");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _services_invoice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/invoice.service */ "./src/app/services/invoice.service.ts");
/* harmony import */ var _helpers_debounce_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/debounce.helper */ "./src/app/helpers/debounce.helper.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Models

// Services


// Others

var InvoiceFormComponent = /** @class */ (function () {
    function InvoiceFormComponent(clientService, invoiceService, debounce) {
        var _this = this;
        this.clientService = clientService;
        this.invoiceService = invoiceService;
        this.debounce = debounce;
        this.sameAsBilling = false;
        this.addClientError = false;
        this.searchClient = this.debounce.debounce(function (clientName) {
            _this.searchedClients = [];
            _this.isSearchingClient = true;
            if (clientName === '') {
                _this.searchedClients = [];
                _this.invoice.client = new _models_client__WEBPACK_IMPORTED_MODULE_1__["Client"]();
            }
            else {
                for (var _i = 0, _a = _this.clientList; _i < _a.length; _i++) {
                    var client = _a[_i];
                    if (client.displayName.toLocaleLowerCase().includes(clientName.toLowerCase())) {
                        _this.searchedClients.push(client);
                    }
                }
            }
            console.log('Clients:', _this.searchedClients);
        }, 300, false);
    }
    InvoiceFormComponent.prototype.ngOnInit = function () {
        this.invoice = this.invoiceService.currentInvoice;
        this.clientList = this.clientService.clientList;
        this.searchedClients = [];
    };
    InvoiceFormComponent.prototype.submitInvoice = function () {
        // let invoiceNumber = 0;
        // console.log(this.invoice);
        // this.invoice.invoiceNumber = invoiceNumber;
        // invoiceNumber++;
        // this.invoiceService.addInvoice(this.invoice);
        // this.invoice = new Invoice();
        console.log('Container list:', this.invoiceService.currentInvoice);
    };
    InvoiceFormComponent.prototype.copyBilling = function () {
        if (!this.sameAsBilling) {
            this.invoice.client.shippingAddress = __assign({}, this.invoice.client.billingAddress);
        }
        else {
            this.invoice.client.shippingAddress.address1 = '';
            this.invoice.client.shippingAddress.address2 = '';
            this.invoice.client.shippingAddress.city = '';
            this.invoice.client.shippingAddress.state = '';
            this.invoice.client.shippingAddress.zipCode = '';
        }
    };
    InvoiceFormComponent.prototype.phoneChange = function () {
        // ToDo: format phone
    };
    InvoiceFormComponent.prototype.billingAddress1Change = function (event) {
        if (this.sameAsBilling) {
            this.invoice.client.shippingAddress.address1 = event.target.value;
        }
    };
    InvoiceFormComponent.prototype.billingAddress2Change = function (event) {
        if (this.sameAsBilling) {
            this.invoice.client.shippingAddress.address2 = event.target.value;
        }
    };
    InvoiceFormComponent.prototype.billingCityChange = function (event) {
        if (this.sameAsBilling) {
            this.invoice.client.shippingAddress.city = event.target.value;
        }
    };
    InvoiceFormComponent.prototype.billingStateChange = function (event) {
        if (this.sameAsBilling) {
            this.invoice.client.shippingAddress.state = event.target.value;
        }
    };
    InvoiceFormComponent.prototype.billingZipCodeChange = function (event) {
        if (this.sameAsBilling) {
            this.invoice.client.shippingAddress.zipCode = event.target.value;
        }
    };
    InvoiceFormComponent.prototype.selectClient = function (client) {
        this.isSearchingClient = false;
        this.testText = client.displayName;
        this.invoice.client = client;
    };
    InvoiceFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-form',
            template: __webpack_require__(/*! ./invoice-form.component.html */ "./src/app/components/invoice/invoice-form/invoice-form.component.html"),
            styles: [__webpack_require__(/*! ./invoice-form.component.less */ "./src/app/components/invoice/invoice-form/invoice-form.component.less")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_2__["ClientService"],
            _services_invoice_service__WEBPACK_IMPORTED_MODULE_3__["InvoiceService"],
            _helpers_debounce_helper__WEBPACK_IMPORTED_MODULE_4__["Debounce"]])
    ], InvoiceFormComponent);
    return InvoiceFormComponent;
}());



/***/ }),

/***/ "./src/app/components/invoice/invoice-list/invoice-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-list/invoice-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  invoice-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/invoice/invoice-list/invoice-list.component.less":
/*!*****************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-list/invoice-list.component.less ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/invoice/invoice-list/invoice-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/invoice/invoice-list/invoice-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: InvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceListComponent", function() { return InvoiceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceListComponent = /** @class */ (function () {
    function InvoiceListComponent() {
    }
    InvoiceListComponent.prototype.ngOnInit = function () { };
    InvoiceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice-list',
            template: __webpack_require__(/*! ./invoice-list.component.html */ "./src/app/components/invoice/invoice-list/invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./invoice-list.component.less */ "./src/app/components/invoice/invoice-list/invoice-list.component.less")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceListComponent);
    return InvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/header/header.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/navigation/header/header.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <div fxHide.gt-xs>\r\n    <button mat-icon-button (click)=\"onToggleSideNav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  <div>\r\n    <a routerLink=\"/\">LOGO</a>\r\n  </div>\r\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\r\n    <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\r\n      <li>\r\n        <a mat-list-item [matMenuTriggerFor]=\"invoice\">Invoices</a>\r\n        <mat-menu #invoice=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item (click)=\"onClose('/invoices')\">Invoices</button>\r\n          <button mat-menu-item (click)=\"onClose('/add-edit-invoice')\">New Invoice</button>\r\n        </mat-menu>\r\n      </li>\r\n      <li>\r\n        <a mat-list-item [matMenuTriggerFor]=\"client\">Clients</a>\r\n        <mat-menu #client=\"matMenu\" [overlapTrigger]=\"false\">\r\n          <button mat-menu-item (click)=\"onClose('/clients')\">Clients</button>\r\n          <button mat-menu-item (click)=\"onClose('/add-edit-client')\">New Client</button>\r\n        </mat-menu>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/components/navigation/header/header.component.less":
/*!********************************************************************!*\
  !*** ./src/app/components/navigation/header/header.component.less ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #ffffff;\n}\na:hover,\na:active {\n  color: lightgray;\n  cursor: pointer;\n}\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.nav-caption {\n  display: inline-block;\n  padding-left: 8px;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation/header/header.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/navigation/header/header.component.ts ***!
  \******************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
        this.sideNavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.onToggleSideNav = function () {
        this.sideNavToggle.emit();
    };
    HeaderComponent.prototype.onClose = function (path) {
        this.router.navigate(["" + path]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sideNavToggle", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/navigation/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/components/navigation/header/header.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/sidenav-list/sidenav-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/navigation/sidenav-list/sidenav-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\r\n  <a mat-list-item (click)=\"navListSectionClicked('invoice')\">\r\n    <p>Invoices</p>\r\n    <span *ngIf=\"this.currentSelection === 'invoice' && !expandable\" class=\"drop-down-icon\"><mat-icon>expand_more</mat-icon></span>\r\n    <span *ngIf=\"this.currentSelection === 'invoice' && expandable\" class=\"drop-down-icon\"><mat-icon>expand_less</mat-icon></span>\r\n  </a>\r\n  <div *ngIf=\"this.currentSelection === 'invoice' && expandable\">\r\n    <div class=\"sub-navbar\">\r\n      <p class=\"sub-navbar-title\">Invoices</p>\r\n    </div>\r\n    <div class=\"sub-navbar\">\r\n      <p class=\"sub-navbar-title\">New Invoice</p>\r\n    </div>\r\n  </div>\r\n  <a mat-list-item (click)=\"navListSectionClicked('client')\">\r\n    <p>Clients</p>\r\n    <span *ngIf=\"this.currentSelection === 'client' && !expandable\" class=\"drop-down-icon\"><mat-icon>expand_more</mat-icon></span>\r\n    <span *ngIf=\"this.currentSelection === 'client' && expandable\" class=\"drop-down-icon\"><mat-icon>expand_less</mat-icon></span>\r\n  </a>\r\n  <div *ngIf=\"this.currentSelection === 'client' && expandable\">\r\n    <div class=\"sub-navbar\" (click)=\"onClose('/clients')\">\r\n      <p class=\"sub-navbar-title\">Client List</p>\r\n    </div>\r\n    <div class=\"sub-navbar\" (click)=\"onClose('/add-edit-client')\">\r\n      <p class=\"sub-navbar-title\">New Client</p>\r\n    </div>\r\n  </div>\r\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/components/navigation/sidenav-list/sidenav-list.component.less":
/*!********************************************************************************!*\
  !*** ./src/app/components/navigation/sidenav-list/sidenav-list.component.less ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  text-decoration: none;\n  color: #ffffff;\n}\na p {\n  margin-bottom: 0;\n  width: 90%;\n}\na .drop-down-icon {\n  padding-top: 8px;\n}\n.sub-navbar {\n  padding-bottom: 4px;\n}\n.sub-navbar:hover {\n  background-color: #f8f9fa;\n}\n.sub-navbar .sub-navbar-title {\n  margin-left: 32px;\n  margin-bottom: 0;\n}\n"

/***/ }),

/***/ "./src/app/components/navigation/sidenav-list/sidenav-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/navigation/sidenav-list/sidenav-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(router) {
        this.router = router;
        this.closeSideNav = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        this.expandable = false;
    };
    SidenavListComponent.prototype.onClose = function (path) {
        this.closeSideNav.emit();
        this.router.navigate(["" + path]);
    };
    SidenavListComponent.prototype.navListSectionClicked = function (selection) {
        console.log('David Tram');
        this.expandable = !this.expandable;
        this.currentSelection = selection;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "closeSideNav", void 0);
    SidenavListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-list',
            template: __webpack_require__(/*! ./sidenav-list.component.html */ "./src/app/components/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-list.component.less */ "./src/app/components/navigation/sidenav-list/sidenav-list.component.less")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/helpers/debounce.helper.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/debounce.helper.ts ***!
  \********************************************/
/*! exports provided: Debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Debounce", function() { return Debounce; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Debounce = /** @class */ (function () {
    function Debounce() {
    }
    // tslint:disable-next-line
    Debounce.prototype.debounce = function (func, wait, immediate) {
        var timeout; // tslint:disable-line
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) {
                    func.apply(context, args);
                }
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) {
                func.apply(context, args);
            }
        };
    };
    Debounce = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Debounce);
    return Debounce;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTreeModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/models/address.ts":
/*!***********************************!*\
  !*** ./src/app/models/address.ts ***!
  \***********************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address() {
        this.address1 = '';
        this.address2 = '';
        this.city = '';
        this.state = '';
        this.zipCode = '';
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/models/client.ts":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: Client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return Client; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/app/models/address.ts");

var Client = /** @class */ (function () {
    function Client() {
        this.displayName = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.nameOnCheck = '';
        this.billingAddress = new _address__WEBPACK_IMPORTED_MODULE_0__["Address"]();
        this.shippingAddress = new _address__WEBPACK_IMPORTED_MODULE_0__["Address"]();
    }
    return Client;
}());



/***/ }),

/***/ "./src/app/models/container.ts":
/*!*************************************!*\
  !*** ./src/app/models/container.ts ***!
  \*************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
var Container = /** @class */ (function () {
    function Container() {
        this.id = null;
        this.product = null;
        this.quantity = null;
        this.rate = null;
        this.amount = null;
    }
    return Container;
}());



/***/ }),

/***/ "./src/app/models/invoice.ts":
/*!***********************************!*\
  !*** ./src/app/models/invoice.ts ***!
  \***********************************/
/*! exports provided: Invoice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invoice", function() { return Invoice; });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./src/app/models/client.ts");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_1__);


var Invoice = /** @class */ (function () {
    function Invoice() {
        this.invoiceNumber = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        this.client = new _client__WEBPACK_IMPORTED_MODULE_0__["Client"]();
        this.container = [];
    }
    return Invoice;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(router) {
        this.router = router;
        // Later clientList will be catched after a GET clientList request is made. Any thing relies on
        // clientList will check the cach first before making a new request
        this.clientList = [
            {
                id: '1',
                displayName: 'Bau',
                firstName: 'Daniel',
                lastName: 'Frank',
                email: 'danielf@gmail.com',
                phone: '3109721234',
                nameOnCheck: 'Company A',
                billingAddress: {
                    address1: '123 Main St',
                    address2: 'Suite #135',
                    city: 'Carson',
                    state: 'CA',
                    zipCode: '92345',
                    country: 'US'
                },
                shippingAddress: {
                    address1: '9802 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '90001'
                },
                createdDate: new Date('2015-04-25'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '2',
                displayName: 'Hao',
                firstName: 'David',
                lastName: 'Muller',
                email: 'davidm@gmail.com',
                phone: '3109725678',
                nameOnCheck: 'Company B',
                billingAddress: {
                    address1: '456 Western St',
                    address2: 'Suite #123',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789',
                    country: 'US'
                },
                shippingAddress: {
                    address1: '456 Western St',
                    address2: 'Suite #333',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789',
                    country: 'US'
                },
                createdDate: new Date('2015-04-25'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '3',
                displayName: 'Cuong',
                firstName: 'Tin',
                lastName: 'Authur',
                email: 'tint@gmail.com',
                phone: '3109729010',
                nameOnCheck: 'Company C',
                billingAddress: {
                    address1: '789 Marine St',
                    address2: 'Suite #444',
                    city: 'Irvine',
                    state: 'CA',
                    zipCode: '99012',
                    country: 'US'
                },
                shippingAddress: {
                    address1: '789 Marine St',
                    address2: 'Suite #687',
                    city: 'Irvine',
                    state: 'CA',
                    zipCode: '99012',
                    country: 'US'
                },
                createdDate: new Date('2015-05-23'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '4',
                displayName: 'Khuong',
                firstName: 'David',
                lastName: 'Muller',
                email: 'davidm@gmail.com',
                phone: '3109725678',
                nameOnCheck: 'Company B',
                billingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                shippingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                createdDate: new Date('2015-01-02'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '5',
                displayName: 'Tin',
                firstName: 'David',
                lastName: 'Muller',
                email: 'davidm@gmail.com',
                phone: '3109725678',
                nameOnCheck: 'Company B',
                billingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                shippingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                createdDate: new Date('2014-02-24'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '6',
                displayName: 'Vu',
                firstName: 'David',
                lastName: 'Muller',
                email: 'davidm@gmail.com',
                phone: '3109725678',
                nameOnCheck: 'Company B',
                billingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                shippingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                createdDate: new Date('2015-03-25'),
                updatedDate: new Date('2015-03-25')
            },
            {
                id: '7',
                displayName: 'Vinh',
                firstName: 'David',
                lastName: 'Muller',
                email: 'davidm@gmail.com',
                phone: '3109725678',
                nameOnCheck: 'Company B',
                billingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                shippingAddress: {
                    address1: '456 Western St',
                    city: 'Hawthorne',
                    state: 'CA',
                    zipCode: '96789'
                },
                createdDate: new Date('2015-03-25'),
                updatedDate: new Date('2015-03-25')
            }
        ];
    }
    ClientService.prototype.getClients = function () {
        return this.clientList;
    };
    ClientService.prototype.setCurrentClient = function (client) {
        this.currentClient = client;
    };
    ClientService.prototype.getCurrentClient = function () {
        if (!this.currentClient) {
            this.router.navigate(['/clients']);
            return;
        }
        return this.currentClient;
    };
    // Update this function to make http request to delete cleint
    ClientService.prototype.deleteClient = function (id) {
        this.clientList = this.clientList.filter(function (client) {
            return client.id !== id;
        });
    };
    ClientService.prototype.addClient = function (client) {
        this.clientList.push(client);
        return true; // change later when using a real db
    };
    ClientService.prototype.updateClient = function (client) {
        this.clientList.push(client);
        return true;
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/services/invoice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/invoice.service.ts ***!
  \*********************************************/
/*! exports provided: InvoiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceService", function() { return InvoiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_invoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/invoice */ "./src/app/models/invoice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Models

var InvoiceService = /** @class */ (function () {
    function InvoiceService() {
        console.log('service invoice');
        this.currentInvoice = new _models_invoice__WEBPACK_IMPORTED_MODULE_1__["Invoice"]();
    }
    InvoiceService.prototype.addInvoice = function (invoice) {
        console.log('Submited Invoice:', invoice);
    };
    InvoiceService.prototype.addContainer = function (container) {
        this.currentInvoice.container.push(container);
        console.log(this.currentInvoice.container);
    };
    InvoiceService.prototype.getContainerList = function () {
        return this.currentInvoice.container;
    };
    InvoiceService.prototype.getCurrentInvoice = function () {
        return this.currentInvoice;
    };
    InvoiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceService);
    return InvoiceService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);




// 3rd Party Lib.

if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\david.tram\Desktop\Angular4\features\tracking-invoice-shipment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map