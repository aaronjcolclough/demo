"use strict";
(self["webpackChunkdemo"] = self["webpackChunkdemo"] || []).push([["main"],{

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_side_nav_link_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/side-nav/link-card.component */ 7447);












function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AppComponent_link_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "link-card", 11);
} if (rf & 2) {
    const d_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", d_r4 == null ? null : d_r4.name);
} }
class AppComponent {
    constructor(_userApi, themer) {
        this._userApi = _userApi;
        this.themer = themer;
        this.Demos = _models__WEBPACK_IMPORTED_MODULE_0__.Demos;
    }
    ngOnInit() {
        this._userApi.storeAll();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.UserApi), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_1__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 6, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["color", "primary", 1, "app-toolbar", "sticky-top", "rounded-bottom"], ["routerLink", "/", 1, "cursor-pointer"], ["fxFlex", ""], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"], ["autosize", "", "fxFlexFill", "", 1, "container"], ["mode", "side", 3, "opened"], ["drawer", ""], ["fxFlex", "", 3, "name", 4, "ngFor", "ngForOf"], ["fxFlex", "", 3, "name"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "mat-toolbar", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Demos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_mat_icon_7_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "section", 6)(9, "mat-drawer-container", 7)(10, "mat-drawer", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AppComponent_link_card_12_Template, 1, 1, "link-card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("opened", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.Demos);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.FlexFillDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__.MatDrawerContainer, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _components_side_nav_link_card_component__WEBPACK_IMPORTED_MODULE_2__.LinkCardComponent], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_general_controls_searchbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/controls/searchbar.component */ 7355);
/* harmony import */ var _components_general_controls_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/controls/selector.component */ 4353);
/* harmony import */ var _components_general_info_demo_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/info/demo-info.component */ 4580);
/* harmony import */ var _components_general_layout_async_source_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/layout/async-source.component */ 5357);
/* harmony import */ var _components_general_layout_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/layout/card.component */ 8216);
/* harmony import */ var _components_general_layout_console_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/general/layout/console.component */ 2753);
/* harmony import */ var _components_side_nav_link_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/side-nav/link-card.component */ 7447);
/* harmony import */ var _components_table_base_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/table/base-table.component */ 8244);
/* harmony import */ var _components_table_user_user_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/table/user/user.table */ 6932);
/* harmony import */ var _dialogs_form_form_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialogs/form/form.dialog */ 6124);
/* harmony import */ var _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dialogs/confirm/confirm.dialog */ 5439);
/* harmony import */ var _dialogs_dynamic_dynamic_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialogs/dynamic/dynamic.dialog */ 30);
/* harmony import */ var _directives_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/dynamic-component-loader.directive */ 4253);
/* harmony import */ var _forms_user_form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./forms/user.form */ 1607);
/* harmony import */ var _pipes_component_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/component-name.pipe */ 8230);
/* harmony import */ var _routes_dynamic_component_loader_dynamic_component_loader_route__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/dynamic-component-loader/dynamic-component-loader.route */ 4974);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/home/home.route */ 4765);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 1484);

































class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__.Routes)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_general_controls_searchbar_component__WEBPACK_IMPORTED_MODULE_3__.SearchbarComponent, _components_general_controls_selector_component__WEBPACK_IMPORTED_MODULE_4__.SelectorComponent, _components_general_info_demo_info_component__WEBPACK_IMPORTED_MODULE_5__.DemoInfoComponent, _components_general_layout_async_source_component__WEBPACK_IMPORTED_MODULE_6__.AsyncSourceComponent, _components_general_layout_card_component__WEBPACK_IMPORTED_MODULE_7__.CardComponent, _components_general_layout_console_component__WEBPACK_IMPORTED_MODULE_8__.ConsoleComponent, _components_side_nav_link_card_component__WEBPACK_IMPORTED_MODULE_9__.LinkCardComponent, _components_table_base_table_component__WEBPACK_IMPORTED_MODULE_10__.BaseTableComponent, _components_table_user_user_table__WEBPACK_IMPORTED_MODULE_11__.UserTable, _dialogs_form_form_dialog__WEBPACK_IMPORTED_MODULE_12__.FormDialog, _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_13__.ConfirmDialog, _dialogs_dynamic_dynamic_dialog__WEBPACK_IMPORTED_MODULE_14__.DynamicDialog, _directives_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_15__.DynamicComponentLoaderDirective, _forms_user_form__WEBPACK_IMPORTED_MODULE_16__.UserForm, _pipes_component_name_pipe__WEBPACK_IMPORTED_MODULE_17__.ComponentNamePipe, _routes_dynamic_component_loader_dynamic_component_loader_route__WEBPACK_IMPORTED_MODULE_18__.DynamicComponentLoaderRoute, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_19__.HomeRoute],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule]
  });
})();

_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_components_general_layout_async_source_component__WEBPACK_IMPORTED_MODULE_6__.AsyncSourceComponent, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_27__.DefaultFlexDirective, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__.MatProgressBar, _components_general_controls_searchbar_component__WEBPACK_IMPORTED_MODULE_3__.SearchbarComponent];
}, function () {
  return [_angular_common__WEBPACK_IMPORTED_MODULE_26__.AsyncPipe];
});
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_dialogs_form_form_dialog__WEBPACK_IMPORTED_MODULE_12__.FormDialog, function () {
  return [_angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogActions, _directives_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_15__.DynamicComponentLoaderDirective];
}, function () {
  return [_pipes_component_name_pipe__WEBPACK_IMPORTED_MODULE_17__.ComponentNamePipe];
});
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_dialogs_dynamic_dynamic_dialog__WEBPACK_IMPORTED_MODULE_14__.DynamicDialog, function () {
  return [_angular_material_button__WEBPACK_IMPORTED_MODULE_30__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogActions, _directives_dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_15__.DynamicComponentLoaderDirective];
}, function () {
  return [_pipes_component_name_pipe__WEBPACK_IMPORTED_MODULE_17__.ComponentNamePipe];
});
_angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetComponentScope"](_routes_dynamic_component_loader_dynamic_component_loader_route__WEBPACK_IMPORTED_MODULE_18__.DynamicComponentLoaderRoute, function () {
  return [_components_table_user_user_table__WEBPACK_IMPORTED_MODULE_11__.UserTable];
}, []);

/***/ }),

/***/ 3591:
/*!*****************************************************************!*\
  !*** ./src/app/components/abstract/abstract-table.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTableComponent": () => (/* binding */ AbstractTableComponent)
