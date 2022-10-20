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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ 1866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3704);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);









function AppComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "brightness_5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "brightness_3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(themer) {
        this.themer = themer;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_0__.ThemeService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 4, consts: [[1, "mat-typography", "mat-app-background", "app-frame", 3, "ngClass"], ["color", "primary", 1, "app-toolbar", "sticky-top", "rounded-bottom"], ["routerLink", "/", 1, "cursor-pointer"], ["fxFlex", ""], ["mat-icon-button", "", 3, "ngClass", "click"], [4, "ngIf"], [1, "app-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "mat-toolbar", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.themer.toggleTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_mat_icon_6_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_mat_icon_7_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "app-light" : "app-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.themer.isLight ? "color-amber" : "color-text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.themer.isLight);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.themer.isLight);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__.DefaultClassDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink], encapsulation: 2 });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ 3529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_general_controls_searchbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/general/controls/searchbar.component */ 7355);
/* harmony import */ var _components_general_controls_selector_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/general/controls/selector.component */ 4353);
/* harmony import */ var _components_general_layout_async_source_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/general/layout/async-source.component */ 5357);
/* harmony import */ var _components_general_layout_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/general/layout/card.component */ 8216);
/* harmony import */ var _components_general_layout_console_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/general/layout/console.component */ 2753);
/* harmony import */ var _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialogs/confirm/confirm.dialog */ 5439);
/* harmony import */ var _routes_home_home_route__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/home/home.route */ 4765);

















class AppModule {}

AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};

AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__.Routes)]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _components_general_controls_searchbar_component__WEBPACK_IMPORTED_MODULE_3__.SearchbarComponent, _components_general_controls_selector_component__WEBPACK_IMPORTED_MODULE_4__.SelectorComponent, _components_general_layout_async_source_component__WEBPACK_IMPORTED_MODULE_5__.AsyncSourceComponent, _components_general_layout_card_component__WEBPACK_IMPORTED_MODULE_6__.CardComponent, _components_general_layout_console_component__WEBPACK_IMPORTED_MODULE_7__.ConsoleComponent, _dialogs_confirm_confirm_dialog__WEBPACK_IMPORTED_MODULE_8__.ConfirmDialog, _routes_home_home_route__WEBPACK_IMPORTED_MODULE_9__.HomeRoute],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
  });
})();

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

/***/ 5357:
/*!*********************************************************************!*\
  !*** ./src/app/components/general/layout/async-source.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSourceComponent": () => (/* binding */ AsyncSourceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ 6722);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _controls_searchbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controls/searchbar.component */ 7355);







function AsyncSourceComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 2);
  }
}

function AsyncSourceComponent_ng_container_2_section_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayout", ctx_r4.layout)("fxLayoutAlign", ctx_r4.alignment);
  }
}

function AsyncSourceComponent_ng_container_2_p_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.emptyLabel);
  }
}

function AsyncSourceComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section", 3)(2, "searchbar", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("search", function AsyncSourceComponent_ng_container_2_Template_searchbar_search_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.src.onSearch($event));
    })("clear", function AsyncSourceComponent_ng_container_2_Template_searchbar_clear_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.src.onSearch(""));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-paginator", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("page", function AsyncSourceComponent_ng_container_2_Template_mat_paginator_page_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.src.onPage($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AsyncSourceComponent_ng_container_2_section_4_Template, 2, 2, "section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AsyncSourceComponent_ng_container_2_p_5_Template, 2, 1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const query_r3 = ctx.ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxLayout", ctx_r2.inlineControls ? "row | wrap" : "column")("fxLayoutAlign", ctx_r2.inlineControls ? "start center" : "start stretch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r2.searchLabel)("minimum", ctx_r2.searchMin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.pageStyle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("length", query_r3 == null ? null : query_r3.totalCount)("pageSize", query_r3 == null ? null : query_r3.pageSize)("pageSizeOptions", ctx_r2.src.pageSizeOptions)("pageIndex", (query_r3 == null ? null : query_r3.page) - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (query_r3.data == null ? null : query_r3.data.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !((query_r3 == null ? null : query_r3.data == null ? null : query_r3.data.length) > 0));
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

AsyncSourceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AsyncSourceComponent_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AsyncSourceComponent_ng_container_2_Template, 6, 12, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, ctx.src.result$))("ngIfElse", _r0);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__.DefaultFlexDirective, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginator, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__.MatProgressBar, _controls_searchbar_component__WEBPACK_IMPORTED_MODULE_0__.SearchbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
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

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ 2681);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 712);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
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
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_1__.ClipboardModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__.DragDropModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__.FlexLayoutModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.GridModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__.MatButtonToggleModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipsModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatCommonModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__.MatDividerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatLineModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOptionModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_18__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_19__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatPseudoCheckboxModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_21__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_22__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_24__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_26__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_27__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_28__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__.MatTooltipModule] }); })();


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
/* harmony export */   "Entity": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.Entity)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ 3868);



/***/ }),

/***/ 2139:
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.Entity),
/* harmony export */   "LocalStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_2__.LocalStorage),
/* harmony export */   "QuerySource": () => (/* reexport safe */ _query__WEBPACK_IMPORTED_MODULE_1__.QuerySource),
/* harmony export */   "SessionStorage": () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_2__.SessionStorage)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ 1261);
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query */ 9097);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ 5887);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validation */ 7319);






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
HomeRoute.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeRoute, selectors: [["home-route"]], decls: 2, vars: 0, consts: [[1, "mat-title", "m8"]], template: function HomeRoute_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Home");
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ 5947);

const RouteComponents = [
    _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute
];
const Routes = [
    { path: '', component: _home__WEBPACK_IMPORTED_MODULE_0__.HomeRoute },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];


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
        this.base = () => ({
            id: 0,
            name: '',
            url: ''
        });
        this.getBase = () => this.base();
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
/* harmony export */   "EntityApi": () => (/* reexport safe */ _entity_api__WEBPACK_IMPORTED_MODULE_0__.EntityApi)
/* harmony export */ });
/* harmony import */ var _entity_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.api */ 5194);



/***/ }),

/***/ 2848:
/*!***************************************!*\
  !*** ./src/app/services/api/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityApi": () => (/* reexport safe */ _base__WEBPACK_IMPORTED_MODULE_0__.EntityApi)
/* harmony export */ });
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ 1412);



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
/* harmony export */   "CoreService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.CoreService),
/* harmony export */   "EntityApi": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_0__.EntityApi),
/* harmony export */   "QueryGeneratorService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.QueryGeneratorService),
/* harmony export */   "SnackerService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.SnackerService),
/* harmony export */   "ThemeService": () => (/* reexport safe */ _core__WEBPACK_IMPORTED_MODULE_1__.ThemeService)
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