/* harmony export */ });
class AbstractTableComponent {
    constructor(_liveAnnouncer) {
        this._liveAnnouncer = _liveAnnouncer;
        /** Announce the change in sort state for assistive technology. */
        this.announceSortChange = (sortState) => 
        // This example uses English messages. If your application supports
        // multiple language, you would internationalize these strings.
        // Furthermore, you can customize the message to add additional
        // details about the values being sorted.
        sortState.direction
            ? this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`)
            : this._liveAnnouncer.announce('Sorting cleared');
    }
}


/***/ }),

/***/ 276:
/*!**********************************************!*\
  !*** ./src/app/components/abstract/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTableComponent": () => (/* reexport safe */ _abstract_table_component__WEBPACK_IMPORTED_MODULE_0__.AbstractTableComponent)
/* harmony export */ });
/* harmony import */ var _abstract_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstract-table.component */ 3591);



/***/ }),

/***/ 5289:
/*!******************************************************!*\
  !*** ./src/app/components/general/controls/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponents": () => (/* binding */ ControlComponents)
/* harmony export */ });
/* harmony import */ var _searchbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./searchbar.component */ 7355);
/* harmony import */ var _selector_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selector.component */ 4353);


const ControlComponents = [
    _searchbar_component__WEBPACK_IMPORTED_MODULE_0__.SearchbarComponent,
    _selector_component__WEBPACK_IMPORTED_MODULE_1__.SelectorComponent
];


/***/ }),

/***/ 7355:
/*!********************************************************************!*\
  !*** ./src/app/components/general/controls/searchbar.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchbarComponent": () => (/* binding */ SearchbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);






const _c0 = ["searchbar"];
class SearchbarComponent {
    constructor(core) {
        this.core = core;
        this.label = 'Search';
        this.minimum = 2;
        this.search = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngAfterViewInit() {
        this.sub = this.core.generateInputObservable(this.searchbar)
            .subscribe((val) => {
            val && val.length >= this.minimum
                ? this.search.emit(val)
                : this.clear.emit();
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.CoreService)); };
SearchbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["searchbar"]], viewQuery: function SearchbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.searchbar = _t.first);
    } }, inputs: { label: "label", minimum: "minimum" }, outputs: { search: "search", clear: "clear" }, decls: 6, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch"], ["matInput", ""], ["searchbar", ""]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "mat-form-field")(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.label);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput], encapsulation: 2 });


/***/ }),

/***/ 4353:
/*!*******************************************************************!*\
  !*** ./src/app/components/general/controls/selector.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectorComponent": () => (/* binding */ SelectorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _layout_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/card.component */ 8216);







const _c0 = ["*"];
class SelectorComponent {
    constructor() {
        this.selected = false;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.baseOptions = 'background-card rounded cursor-pointer';
        this.deselectedOptions = `${this.baseOptions} card-outline-divider`;
        this.selectedOptions = `${this.baseOptions} card-outline-primary`;
        this.options = this.deselectedOptions;
        this.selectedIcon = 'radio_button_unchecked';
        this.updateSelected = () => {
            if (this.selected) {
                this.options = this.selectedOptions;
                this.selectedIcon = 'radio_button_checked';
            }
            else {
                this.options = this.deselectedOptions;
                this.selectedIcon = 'radio_button_unchecked';
            }
        };
    }
    ngOnChanges(changes) {
        if (changes.selected)
            this.updateSelected();
    }
}
SelectorComponent.ɵfac = function SelectorComponent_Factory(t) { return new (t || SelectorComponent)(); };
SelectorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectorComponent, selectors: [["selector"]], inputs: { data: "data", selected: "selected" }, outputs: { select: "select" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], ngContentSelectors: _c0, decls: 5, vars: 3, consts: [["layout", "row", "alignment", "space-between center", "width", "auto", 3, "options", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "background-default", "rounded-right", "p4"], [1, "m4", 3, "ngClass"]], template: function SelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectorComponent_Template_card_click_0_listener() { return ctx.select.emit(ctx.data); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section", 1)(3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.selected ? "color-primary" : "color-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedIcon);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _layout_card_component__WEBPACK_IMPORTED_MODULE_0__.CardComponent], encapsulation: 2 });


/***/ }),

/***/ 7996:
/*!*********************************************!*\
  !*** ./src/app/components/general/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlComponents": () => (/* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_0__.ControlComponents),
/* harmony export */   "DemoInfoComponent": () => (/* reexport safe */ _info__WEBPACK_IMPORTED_MODULE_1__.DemoInfoComponent),
/* harmony export */   "GeneralComponents": () => (/* binding */ GeneralComponents),
/* harmony export */   "InfoComponents": () => (/* reexport safe */ _info__WEBPACK_IMPORTED_MODULE_1__.InfoComponents),
/* harmony export */   "LayoutComponents": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_2__.LayoutComponents)
/* harmony export */ });
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls */ 5289);
/* harmony import */ var _info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./info */ 7458);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ 2050);



const GeneralComponents = [
    ..._controls__WEBPACK_IMPORTED_MODULE_0__.ControlComponents,
    ..._info__WEBPACK_IMPORTED_MODULE_1__.InfoComponents,
    ..._layout__WEBPACK_IMPORTED_MODULE_2__.LayoutComponents
];





/***/ }),

/***/ 4580:
/*!****************************************************************!*\
  !*** ./src/app/components/general/info/demo-info.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoInfoComponent": () => (/* binding */ DemoInfoComponent)
/* harmony export */ });
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




class DemoInfoComponent {
    set data(demo) {
        this._date = demo.date;
        this._message = demo.message;
        this._name = demo.name;
    }
    get return() { return; }
    get date() { return this._date; }
    get message() { return this._message; }
    get name() { return this._name; }
}
DemoInfoComponent.ɵfac = function DemoInfoComponent_Factory(t) { return new (t || DemoInfoComponent)(); };
DemoInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoInfoComponent, selectors: [["demo-info"]], decls: 9, vars: 6, consts: [[1, "example-card"]], template: function DemoInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content")(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 3, ctx.date, "dd MMM YYYY"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.message);
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], encapsulation: 2 });


/***/ }),

/***/ 7458:
/*!**************************************************!*\
  !*** ./src/app/components/general/info/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoInfoComponent": () => (/* reexport safe */ _demo_info_component__WEBPACK_IMPORTED_MODULE_0__.DemoInfoComponent),
/* harmony export */   "InfoComponents": () => (/* binding */ InfoComponents)
/* harmony export */ });
/* harmony import */ var _demo_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demo-info.component */ 4580);

const InfoComponents = [
    _demo_info_component__WEBPACK_IMPORTED_MODULE_0__.DemoInfoComponent
];



/***/ }),

/***/ 5357:
/*!*********************************************************************!*\
  !*** ./src/app/components/general/layout/async-source.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSourceComponent": () => (/* binding */ AsyncSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


function AsyncSourceComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 2);
  }
}

function AsyncSourceComponent_ng_container_2_section_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayout", ctx_r4.layout)("fxLayoutAlign", ctx_r4.alignment);
  }
}

function AsyncSourceComponent_ng_container_2_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.emptyLabel);
  }
}

function AsyncSourceComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 3)(2, "searchbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("search", function AsyncSourceComponent_ng_container_2_Template_searchbar_search_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.src.onSearch($event));
    })("clear", function AsyncSourceComponent_ng_container_2_Template_searchbar_clear_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.src.onSearch(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-paginator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function AsyncSourceComponent_ng_container_2_Template_mat_paginator_page_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.src.onPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AsyncSourceComponent_ng_container_2_section_4_Template, 2, 2, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AsyncSourceComponent_ng_container_2_p_5_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const query_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayout", ctx_r2.inlineControls ? "row | wrap" : "column")("fxLayoutAlign", ctx_r2.inlineControls ? "start center" : "start stretch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r2.searchLabel)("minimum", ctx_r2.searchMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.pageStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", query_r3 == null ? null : query_r3.totalCount)("pageSize", query_r3 == null ? null : query_r3.pageSize)("pageSizeOptions", ctx_r2.src.pageSizeOptions)("pageIndex", (query_r3 == null ? null : query_r3.page) - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (query_r3.data == null ? null : query_r3.data.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((query_r3 == null ? null : query_r3.data == null ? null : query_r3.data.length) > 0));
  }
}

const _c0 = ["*"];
class AsyncSourceComponent {
  constructor() {
    this.inlineControls = true;
    this.searchLabel = 'Search';
    this.searchMin = 1;
    this.emptyLabel = 'No Data Available';
    this.layout = 'row | wrap';
    this.alignment = 'start start';
  }

}

AsyncSourceComponent.ɵfac = function AsyncSourceComponent_Factory(t) {
  return new (t || AsyncSourceComponent)();
};

AsyncSourceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AsyncSourceComponent,
  selectors: [["async-source"]],
  inputs: {
    src: "src",
    inlineControls: "inlineControls",
    searchLabel: "searchLabel",
    searchMin: "searchMin",
    emptyLabel: "emptyLabel",
    layout: "layout",
    alignment: "alignment",
    pageStyle: "pageStyle"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 4,
  consts: [["loading", ""], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", "color", "accent"], [1, "p8", 3, "fxLayout", "fxLayoutAlign"], ["fxFlex", "", 3, "label", "minimum", "search", "clear"], [3, "length", "pageSize", "pageSizeOptions", "pageIndex", "page"], ["class", "p8", 3, "fxLayout", "fxLayoutAlign", 4, "ngIf"], ["class", "mat-subheading-2 mx12 my4", 4, "ngIf"], [1, "mat-subheading-2", "mx12", "my4"]],
  template: function AsyncSourceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AsyncSourceComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AsyncSourceComponent_ng_container_2_Template, 6, 12, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.src.result$))("ngIfElse", _r0);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 8216:
/*!*************************************************************!*\
  !*** ./src/app/components/general/layout/card.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);


const _c0 = ["*"];
class CardComponent {
    constructor() {
        this.width = 'auto';
        this.minWidth = 320;
        this.maxWidth = 420;
        this.layout = 'column';
        this.alignment = 'start stretch';
        this.options = 'card-outline-divider rounded';
        this.padding = 0;
        this.margin = 4;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["card"]], inputs: { width: "width", minWidth: "minWidth", maxWidth: "maxWidth", layout: "layout", alignment: "alignment", options: "options", padding: "padding", margin: "margin" }, ngContentSelectors: _c0, decls: 2, vars: 14, consts: [[3, "fxLayout", "fxLayoutAlign"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("min-width", ctx.minWidth, "px")("max-width", ctx.maxWidth, "px")("padding", ctx.padding, "px")("margin", ctx.margin, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayout", ctx.layout)("fxLayoutAlign", ctx.alignment);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective], encapsulation: 2 });


/***/ }),

/***/ 2753:
/*!****************************************************************!*\
  !*** ./src/app/components/general/layout/console.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsoleComponent": () => (/* binding */ ConsoleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);








const _c0 = ["console"];
function ConsoleComponent_mat_divider_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
} }
function ConsoleComponent_section_8_ng_container_2_pre_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", message_r6.isError ? "color-red" : "color-default");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r6.message);
} }
function ConsoleComponent_section_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsoleComponent_section_8_ng_container_2_pre_1_Template, 2, 2, "pre", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.messages);
} }
function ConsoleComponent_section_8_pre_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Output Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsoleComponent_section_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsoleComponent_section_8_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ConsoleComponent_section_8_pre_3_Template, 2, 0, "pre", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r1.height, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.consoleStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.messages == null ? null : ctx_r1.messages.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !((ctx_r1.messages == null ? null : ctx_r1.messages.length) > 0));
} }
class ConsoleComponent {
    constructor() {
        this.height = 250;
        this.expanded = true;
        this.consoleStyle = 'p8';
        this.messageStyle = 'm4';
        this.messages = new Array();
        this.scrollConsole = () => {
            if (this.console?.nativeElement) {
                this.console.nativeElement.scrollTop = this.console.nativeElement.scrollHeight + 100;
            }
        };
        this.toggleExpanded = () => this.expanded = !this.expanded;
    }
    ngAfterViewChecked() {
        this.scrollConsole();
    }
}
ConsoleComponent.ɵfac = function ConsoleComponent_Factory(t) { return new (t || ConsoleComponent)(); };
ConsoleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsoleComponent, selectors: [["console"]], viewQuery: function ConsoleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.console = _t.first);
    } }, inputs: { height: "height", expanded: "expanded", consoleStyle: "consoleStyle", messageStyle: "messageStyle", messages: "messages" }, decls: 9, vars: 3, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "m4", "card-outline-divider", "rounded"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "m8"], ["mat-icon-button", "", 1, "m8", 3, "click"], [4, "ngIf"], ["class", "console", 3, "ngClass", "height", 4, "ngIf"], [1, "console", 3, "ngClass"], ["console", ""], ["class", "m4 bold", 4, "ngIf"], ["class", "m4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "m4", 3, "ngClass"], [1, "m4", "bold"]], template: function ConsoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "section", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Console");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsoleComponent_Template_button_click_4_listener() { return ctx.toggleExpanded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsoleComponent_mat_divider_7_Template, 1, 0, "mat-divider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConsoleComponent_section_8_Template, 4, 5, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.expanded ? "keyboard_arrow_down" : "keyboard_arrow_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon], styles: [".console[_ngcontent-%COMP%] {\n  font-family: \"Consolas\", \"Courier New\", Courier, monospace;\n  overflow: auto;\n}\n.console[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwwREFBQTtFQUNBLGNBQUE7QUFDSjtBQUNJO0VBQ0kseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FBQ1IiLCJmaWxlIjoiY29uc29sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25zb2xlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ29uc29sYXMnLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICBwcmUge1xyXG4gICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 2050:
/*!****************************************************!*\
  !*** ./src/app/components/general/layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponents": () => (/* binding */ LayoutComponents)
/* harmony export */ });
/* harmony import */ var _async_source_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./async-source.component */ 5357);
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.component */ 8216);
/* harmony import */ var _console_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./console.component */ 2753);



const LayoutComponents = [_async_source_component__WEBPACK_IMPORTED_MODULE_0__.AsyncSourceComponent, _card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent, _console_component__WEBPACK_IMPORTED_MODULE_2__.ConsoleComponent];

/***/ }),

/***/ 9771:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbstractTableComponent": () => (/* reexport safe */ _abstract__WEBPACK_IMPORTED_MODULE_3__.AbstractTableComponent),
/* harmony export */   "BaseTableComponent": () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_2__.BaseTableComponent),
/* harmony export */   "Components": () => (/* binding */ Components),
/* harmony export */   "ControlComponents": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.ControlComponents),
/* harmony export */   "DemoInfoComponent": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.DemoInfoComponent),
/* harmony export */   "GeneralComponents": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.GeneralComponents),
/* harmony export */   "InfoComponents": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.InfoComponents),
/* harmony export */   "LayoutComponents": () => (/* reexport safe */ _general__WEBPACK_IMPORTED_MODULE_0__.LayoutComponents),
/* harmony export */   "LinkCardComponent": () => (/* reexport safe */ _side_nav__WEBPACK_IMPORTED_MODULE_1__.LinkCardComponent),
/* harmony export */   "SidenavComponents": () => (/* reexport safe */ _side_nav__WEBPACK_IMPORTED_MODULE_1__.SidenavComponents),
/* harmony export */   "TableComponents": () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_2__.TableComponents),
/* harmony export */   "UserTable": () => (/* reexport safe */ _table__WEBPACK_IMPORTED_MODULE_2__.UserTable)
/* harmony export */ });
/* harmony import */ var _general__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general */ 7996);
/* harmony import */ var _side_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-nav */ 2836);
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table */ 7764);
/* harmony import */ var _abstract__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./abstract */ 276);



const Components = [
    ..._general__WEBPACK_IMPORTED_MODULE_0__.GeneralComponents,
    ..._side_nav__WEBPACK_IMPORTED_MODULE_1__.SidenavComponents,
    ..._table__WEBPACK_IMPORTED_MODULE_2__.TableComponents
];






/***/ }),

/***/ 2836:
/*!**********************************************!*\
  !*** ./src/app/components/side-nav/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkCardComponent": () => (/* reexport safe */ _link_card_component__WEBPACK_IMPORTED_MODULE_0__.LinkCardComponent),
/* harmony export */   "SidenavComponents": () => (/* binding */ SidenavComponents)
/* harmony export */ });
/* harmony import */ var _link_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link-card.component */ 7447);

const SidenavComponents = [
    _link_card_component__WEBPACK_IMPORTED_MODULE_0__.LinkCardComponent
];



/***/ }),

/***/ 7447:
/*!************************************************************!*\
  !*** ./src/app/components/side-nav/link-card.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkCardComponent": () => (/* binding */ LinkCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




const _c0 = function (a1) { return ["/", a1]; };
class LinkCardComponent {
}
LinkCardComponent.ɵfac = function LinkCardComponent_Factory(t) { return new (t || LinkCardComponent)(); };
LinkCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkCardComponent, selectors: [["link-card"]], inputs: { name: "name" }, decls: 2, vars: 6, consts: [["fxLayoutAlign", "center center", 3, "routerLink"]], template: function LinkCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("border-radius", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 8244:
/*!**********************************************************!*\
  !*** ./src/app/components/table/base-table.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTableComponent": () => (/* binding */ BaseTableComponent)
/* harmony export */ });
/* harmony import */ var D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _abstract_abstract_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract/abstract-table.component */ 3591);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);








class BaseTableComponent extends _abstract_abstract_table_component__WEBPACK_IMPORTED_MODULE_1__.AbstractTableComponent {
  constructor(liveAnnouncer, api) {
    super(liveAnnouncer);
    this.api = api;
    this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();

    this.applyFilter = event => {
      const filterValue = event.target.value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource?.paginator) {
        this.dataSource?.paginator?.firstPage();
      }
    };
  }

  ngOnInit() {
    var _this = this;

    return (0,D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sub = _this.api.entities$.subscribe(x => _this.dataSource.data = x);
    })();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

BaseTableComponent.ɵfac = function BaseTableComponent_Factory(t) {
  return new (t || BaseTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](new _angular_core__WEBPACK_IMPORTED_MODULE_2__.InjectionToken('api')));
};

BaseTableComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: BaseTableComponent,
  selectors: [["base-table"]],
  viewQuery: function BaseTableComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__.MatPaginator, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    }
  },
  outputs: {
    edit: "edit"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 0,
  vars: 0,
  template: function BaseTableComponent_Template(rf, ctx) {},
  encapsulation: 2
});

/***/ }),

/***/ 7764:
/*!*******************************************!*\
  !*** ./src/app/components/table/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTableComponent": () => (/* reexport safe */ _base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent),
/* harmony export */   "TableComponents": () => (/* binding */ TableComponents),
/* harmony export */   "UserTable": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.UserTable)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 7990);
/* harmony import */ var _base_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-table.component */ 8244);


const TableComponents = [
    _base_table_component__WEBPACK_IMPORTED_MODULE_1__.BaseTableComponent,
    _user__WEBPACK_IMPORTED_MODULE_0__.UserTable
];




/***/ }),

/***/ 7990:
/*!************************************************!*\
  !*** ./src/app/components/table/user/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTable": () => (/* reexport safe */ _user_table__WEBPACK_IMPORTED_MODULE_0__.UserTable)
/* harmony export */ });
/* harmony import */ var _user_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.table */ 6932);



/***/ }),

/***/ 6932:
/*!*****************************************************!*\
  !*** ./src/app/components/table/user/user.table.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserTable": () => (/* binding */ UserTable)
/* harmony export */ });
/* harmony import */ var _base_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-table.component */ 8244);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services */ 1866);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 5288);











function UserTable_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserTable_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", el_r12.id, " ");
} }
function UserTable_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserTable_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", el_r13.name, " ");
} }
function UserTable_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function UserTable_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const el_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", el_r14.email, " ");
} }
function UserTable_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("text-align", "right");
} }
function UserTable_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 21)(1, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserTable_td_20_Template_mat_icon_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const el_r15 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r16.edit.emit(el_r15)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("text-align", "right");
} }
function UserTable_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
function UserTable_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 24);
} }
function UserTable_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 25)(1, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("No data matching the filter \"", _r0.value, "\"");
} }
const _c0 = function () { return [5, 10, 25, 100]; };
class UserTable extends _base_table_component__WEBPACK_IMPORTED_MODULE_0__.BaseTableComponent {
    constructor(liveAnnouncer, userApi) {
        super(liveAnnouncer, userApi);
        this.displayedColumns = ['position', 'name', 'email', 'actions'];
    }
}
UserTable.ɵfac = function UserTable_Factory(t) { return new (t || UserTable)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_1__.UserApi)); };
UserTable.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserTable, selectors: [["user-table"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]], decls: 24, vars: 5, consts: [["fxLayout", "column", "fxLayoutAlign", "start stretch", 1, "mat-elevation-z8", "p8", "full-height"], ["appearance", "standard", "fxFlex", ""], ["matInput", "", "placeholder", "Ex. Mia", "fxFlex", "", 3, "keyup"], ["input", ""], ["aria-label", "Select page of users", 3, "pageSizeOptions"], ["mat-table", "", "matSort", "", 1, "min-full-width", 3, "dataSource", "matSortChange"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "email"], ["matColumnDef", "actions"], ["mat-header-cell", "", 3, "textAlign", 4, "matHeaderCellDef"], ["mat-cell", "", "mat-icon-button", "", 3, "textAlign", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", "mat-icon-button", ""], [1, "scale-75", "cursor-pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], ["colspan", "4", 1, "mat-cell"]], template: function UserTable_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section")(2, "mat-form-field", 1)(3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup", function UserTable_Template_input_keyup_5_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mat-paginator", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("matSortChange", function UserTable_Template_table_matSortChange_8_listener($event) { return ctx.announceSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, UserTable_th_10_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, UserTable_td_11_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](12, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, UserTable_th_13_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, UserTable_td_14_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](15, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, UserTable_th_16_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, UserTable_td_17_Template, 2, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, UserTable_th_19_Template, 2, 2, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, UserTable_td_20_Template, 3, 2, "td", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, UserTable_tr_21_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, UserTable_tr_22_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, UserTable_tr_23_Template, 3, 1, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatNoDataRow], encapsulation: 2 });


/***/ }),

/***/ 5439:
/*!***************************************************!*\
  !*** ./src/app/dialogs/confirm/confirm.dialog.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialog": () => (/* binding */ ConfirmDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);




class ConfirmDialog {
    constructor(data) {
        this.data = data;
    }
    ngOnInit() {
        if (this.data) {
            this.data.title = this.data.title
                ? this.data.title
                : 'Confirm Action?';
            this.data.content = this.data.content
                ? this.data.content
                : 'Are you sure you would like to perform this action?';
        }
        else {
            this.data = {
                title: 'Confirm Action?',
                content: 'Are you sure you would like to perform this action?'
            };
        }
    }
}
ConfirmDialog.ɵfac = function ConfirmDialog_Factory(t) { return new (t || ConfirmDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ConfirmDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialog, selectors: [["confirm-dialog"]], decls: 11, vars: 4, consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["mat-button", "", 3, "mat-dialog-close"], ["mat-button", "", "color", "warn", 3, "mat-dialog-close"]], template: function ConfirmDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content")(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions], encapsulation: 2 });


/***/ }),

/***/ 9508:
/*!******************************************!*\
  !*** ./src/app/dialogs/confirm/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialog": () => (/* reexport safe */ _confirm_dialog__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialog)
/* harmony export */ });
/* harmony import */ var _confirm_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm.dialog */ 5439);



/***/ }),

/***/ 30:
/*!***************************************************!*\
  !*** ./src/app/dialogs/dynamic/dynamic.dialog.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDialog": () => (/* binding */ DynamicDialog)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var src_app_directives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/directives */ 2897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);





function DynamicDialog_ng_template_5_Template(rf, ctx) { }
class DynamicDialog {
    constructor(_dialogRef, data) {
        this._dialogRef = _dialogRef;
        this.data = data;
        this.load = () => {
            this.outletRef = this.outlet?.viewContainerRef?.createComponent(this.data.component);
            this.outletRef.instance.data = this.data?.inputData;
            this.outletRef?.changeDetectorRef?.detectChanges();
        };
    }
    ngAfterViewInit() {
        this.load();
    }
}
DynamicDialog.ɵfac = function DynamicDialog_Factory(t) { return new (t || DynamicDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA)); };
DynamicDialog.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DynamicDialog, selectors: [["dynamic-dialog"]], viewQuery: function DynamicDialog_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](src_app_directives__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
    } }, decls: 9, vars: 3, consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["loaderOutlet", ""], ["mat-stroked-button", "", "mat-dialog-close", ""]], template: function DynamicDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "componentName");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DynamicDialog_ng_template_5_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx.data == null ? null : ctx.data.component == null ? null : ctx.data.component.name));
    } }, encapsulation: 2 });


/***/ }),

/***/ 4718:
/*!******************************************!*\
  !*** ./src/app/dialogs/dynamic/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicDialog": () => (/* reexport safe */ _dynamic_dialog__WEBPACK_IMPORTED_MODULE_0__.DynamicDialog)
/* harmony export */ });
/* harmony import */ var _dynamic_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic.dialog */ 30);



/***/ }),

/***/ 6124:
/*!*********************************************!*\
  !*** ./src/app/dialogs/form/form.dialog.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialog": () => (/* binding */ FormDialog)
/* harmony export */ });
/* harmony import */ var D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dynamic */ 4718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);






function FormDialog_ng_template_5_Template(rf, ctx) {}

class FormDialog extends _dynamic__WEBPACK_IMPORTED_MODULE_1__.DynamicDialog {
  constructor(dialogRef, data) {
    var _this;

    super(dialogRef, {
      component: data.component,
      inputData: data.inputData
    });
    _this = this;
    this.data = data;
    this.save = /*#__PURE__*/(0,D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const res = yield _this.data.dataSvc.save(_this.outletRef?.instance?.value?.value);
      res && _this._dialogRef.close(res);
    });
  }

}

FormDialog.ɵfac = function FormDialog_Factory(t) {
  return new (t || FormDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
};

FormDialog.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormDialog,
  selectors: [["form-dialog"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 11,
  vars: 4,
  consts: [[1, "mat-typography"], ["mat-dialog-title", ""], ["loaderOutlet", ""], ["mat-stroked-button", "", 1, "color-green", 3, "click"], ["mat-stroked-button", "", 3, "mat-dialog-close"]],
  template: function FormDialog_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "componentName");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-dialog-content");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FormDialog_ng_template_5_Template, 0, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-dialog-actions")(7, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FormDialog_Template_button_click_7_listener() {
        return ctx.save();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Save");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, ctx.data == null ? null : ctx.data.component == null ? null : ctx.data.component.name));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mat-dialog-close", false);
    }
  },
  encapsulation: 2
});

/***/ }),

/***/ 2683:
/*!***************************************!*\
  !*** ./src/app/dialogs/form/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormDialog": () => (/* reexport safe */ _form_dialog__WEBPACK_IMPORTED_MODULE_0__.FormDialog),
/* harmony export */   "FormDialogs": () => (/* binding */ FormDialogs)
/* harmony export */ });
/* harmony import */ var _form_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form.dialog */ 6124);

const FormDialogs = [
    _form_dialog__WEBPACK_IMPORTED_MODULE_0__.FormDialog
];



/***/ }),

/***/ 3328:
/*!**********************************!*\
  !*** ./src/app/dialogs/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmDialog": () => (/* reexport safe */ _confirm__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialog),
/* harmony export */   "Dialogs": () => (/* binding */ Dialogs),
/* harmony export */   "DynamicDialog": () => (/* reexport safe */ _dynamic__WEBPACK_IMPORTED_MODULE_1__.DynamicDialog),
/* harmony export */   "FormDialog": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.FormDialog),
/* harmony export */   "FormDialogs": () => (/* reexport safe */ _form__WEBPACK_IMPORTED_MODULE_2__.FormDialogs)
/* harmony export */ });
/* harmony import */ var _confirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm */ 9508);
/* harmony import */ var _dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic */ 4718);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ 2683);



const Dialogs = [
    ..._form__WEBPACK_IMPORTED_MODULE_2__.FormDialogs,
    _confirm__WEBPACK_IMPORTED_MODULE_0__.ConfirmDialog,
    _dynamic__WEBPACK_IMPORTED_MODULE_1__.DynamicDialog
];





/***/ }),

/***/ 4253:
/*!******************************************************************!*\
  !*** ./src/app/directives/dynamic-component-loader.directive.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentLoaderDirective": () => (/* binding */ DynamicComponentLoaderDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DynamicComponentLoaderDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
DynamicComponentLoaderDirective.ɵfac = function DynamicComponentLoaderDirective_Factory(t) { return new (t || DynamicComponentLoaderDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef)); };
DynamicComponentLoaderDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DynamicComponentLoaderDirective, selectors: [["", "loaderOutlet", ""]] });


/***/ }),

/***/ 2897:
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Directives": () => (/* binding */ Directives),
/* harmony export */   "DynamicComponentLoaderDirective": () => (/* reexport safe */ _dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderDirective)
/* harmony export */ });
/* harmony import */ var _dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-component-loader.directive */ 4253);

const Directives = [
    _dynamic_component_loader_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderDirective
];



/***/ }),

/***/ 4953:
/*!********************************!*\
  !*** ./src/app/forms/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Forms": () => (/* binding */ Forms),
/* harmony export */   "UserForm": () => (/* reexport safe */ _user_form__WEBPACK_IMPORTED_MODULE_0__.UserForm)
/* harmony export */ });
/* harmony import */ var _user_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.form */ 1607);

const Forms = [
    _user_form__WEBPACK_IMPORTED_MODULE_0__.UserForm
];



/***/ }),

/***/ 1607:
/*!************************************!*\
  !*** ./src/app/forms/user.form.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserForm": () => (/* binding */ UserForm)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);




class UserForm {
    set data(data) { this._form = data; }
    get value() { return this._form; }
}
UserForm.ɵfac = function UserForm_Factory(t) { return new (t || UserForm)(); };
UserForm.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserForm, selectors: [["user-form"]], decls: 60, vars: 1, consts: [[3, "formGroup"], ["appearance", "fill"], ["matInput", "", "formControlName", "name"], ["matInput", "", "formControlName", "username"], ["matInput", "", "formControlName", "email"], ["formGroupName", "address"], ["matInput", "", "formControlName", "street"], ["matInput", "", "formControlName", "suite"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "zipcode"], ["formGroupName", "geo"], ["matInput", "", "formControlName", "lat"], ["matInput", "", "formControlName", "lng"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "website"], ["formGroupName", "company"], ["matInput", "", "formControlName", "catchPhrase"], ["matInput", "", "formControlName", "bs"]], template: function UserForm_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 1)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 1)(10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 1)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "street");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 1)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "suite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field", 1)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "city");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 1)(27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "zipcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](30, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 1)(32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "lat");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 1)(36, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "lng");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 1)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-form-field", 1)(44, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](47, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 1)(49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-form-field", 1)(53, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "catchPhrase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 1)(57, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "bs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.value);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput], encapsulation: 2 });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 712);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.GridModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.GridModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_10__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_23__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_27__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_28__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_29__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_30__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltipModule] }); })();


/***/ }),

/***/ 6914:
/*!*******************************************!*\
  !*** ./src/app/models/api/base/entity.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
class Entity {
    constructor(id) {
        this._id = id;
    }
    get id() { return this._id; }
}


/***/ }),

/***/ 3868:
/*!******************************************!*\
  !*** ./src/app/models/api/base/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* reexport safe */ _entity__WEBPACK_IMPORTED_MODULE_0__.Entity)
/* harmony export */ });
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ 6914);



/***/ }),

/***/ 1261:
/*!*************************************!*\
  !*** ./src/app/models/api/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.Entity),
/* harmony export */   "User": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_0__.User)
/* harmony export */ });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ 328);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ 3868);




/***/ }),

/***/ 328:
/*!************************************!*\
  !*** ./src/app/models/api/user.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ 3868);

class User extends _base__WEBPACK_IMPORTED_MODULE_0__.Entity {
    constructor(user) {
        super(user?.id ?? 0);
        this._name = user.name;
        this._username = user.username;
        this._email = user.email;
        this._address = user.address;
        this._phone = user.phone;
        this._website = user.website;
        this._company = user.company;
    }
    get name() { return this._name; }
    get username() { return this._username; }
    get email() { return this._email; }
    get address() { return this._address; }
    get phone() { return this._phone; }
    get website() { return this._website; }
    get company() { return this._company; }
}


/***/ }),

/***/ 3296:
/*!****************************************!*\
  !*** ./src/app/models/consts/demos.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demos": () => (/* binding */ Demos)
/* harmony export */ });
/* harmony import */ var src_app_routes_dynamic_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/routes/dynamic-component-loader */ 6155);
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo */ 4277);


const Demos = [
    new _demo__WEBPACK_IMPORTED_MODULE_1__.Demo(src_app_routes_dynamic_component_loader__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderRoute, new Date(2022, 10, 5, 18, 0, 0, 0), 'dynamic-component-loader', 'A dynamic component loader is a directive constructed with a viewContainerRef. When the directive is place on a ng-template it transforms the element into an outlet for a component. This becomes extremely useful with components like dialogs since content projection is not a possibility with dialogs.')
];


/***/ }),

/***/ 1153:
/*!*****************************************************!*\
  !*** ./src/app/models/consts/forms/address-form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateAddressForm": () => (/* binding */ GenerateAddressForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _geo_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geo-form */ 3388);


const GenerateAddressForm = (address, fb) => fb.group({
    street: [address?.street, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
    suite: [address?.suite, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
    city: [address?.city, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
    zipcode: [address?.zipcode, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
    geo: (0,_geo_form__WEBPACK_IMPORTED_MODULE_0__.GenerateGeoForm)(address?.geo, fb)
});


/***/ }),

/***/ 4801:
/*!*****************************************************!*\
  !*** ./src/app/models/consts/forms/company-form.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateCompanyForm": () => (/* binding */ GenerateCompanyForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);

const GenerateCompanyForm = (company, fb) => fb.group({
    name: [company?.name, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
    catchPhrase: [company?.catchPhrase, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
    bs: [company?.bs, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
});


/***/ }),

/***/ 977:
/*!****************************************************!*\
  !*** ./src/app/models/consts/forms/entity-form.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateEntityForm": () => (/* binding */ GenerateEntityForm)
/* harmony export */ });
const GenerateEntityForm = (e, fb) => fb.group({
    id: [e?.id]
});


/***/ }),

/***/ 3388:
/*!*************************************************!*\
  !*** ./src/app/models/consts/forms/geo-form.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateGeoForm": () => (/* binding */ GenerateGeoForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 2508);

const GenerateGeoForm = (geo, fb) => fb.group({
    lat: [geo?.lat, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
    lng: [geo?.lng, _angular_forms__WEBPACK_IMPORTED_MODULE_0__.Validators.required],
});


/***/ }),

/***/ 7857:
/*!**********************************************!*\
  !*** ./src/app/models/consts/forms/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateEntityForm": () => (/* reexport safe */ _entity_form__WEBPACK_IMPORTED_MODULE_0__.GenerateEntityForm),
/* harmony export */   "GenerateUserForm": () => (/* reexport safe */ _user_form__WEBPACK_IMPORTED_MODULE_1__.GenerateUserForm)
/* harmony export */ });
/* harmony import */ var _entity_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity-form */ 977);
/* harmony import */ var _user_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-form */ 1580);




/***/ }),

/***/ 1580:
/*!**************************************************!*\
  !*** ./src/app/models/consts/forms/user-form.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenerateUserForm": () => (/* binding */ GenerateUserForm)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _address_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address-form */ 1153);
/* harmony import */ var _company_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-form */ 4801);
/* harmony import */ var _entity_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entity-form */ 977);




const GenerateUserForm = (user, fb) => fb.group({
    ...(0,_entity_form__WEBPACK_IMPORTED_MODULE_2__.GenerateEntityForm)(user, fb).controls,
    name: [user?.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
    username: [user?.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
    email: [user?.email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
    address: (0,_address_form__WEBPACK_IMPORTED_MODULE_0__.GenerateAddressForm)(user?.address, fb),
    phone: [user?.phone, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
    website: [user?.website, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
    company: (0,_company_form__WEBPACK_IMPORTED_MODULE_1__.GenerateCompanyForm)(user?.company, fb)
});


/***/ }),

/***/ 5993:
/*!****************************************!*\
  !*** ./src/app/models/consts/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demos": () => (/* reexport safe */ _demos__WEBPACK_IMPORTED_MODULE_0__.Demos),
/* harmony export */   "GenerateEntityForm": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_1__.GenerateEntityForm),
/* harmony export */   "GenerateUserForm": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_1__.GenerateUserForm)
/* harmony export */ });
/* harmony import */ var _demos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./demos */ 3296);
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms */ 7857);




/***/ }),

/***/ 4277:
/*!********************************!*\
  !*** ./src/app/models/demo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Demo": () => (/* binding */ Demo)
/* harmony export */ });
class Demo {
    constructor(_component, _date, _name, _message) {
        this._component = _component;
        this._date = _date;
        this._name = _name;
        this._message = _message;
    }
    get component() { return this._component; }
    get date() { return this._date; }
    get name() { return this._name; }
    get message() { return this._message; }
}


/***/ }),

/***/ 610:
/*!****************************************************!*\
  !*** ./src/app/models/enums/component-suffixes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentNameSuffix": () => (/* binding */ ComponentNameSuffix)
/* harmony export */ });
var ComponentNameSuffix;
(function (ComponentNameSuffix) {
    ComponentNameSuffix["Api"] = "Api";
    ComponentNameSuffix["Component"] = "Component";
    ComponentNameSuffix["Dialog"] = "Dialog";
    ComponentNameSuffix["Directive"] = "Directive";
    ComponentNameSuffix["Form"] = "Form";
    ComponentNameSuffix["Module"] = "Module";
    ComponentNameSuffix["Pipe"] = "Pipe";
    ComponentNameSuffix["Route"] = "Route";
    ComponentNameSuffix["Service"] = "Service";
})(ComponentNameSuffix || (ComponentNameSuffix = {}));


/***/ }),

/***/ 7608:
/*!***************************************!*\
  !*** ./src/app/models/enums/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentNameSuffix": () => (/* reexport safe */ _component_suffixes__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix)
/* harmony export */ });
/* harmony import */ var _component_suffixes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component-suffixes */ 610);



/***/ }),

/***/ 2139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentNameSuffix": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_2__.ComponentNameSuffix),
/* harmony export */   "Demo": () => (/* reexport safe */ _demo__WEBPACK_IMPORTED_MODULE_7__.Demo),
/* harmony export */   "Demos": () => (/* reexport safe */ _consts__WEBPACK_IMPORTED_MODULE_1__.Demos),
/* harmony export */   "Entity": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   "GenerateEntityForm": () => (/* reexport safe */ _consts__WEBPACK_IMPORTED_MODULE_1__.GenerateEntityForm),
/* harmony export */   "GenerateUserForm": () => (/* reexport safe */ _consts__WEBPACK_IMPORTED_MODULE_1__.GenerateUserForm),
/* harmony export */   "LocalStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_5__.LocalStorage),
/* harmony export */   "QuerySource": () => (/* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_4__.QuerySource),
/* harmony export */   "SessionStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_5__.SessionStorage),
/* harmony export */   "User": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.User)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 1261);
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ 5993);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enums */ 7608);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interfaces */ 1711);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./query */ 9097);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage */ 5887);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validation */ 7319);
/* harmony import */ var _demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo */ 4277);










/***/ }),

/***/ 8584:
/*!***************************************************!*\
  !*** ./src/app/models/interfaces/api/IAddress.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3680:
/*!***************************************************!*\
  !*** ./src/app/models/interfaces/api/ICompany.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4344:
/*!**************************************************!*\
  !*** ./src/app/models/interfaces/api/IEntity.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1573:
/*!***********************************************!*\
  !*** ./src/app/models/interfaces/api/IGeo.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4414:
/*!************************************************!*\
  !*** ./src/app/models/interfaces/api/IUser.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 767:
/*!************************************************!*\
  !*** ./src/app/models/interfaces/api/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IAddress__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IAddress */ 8584);
/* harmony import */ var _ICompany__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ICompany */ 3680);
/* harmony import */ var _IEntity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IEntity */ 4344);
/* harmony import */ var _IGeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IGeo */ 1573);
/* harmony import */ var _IUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IUser */ 4414);







/***/ }),

/***/ 3526:
/*!***********************************************************************!*\
  !*** ./src/app/models/interfaces/dialog-data/idynamic-dialog-data.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3956:
/*!********************************************************************!*\
  !*** ./src/app/models/interfaces/dialog-data/iform-dialog-data.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9039:
/*!********************************************************!*\
  !*** ./src/app/models/interfaces/dialog-data/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idynamic_dialog_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idynamic-dialog-data */ 3526);
/* harmony import */ var _iform_dialog_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iform-dialog-data */ 3956);




/***/ }),

/***/ 3451:
/*!*************************************************!*\
  !*** ./src/app/models/interfaces/idemo-info.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4705:
/*!***************************************************************************************!*\
  !*** ./src/app/models/interfaces/idynamic-component-loader/ibase-loader-component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 9354:
/*!**********************************************************************!*\
  !*** ./src/app/models/interfaces/idynamic-component-loader/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ibase_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ibase-loader-component */ 4705);
/* harmony import */ var _ireturnable_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ireturnable-loader-component */ 5774);




/***/ }),

/***/ 5774:
/*!*********************************************************************************************!*\
  !*** ./src/app/models/interfaces/idynamic-component-loader/ireturnable-loader-component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1711:
/*!********************************************!*\
  !*** ./src/app/models/interfaces/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _idemo_info__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./idemo-info */ 3451);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ 767);
/* harmony import */ var _dialog_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog-data */ 9039);
/* harmony import */ var _idynamic_component_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./idynamic-component-loader */ 9354);






/***/ }),

/***/ 2833:
/*!********************************************!*\
  !*** ./src/app/models/query/core-query.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreQuery": () => (/* binding */ CoreQuery)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6067);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3158);


class CoreQuery {
    constructor(baseUrl, http, snacker, initialPageSize = 20, pageSizeOptions = [5, 10, 20, 50, 100]) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.snacker = snacker;
        this.initialPageSize = initialPageSize;
        this.pageSizeOptions = pageSizeOptions;
        this.url = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.result = new rxjs__WEBPACK_IMPORTED_MODULE_1__.ReplaySubject(1);
        this.initUrl = () => this.url
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(url => !!url), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)((url) => this.http.get(url.toString())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(er => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(() => new Error(er))))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(r => !!r))
            .subscribe({
            next: result => this.result.next(result),
            error: err => this.snacker.sendErrorMessage(err)
        });
        this.result$ = this.result.asObservable();
        this.unsubscribe = () => this.sub?.unsubscribe();
        this._endpoint = null;
        this._page = 1;
        this._sort = null;
        this._search = null;
        this.refresh = (repage = false) => {
            const url = new URL(this.endpoint, this.baseUrl);
            if (repage)
                this._page = 1;
            url.searchParams.set('page', this.page.toString());
            url.searchParams.set('pageSize', this.pageSize.toString());
            if (this.sort)
                url.searchParams.set('sort', `${this.sort.propertyName}_${this.sort.isDescending ? 'desc' : 'asc'}`);
            else
                url.searchParams.delete('sort');
            if (this.search)
                url.searchParams.set('search', this.search);
            else
                url.searchParams.delete('search');
            this.url.next(url);
            this._endpoint = url.toString();
        };
        this.onPage = (pageEvent) => {
            this.page = pageEvent.pageIndex + 1;
            this.pageSize = pageEvent.pageSize;
        };
        this.onSearch = (event) => this.search = event;
        this.onSort = (event) => this.sort = event.direction
            ? { propertyName: event.active, isDescending: event.direction === 'desc' }
            : null;
        this._pageSize = initialPageSize;
        this.sub = this.initUrl();
    }
    get endpoint() { return this._endpoint; }
    set endpoint(value) {
        const url = new URL(value, this.baseUrl);
        if (this.baseUrl.startsWith(url.origin)) {
            if (url.toString() !== this._endpoint) {
                this._endpoint = url.toString();
                this.refresh(true);
            }
        }
    }
    get page() { return this._page; }
    set page(value) {
        if (value !== this._page) {
            this._page = value;
            this.refresh();
        }
    }
    get pageSize() { return this._pageSize; }
    set pageSize(value) {
        if (this._pageSize) {
            if (value !== this._pageSize) {
                this._pageSize = value;
                this.refresh(true);
            }
        }
        else {
            this._pageSize = value;
        }
    }
    get sort() {
        return this._sort;
    }
    set sort(value) {
        if (value !== this._sort) {
            this._sort = value;
            this.refresh(true);
        }
    }
    get search() {
        return this._search;
    }
    set search(value) {
        if (value !== this._search) {
            this._search = value;
            this.refresh(true);
        }
    }
}


/***/ }),

/***/ 9097:
/*!***************************************!*\
  !*** ./src/app/models/query/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuerySource": () => (/* reexport safe */ _query_source__WEBPACK_IMPORTED_MODULE_1__.QuerySource)
/* harmony export */ });
/* harmony import */ var _query_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query-result */ 4401);
/* harmony import */ var _query_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query-source */ 3515);




/***/ }),

/***/ 4401:
/*!**********************************************!*\
  !*** ./src/app/models/query/query-result.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3515:
/*!**********************************************!*\
  !*** ./src/app/models/query/query-source.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuerySource": () => (/* binding */ QuerySource)
/* harmony export */ });
/* harmony import */ var _core_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-query */ 2833);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 2340);


class QuerySource extends _core_query__WEBPACK_IMPORTED_MODULE_0__.CoreQuery {
    constructor(http, snacker, api = null, propertyName = 'id', isDescending = false, initialPageSize = 20, pageSizeOptions = [5, 10, 20, 50, 100]) {
        super(_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api, http, snacker, initialPageSize, pageSizeOptions);
        this.http = http;
        this.snacker = snacker;
        this.api = api;
        this.propertyName = propertyName;
        this.isDescending = isDescending;
        this.initialPageSize = initialPageSize;
        this.pageSizeOptions = pageSizeOptions;
        this._sort = { propertyName, isDescending };
        this.endpoint = api;
    }
}


/***/ }),

/***/ 5887:
/*!*****************************************!*\
  !*** ./src/app/models/storage/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorage": () => (/* reexport safe */ _local_storage__WEBPACK_IMPORTED_MODULE_1__.LocalStorage),
/* harmony export */   "SessionStorage": () => (/* reexport safe */ _session_storage__WEBPACK_IMPORTED_MODULE_2__.SessionStorage)
/* harmony export */ });
/* harmony import */ var _istorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./istorage */ 9051);
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ 2791);
/* harmony import */ var _session_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-storage */ 7452);





/***/ }),

/***/ 9051:
/*!********************************************!*\
  !*** ./src/app/models/storage/istorage.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2791:
/*!*************************************************!*\
  !*** ./src/app/models/storage/local-storage.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalStorage": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
    constructor(key) {
        this.hasState = false;
        this.get = () => {
            const value = JSON.parse(localStorage.getItem(this.key));
            this.hasState = !!value;
            return value;
        };
        this.set = (value) => {
            if (value) {
                localStorage.setItem(this.key, JSON.stringify(value));
                this.hasState = true;
            }
            else
                this.clear();
        };
        this.clear = () => {
            localStorage.removeItem(this.key);
            this.hasState = false;
        };
        this.key = key;
        this.get();
    }
}


/***/ }),

/***/ 7452:
/*!***************************************************!*\
  !*** ./src/app/models/storage/session-storage.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionStorage": () => (/* binding */ SessionStorage)
/* harmony export */ });
class SessionStorage {
    constructor(key) {
        this.hasState = false;
        this.get = () => {
            const value = JSON.parse(sessionStorage.getItem(this.key));
            this.hasState = !!value;
            return value;
        };
        this.set = (value) => {
            if (value) {
                sessionStorage.setItem(this.key, JSON.stringify(value));
                this.hasState = true;
            }
            else
                this.clear();
        };
        this.clear = () => {
            sessionStorage.removeItem(this.key);
            this.hasState = false;
        };
        this.key = key;
        this.get();
    }
}


/***/ }),

/***/ 7319:
/*!********************************************!*\
  !*** ./src/app/models/validation/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validation_result__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validation-result */ 4012);



/***/ }),

/***/ 4012:
/*!********************************************************!*\
  !*** ./src/app/models/validation/validation-result.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8230:
/*!**********************************************!*\
  !*** ./src/app/pipes/component-name.pipe.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentNamePipe": () => (/* binding */ ComponentNamePipe)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ComponentNamePipe {
    transform(name) {
        this.removeSuffix(name);
        const result = this.split(name);
        return result;
    }
    removeSuffix(name) {
        if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Api))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Api, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Component))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Component, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Dialog))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Dialog, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Directive))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Directive, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Form))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Form, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Module))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Module, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Pipe))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Pipe, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Route))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Route, '');
        else if (name.includes(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Service))
            name.replace(_models__WEBPACK_IMPORTED_MODULE_0__.ComponentNameSuffix.Service, '');
        return name;
    }
    checkUpper(c) {
        return c == c.toUpperCase();
    }
    split(name) {
        const wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
        const word = name.match(wordRe).join(" ");
        return word;
    }
}
ComponentNamePipe.ɵfac = function ComponentNamePipe_Factory(t) { return new (t || ComponentNamePipe)(); };
ComponentNamePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "componentName", type: ComponentNamePipe, pure: true });


/***/ }),

/***/ 4974:
/*!***********************************************************************************!*\
  !*** ./src/app/routes/dynamic-component-loader/dynamic-component-loader.route.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentLoaderRoute": () => (/* binding */ DynamicComponentLoaderRoute)
/* harmony export */ });
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components */ 9771);
/* harmony import */ var src_app_dialogs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/dialogs */ 3328);
/* harmony import */ var src_app_dialogs_dynamic_dynamic_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialogs/dynamic/dynamic.dialog */ 30);
/* harmony import */ var src_app_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/forms */ 4953);
/* harmony import */ var src_app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ 1866);









class DynamicComponentLoaderRoute {
    constructor(_dialog, _fb, userApi) {
        this._dialog = _dialog;
        this._fb = _fb;
        this.userApi = userApi;
        this.info = () => this._dialog.open(src_app_dialogs_dynamic_dynamic_dialog__WEBPACK_IMPORTED_MODULE_2__.DynamicDialog, {
            data: {
                component: src_app_components__WEBPACK_IMPORTED_MODULE_0__.DemoInfoComponent,
                inputData: this._demo
            }
        });
        this.edit = (user) => this._dialog.open(src_app_dialogs__WEBPACK_IMPORTED_MODULE_1__.FormDialog, {
            data: {
                component: src_app_forms__WEBPACK_IMPORTED_MODULE_3__.UserForm,
                inputData: (0,src_app_models__WEBPACK_IMPORTED_MODULE_4__.GenerateUserForm)(user, this._fb),
                dataSvc: this.userApi
            },
            width: '500px',
            autoFocus: false,
            disableClose: true
        })
            .afterClosed()
            .subscribe(res => console.log("dialog output", res));
        this._demo = src_app_models__WEBPACK_IMPORTED_MODULE_4__.Demos.at(0);
    }
    ngOnInit() {
        this.info();
    }
}
DynamicComponentLoaderRoute.ɵfac = function DynamicComponentLoaderRoute_Factory(t) { return new (t || DynamicComponentLoaderRoute)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services__WEBPACK_IMPORTED_MODULE_5__.UserApi)); };
DynamicComponentLoaderRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: DynamicComponentLoaderRoute, selectors: [["dynamic-component-loader-route"]], decls: 1, vars: 0, consts: [[1, "full-height", 3, "edit"]], template: function DynamicComponentLoaderRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "user-table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("edit", function DynamicComponentLoaderRoute_Template_user_table_edit_0_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 6155:
/*!**********************************************************!*\
  !*** ./src/app/routes/dynamic-component-loader/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicComponentLoaderRoute": () => (/* reexport safe */ _dynamic_component_loader_route__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderRoute)
/* harmony export */ });
/* harmony import */ var _dynamic_component_loader_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-component-loader.route */ 4974);



/***/ }),

/***/ 4765:
/*!*******************************************!*\
  !*** ./src/app/routes/home/home.route.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* binding */ HomeRoute)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HomeRoute {
    constructor() { }
    ngOnInit() {
    }
}
HomeRoute.ɵfac = function HomeRoute_Factory(t) { return new (t || HomeRoute)(); };
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 2, vars: 0, template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Click a demo!!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 5947:
/*!**************************************!*\
  !*** ./src/app/routes/home/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoute": () => (/* reexport safe */ _home_route__WEBPACK_IMPORTED_MODULE_0__.HomeRoute)
/* harmony export */ });
/* harmony import */ var _home_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.route */ 4765);



/***/ }),

/***/ 3529:
/*!*********************************!*\
  !*** ./src/app/routes/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RouteComponents": () => (/* binding */ RouteComponents),
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var _dynamic_component_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dynamic-component-loader */ 6155);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ 5947);
/* harmony import */ var _models_consts_demos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/consts/demos */ 3296);



const RouteComponents = [
    _dynamic_component_loader__WEBPACK_IMPORTED_MODULE_0__.DynamicComponentLoaderRoute,
    _home__WEBPACK_IMPORTED_MODULE_1__.HomeRoute
];
const Routes = [
    ..._models_consts_demos__WEBPACK_IMPORTED_MODULE_2__.Demos.map(x => { return { path: x.name, component: x.component }; }),
    { path: '**', redirectTo: _models_consts_demos__WEBPACK_IMPORTED_MODULE_2__.Demos[0].name, pathMatch: 'full' }
];


/***/ }),

/***/ 2609:
/*!***********************************************!*\
  !*** ./src/app/services/api/base/base.api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseApi": () => (/* binding */ BaseApi)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);

class BaseApi {
    constructor(_http, _snacker, address, path) {
        this._http = _http;
        this._snacker = _snacker;
        this.address = address;
        this.path = path;
        this._entities = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this._entity = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.entities$ = this._entities.asObservable();
        this.entity$ = this._entity.asObservable();
        this.storeAll = () => this.getAll$()
            .subscribe({
            next: data => {
                this._entities.next(data);
                this._snacker.sendSuccessMessage('data successfully loaded!');
            },
            error: err => this._snacker.sendErrorMessage('something went wrong')
        });
        this.getAll$ = () => this._http.get(`${this.api}`);
        this.getAllAsync = () => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.getAll$());
        this.getById$ = (id) => this._http.get(`${this.api}/${id}`);
        this.getByIdAsync = (id) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(this.getById$(id));
        this.save = (entity) => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.internalSave(entity)));
        this.internalSave = (entity) => {
            const entities = this._entities.getValue();
            const index = entities.findIndex(x => x.id === entity.id);
            entities.splice(index, 1, entity);
            this._entities.next(entities);
            return entity;
        };
        this.api = address + path;
    }
}


/***/ }),

/***/ 5194:
/*!*************************************************!*\
  !*** ./src/app/services/api/base/entity.api.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityApi": () => (/* binding */ EntityApi)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4363);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models */ 2139);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 2340);



class EntityApi {
    constructor(endpoint, generator, http) {
        this.endpoint = endpoint;
        this.generator = generator;
        this.http = http;
        this.setEndpoint = (endpoint) => endpoint.endsWith('/')
            ? endpoint
            : `${endpoint}/`;
        this.handleError = (err) => {
            throw new Error(err);
        };
        // protected base = () => <T>{
        //     id: 0,
        //     name: '',
        //     url: ''
        // }
        // getBase = () => this.base();
        this.generateStorage = (entity) => new _models__WEBPACK_IMPORTED_MODULE_0__.SessionStorage(entity?.id
            ? `conductor-${this.endpoint}-${entity.id}`
            : `conductor-${this.endpoint}-new`);
        this.query = () => this.generator.generateSource(this.queryUrl);
        this.getById$ = (id) => this.http.get(`${this.api}getById/${id}`);
        this.getById = (id) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.getById$(id));
        this.getByUrl$ = (url) => this.http.get(`${this.api}getByUrl/${url}`);
        this.getByUrl = (url) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.getByUrl$(url));
        this.validateName$ = (entity) => this.http.post(`${this.api}validateName`, entity);
        this.validateName = (entity) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.validateName$(entity));
        this.validate$ = (entity) => this.http.post(`${this.api}validate`, entity);
        this.validate = (entity) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.validate$(entity));
        this.save = (entity) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.http.post(`${this.api}save`, entity));
        this.remove = (entity) => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(this.http.delete(`${this.api}remove`, { body: entity }));
        this.endpoint = this.setEndpoint(endpoint);
        this.api = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.api}${this.endpoint}`;
        this.queryUrl = `${this.api}query`;
    }
}


/***/ }),

/***/ 1412:
/*!********************************************!*\
  !*** ./src/app/services/api/base/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseApi": () => (/* reexport safe */ _base_api__WEBPACK_IMPORTED_MODULE_0__.BaseApi),
/* harmony export */   "EntityApi": () => (/* reexport safe */ _entity_api__WEBPACK_IMPORTED_MODULE_1__.EntityApi)
/* harmony export */ });
/* harmony import */ var _base_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.api */ 2609);
/* harmony import */ var _entity_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity.api */ 5194);




/***/ }),

/***/ 2848:
/*!***************************************!*\
  !*** ./src/app/services/api/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseApi": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.BaseApi),
/* harmony export */   "EntityApi": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_1__.EntityApi),
/* harmony export */   "UserApi": () => (/* reexport safe */ _user_api__WEBPACK_IMPORTED_MODULE_0__.UserApi)
/* harmony export */ });
/* harmony import */ var _user_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.api */ 2127);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ 1412);




/***/ }),

/***/ 2127:
/*!******************************************!*\
  !*** ./src/app/services/api/user.api.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserApi": () => (/* binding */ UserApi)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ 1412);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ 7817);




class UserApi extends _base__WEBPACK_IMPORTED_MODULE_0__.BaseApi {
    constructor(http, snacker) { super(http, snacker, 'https://jsonplaceholder.typicode.com/', 'users'); }
}
UserApi.ɵfac = function UserApi_Factory(t) { return new (t || UserApi)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_1__.SnackerService)); };
UserApi.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserApi, factory: UserApi.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4318:
/*!********************************************************!*\
  !*** ./src/app/services/core/api-validator.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiValidator": () => (/* binding */ ApiValidator)
/* harmony export */ });
/* harmony import */ var D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);



class ApiValidator {
  constructor() {
    var _this = this;

    this.setErrorState = (control, error, value) => {
      if (value) {
        const errors = control.errors ? { ...control.errors,
          [error]: value
        } : {
          [error]: value
        };
        control.setErrors(errors);
      } else if (control.errors) {
        if (control.errors.hasOwnProperty(error)) delete control.errors[error];
        if (Object.keys(control.errors).length > 0) control.setErrors(control.errors);else control.setErrors(null);
      }
    };

    this.registerValidator = /*#__PURE__*/function () {
      var _ref = (0,D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (validator, form, control, error = 'api') {
        if (control.value) {
          const res = yield validator(form.value);

          _this.setErrorState(control, error, res ? null : true);
        }

        return control.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(350), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)()).subscribe( /*#__PURE__*/function () {
          var _ref2 = (0,D_a_demo_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (value) {
            if (value) {
              const res = yield validator(form.value);

              _this.setErrorState(control, error, res ? null : true);
            } else _this.setErrorState(control, error);
          });

          return function (_x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      });

      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
  }

}

ApiValidator.ɵfac = function ApiValidator_Factory(t) {
  return new (t || ApiValidator)();
};

ApiValidator.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: ApiValidator,
  factory: ApiValidator.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2771:
/*!***********************************************!*\
  !*** ./src/app/services/core/core.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreService": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);




class CoreService {
    constructor() {
        this.generateInputObservable = (input) => (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.fromEvent)(input.nativeElement, 'keyup')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((event) => event.target.value), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)());
    }
}
CoreService.ɵfac = function CoreService_Factory(t) { return new (t || CoreService)(); };
CoreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CoreService, factory: CoreService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7817:
/*!****************************************!*\
  !*** ./src/app/services/core/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiValidator": () => (/* reexport safe */ _api_validator_service__WEBPACK_IMPORTED_MODULE_0__.ApiValidator),
/* harmony export */   "CoreService": () => (/* reexport safe */ _core_service__WEBPACK_IMPORTED_MODULE_1__.CoreService),
/* harmony export */   "QueryGeneratorService": () => (/* reexport safe */ _query_generator_service__WEBPACK_IMPORTED_MODULE_2__.QueryGeneratorService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _snacker_service__WEBPACK_IMPORTED_MODULE_3__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _theme_service__WEBPACK_IMPORTED_MODULE_4__.ThemeService)
/* harmony export */ });
/* harmony import */ var _api_validator_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-validator.service */ 4318);
/* harmony import */ var _core_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core.service */ 2771);
/* harmony import */ var _query_generator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./query-generator.service */ 6301);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snacker.service */ 3272);
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./theme.service */ 4242);







/***/ }),

/***/ 6301:
/*!**********************************************************!*\
  !*** ./src/app/services/core/query-generator.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueryGeneratorService": () => (/* binding */ QueryGeneratorService)
/* harmony export */ });
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models */ 2139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _snacker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snacker.service */ 3272);




class QueryGeneratorService {
    constructor(http, snacker) {
        this.http = http;
        this.snacker = snacker;
        this.generateSource = (endpoint = null, sortProperty = 'id', isDescending = false, pageSize = 50, pageSizeOptions = [5, 10, 20, 50, 100]) => new _models__WEBPACK_IMPORTED_MODULE_0__.QuerySource(this.http, this.snacker, endpoint, sortProperty, isDescending, pageSize, pageSizeOptions);
    }
}
QueryGeneratorService.ɵfac = function QueryGeneratorService_Factory(t) { return new (t || QueryGeneratorService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_snacker_service__WEBPACK_IMPORTED_MODULE_1__.SnackerService)); };
QueryGeneratorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: QueryGeneratorService, factory: QueryGeneratorService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3272:
/*!**************************************************!*\
  !*** ./src/app/services/core/snacker.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnackerService": () => (/* binding */ SnackerService)
/* harmony export */ });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class SnackerService {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBarConfig();
        this.sendMessage = (message) => this.snackbar.open(message, 'Close', this.config);
        this.setClasses = (classes) => {
            classes.push('snacker');
            classes.push('background-card');
            this.config.panelClass = classes;
        };
        this.sendColorMessage = (message, colors) => {
            this.setClasses(colors);
            this.sendMessage(message);
        };
        this.sendErrorMessage = (message) => {
            this.setClasses(['snacker-red']);
            this.sendMessage(message);
        };
        this.sendWarningMessage = (message) => {
            this.setClasses(['snacker-orange']);
            this.sendMessage(message);
        };
        this.sendSuccessMessage = (message) => {
            this.setClasses(['snacker-green']);
            this.sendMessage(message);
        };
        this.config.duration = 5000;
        this.config.panelClass = [];
    }
    setDuration(duration) {
        this.config.duration = duration;
    }
}
SnackerService.ɵfac = function SnackerService_Factory(t) { return new (t || SnackerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__.MatSnackBar)); };
SnackerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SnackerService, factory: SnackerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4242:
/*!************************************************!*\
  !*** ./src/app/services/core/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 5895);


class ThemeService {
    constructor(overlay) {
        this.overlay = overlay;
        this.isLight = true;
        this.setOverlayContainerTheme = () => {
            if (this.isLight) {
                this.overlay.getContainerElement().classList.remove('app-dark');
                this.overlay.getContainerElement().classList.add('app-light');
            }
            else {
                this.overlay.getContainerElement().classList.remove('app-light');
                this.overlay.getContainerElement().classList.add('app-dark');
            }
        };
        this.toggleTheme = () => {
            this.isLight = !this.isLight;
            this.setOverlayContainerTheme();
        };
        this.isLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        window.matchMedia('(prefers-color-scheme: light)')
            .addEventListener('change', (e) => this.isLight = e.matches);
        this.setOverlayContainerTheme();
    }
}
ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayContainer)); };
ThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1866:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiValidator": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ApiValidator),
/* harmony export */   "BaseApi": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.BaseApi),
/* harmony export */   "CoreService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.CoreService),
/* harmony export */   "EntityApi": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.EntityApi),
/* harmony export */   "QueryGeneratorService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.QueryGeneratorService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ThemeService),
/* harmony export */   "UserApi": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.UserApi)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 2848);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ 7817);




/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    server: 'http://localhost:5000/',
    api: 'http://localhost:5000/api/',
    rig: 'http://localhost:5001/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map