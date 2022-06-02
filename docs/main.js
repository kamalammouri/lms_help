"use strict";
(self["webpackChunkhelplms"] = self["webpackChunkhelplms"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routes": () => (/* binding */ routes),
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/article-details/article-details.component */ 2572);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [
    { path: ':lg/search', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent },
    { path: ':lg/article', component: _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsComponent },
    { path: ':lg/article/:id', component: _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_0__.ArticleDetailsComponent },
    { path: 'search', redirectTo: 'fr/search', pathMatch: 'full' },
    { path: '**', redirectTo: 'fr/article', pathMatch: 'full' },
    // { path:  ":lg",                     redirectTo:"de/article", pathMatch: "full"},
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/article/article.component */ 5603);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);






class AppComponent {
    constructor() {
        this.title = 'helplms';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [[1, "container-fluid", "mt-3"], [1, "row", "pt-3"], [1, "row"], [1, "col-lg-3", "col-md-4", "col-sm-12", "pt-2"], [1, "col-lg-8", "col-sm-12", "ms-lg-3", "ms-md-0", "pt-2"], [1, "contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-article");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_0__.NavbarComponent, _components_search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _components_article_article_component__WEBPACK_IMPORTED_MODULE_2__.ArticleComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__.ContactComponent], styles: [".contact[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 30px;\n  right: 30px;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzBweDtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgLy8gY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSg1MSwgNTEsIDUxLCAuMSk7XHJcbiAgICAvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgLjI1KSk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpTranslateLoaderFactory": () => (/* binding */ httpTranslateLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ 8263);
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navbar.component */ 3252);
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ 9055);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/contact/contact.component */ 1782);
/* harmony import */ var _components_article_article_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/article/article.component */ 5603);
/* harmony import */ var _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/article-details/article-details.component */ 2572);
/* harmony import */ var _components_satisfaction_satisfaction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/satisfaction/satisfaction.component */ 8768);
/* harmony import */ var _components_article_video_article_video_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/article-video/article-video.component */ 4973);
/* harmony import */ var _components_article_description_article_description_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/article-description/article-description.component */ 1068);
/* harmony import */ var _components_article_document_article_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/article-document/article-document.component */ 194);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);


















function httpTranslateLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_12__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: httpTranslateLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClient],
                },
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent,
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent,
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__.SearchComponent,
        _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent,
        _components_article_article_component__WEBPACK_IMPORTED_MODULE_6__.ArticleComponent,
        _components_article_details_article_details_component__WEBPACK_IMPORTED_MODULE_7__.ArticleDetailsComponent,
        _components_satisfaction_satisfaction_component__WEBPACK_IMPORTED_MODULE_8__.SatisfactionComponent,
        _components_article_video_article_video_component__WEBPACK_IMPORTED_MODULE_9__.ArticleVideoComponent,
        _components_article_description_article_description_component__WEBPACK_IMPORTED_MODULE_10__.ArticleDescriptionComponent,
        _components_article_document_article_document_component__WEBPACK_IMPORTED_MODULE_11__.ArticleDocumentComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule] }); })();


/***/ }),

/***/ 1068:
/*!*********************************************************************************!*\
  !*** ./src/app/components/article-description/article-description.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDescriptionComponent": () => (/* binding */ ArticleDescriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ArticleDescriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleDescriptionComponent.ɵfac = function ArticleDescriptionComponent_Factory(t) { return new (t || ArticleDescriptionComponent)(); };
ArticleDescriptionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDescriptionComponent, selectors: [["app-article-description"]], inputs: { articleDesc: "articleDesc" }, decls: 5, vars: 2, consts: [[1, "my-3"], [1, "mbt-primary-text", "text-decoration-underline", "py-1"], [1, "text-muted", "py-1"]], template: function ArticleDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.articleDesc == null ? null : ctx.articleDesc.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.articleDesc == null ? null : ctx.articleDesc.desc, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWRlc2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2572:
/*!*************************************************************************!*\
  !*** ./src/app/components/article-details/article-details.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDetailsComponent": () => (/* binding */ ArticleDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _article_description_article_description_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../article-description/article-description.component */ 1068);
/* harmony import */ var _article_video_article_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article-video/article-video.component */ 4973);
/* harmony import */ var _article_document_article_document_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article-document/article-document.component */ 194);
/* harmony import */ var _satisfaction_satisfaction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../satisfaction/satisfaction.component */ 8768);









const _c0 = ["satisfactionComp"];
function ArticleDetailsComponent_ng_container_2_app_article_description_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-article-description", 10);
} if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("articleDesc", child_r2);
} }
function ArticleDetailsComponent_ng_container_2_app_article_video_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-article-video", 11);
} if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("articleVideo", child_r2);
} }
function ArticleDetailsComponent_ng_container_2_app_article_document_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-article-document", 12);
} if (rf & 2) {
    const child_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("articleDoc", child_r2);
} }
function ArticleDetailsComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0)(1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_container_2_app_article_description_2_Template, 1, 1, "app-article-description", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ArticleDetailsComponent_ng_container_2_app_article_video_3_Template, 1, 1, "app-article-video", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ArticleDetailsComponent_ng_container_2_app_article_document_4_Template, 1, 1, "app-article-document", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]()();
} if (rf & 2) {
    const child_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", child_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "video");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "document");
} }
class ArticleDetailsComponent {
    constructor(router, activeRoute, generaleService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.generaleService = generaleService;
        this.langs = ['en', 'de', 'fr'];
        this.article = {};
    }
    ngOnInit() {
        this.activeRoute.params
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)((params) => params.id == null
            ? this.generaleService.fristArticle
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((res) => res != null))
                .subscribe((res) => this.router.navigateByUrl(this.router.url + '/' + res))
            : null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)((params) => (params === null || params === void 0 ? void 0 : params.id) != null || (params === null || params === void 0 ? void 0 : params.id) != undefined))
            .subscribe((params) => (this.routeParams = params));
        this.generaleService.activeLanguage
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)())
            .subscribe((res) => {
            var _a, _b;
            this.article = {};
            (_a = this.satisfactionComp) === null || _a === void 0 ? void 0 : _a.inistialize();
            if ((_b = this.routeParams) === null || _b === void 0 ? void 0 : _b.id)
                this.generaleService
                    .getArticleChilde(res, this.routeParams.id)
                    .subscribe((res) => (this.article = res.data));
        });
    }
}
ArticleDetailsComponent.ɵfac = function ArticleDetailsComponent_Factory(t) { return new (t || ArticleDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService)); };
ArticleDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ArticleDetailsComponent, selectors: [["app-article-details"]], viewQuery: function ArticleDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.satisfactionComp = _t.first);
    } }, decls: 5, vars: 2, consts: [[1, "row", "mt-2"], [1, "col-12"], [4, "ngFor", "ngForOf"], [3, "articleId"], ["satisfactionComp", ""], [3, "ngSwitch"], [3, "articleDesc", 4, "ngSwitchCase"], [3, "articleVideo", 4, "ngSwitchCase"], [3, "articleDoc", 4, "ngSwitchCase"], [1, "border-bottom"], [3, "articleDesc"], [3, "articleVideo"], [3, "articleDoc"]], template: function ArticleDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ArticleDetailsComponent_ng_container_2_Template, 6, 4, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "app-satisfaction", 3, 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.article == null ? null : ctx.article.children);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("articleId", ctx.routeParams == null ? null : ctx.routeParams.id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgSwitchCase, _article_description_article_description_component__WEBPACK_IMPORTED_MODULE_1__.ArticleDescriptionComponent, _article_video_article_video_component__WEBPACK_IMPORTED_MODULE_2__.ArticleVideoComponent, _article_document_article_document_component__WEBPACK_IMPORTED_MODULE_3__.ArticleDocumentComponent, _satisfaction_satisfaction_component__WEBPACK_IMPORTED_MODULE_4__.SatisfactionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 194:
/*!***************************************************************************!*\
  !*** ./src/app/components/article-document/article-document.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleDocumentComponent": () => (/* binding */ ArticleDocumentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class ArticleDocumentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleDocumentComponent.ɵfac = function ArticleDocumentComponent_Factory(t) { return new (t || ArticleDocumentComponent)(); };
ArticleDocumentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleDocumentComponent, selectors: [["app-article-document"]], inputs: { articleDoc: "articleDoc" }, decls: 8, vars: 2, consts: [[1, "mt-3", "mb-2"], [1, "col-12"], ["target", "_blank", 3, "routerLink"], [1, "far", "fa-file-pdf"]], template: function ArticleDocumentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "article-document works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1)(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "pdf", ctx.articleDoc == null ? null : ctx.articleDoc.uri, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("    pdf", ctx.articleDoc == null ? null : ctx.articleDoc.uri, "\n");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLWRvY3VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4973:
/*!*********************************************************************!*\
  !*** ./src/app/components/article-video/article-video.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleVideoComponent": () => (/* binding */ ArticleVideoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ArticleVideoComponent {
    constructor() { }
    ngOnInit() {
    }
}
ArticleVideoComponent.ɵfac = function ArticleVideoComponent_Factory(t) { return new (t || ArticleVideoComponent)(); };
ArticleVideoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArticleVideoComponent, selectors: [["app-article-video"]], inputs: { articleVideo: "articleVideo" }, decls: 3, vars: 1, consts: [[1, "mb-2"], ["width", "560", "height", "340", "controls", ""], ["type", "video/mp4", 3, "src"]], template: function ArticleVideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "video", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "source", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.articleVideo.uri, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnRpY2xlLXZpZGVvLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 5603:
/*!*********************************************************!*\
  !*** ./src/app/components/article/article.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleComponent": () => (/* binding */ ArticleComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);







function ArticleComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 7)(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate2"]("routerLink", "", ctx_r0.activeLg$.getValue(), "/article/", article_r1 == null ? null : article_r1.code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", "articleActive");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](article_r1 == null ? null : article_r1.label);
  }
}

class ArticleComponent {
  constructor(router, activeRoute, generaleService) {
    this.router = router;
    this.activeRoute = activeRoute;
    this.generaleService = generaleService; // routeParams:any = this.activeRoute.params;

    this.topArticles$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.activeLg$ = this.generaleService.activeLanguage;
  }

  ngOnInit() {
    this.subLang$ = this.generaleService.activeLanguage.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)()).subscribe(lang => {
      this.subService$ = this.generaleService.getTopArticles(lang).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(res => (res === null || res === void 0 ? void 0 : res.data) != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(res => {
        if (res.data.session_id == null) this.generaleService.makeSession();
      })).subscribe(res => {
        var _a;

        this.topArticles$.next(res.data.topArticles);
        this.generaleService.fristArticle.next((_a = res.data.topArticles[0]) === null || _a === void 0 ? void 0 : _a.code);
      });
    });
  }

  ngOnDestroy() {
    this.subLang$.unsubscribe();
    this.subService$.unsubscribe();
  }

}

ArticleComponent.ɵfac = function ArticleComponent_Factory(t) {
  return new (t || ArticleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService));
};

ArticleComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: ArticleComponent,
  selectors: [["app-article"]],
  decls: 9,
  vars: 3,
  consts: [[1, "card", "text-right", "box-shadow"], [1, "card-header"], [1, "card-title"], [1, "card-body", "px-0"], [1, "container-fluid"], [1, "list-unstyled"], ["class", "my-2", 4, "ngFor", "ngForOf"], [1, "my-2"], [1, "mbt-primary-text", "px-2", "py-1", 3, "routerLink", "routerLinkActive"]],
  template: function ArticleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArticleComponent_li_7_Template, 3, 4, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 1, ctx.topArticles$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe],
  styles: [".articleActive[_ngcontent-%COMP%] {\n  background-color: rgba(208, 208, 208, 0.25);\n}\n\n.articleActive[_ngcontent-%COMP%]:before {\n  font-family: \"Font Awesome 5 Free\";\n  content: \"\\f105\";\n  font-weight: 900;\n  position: absolute;\n  left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtBQUNKOztBQUVBO0VBQ0ksa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0oiLCJmaWxlIjoiYXJ0aWNsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcnRpY2xlQWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDgsIDIwOCwgMjA4LCAwLjI1KTtcclxufVxyXG5cclxuLmFydGljbGVBY3RpdmU6YmVmb3JlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIjtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTA1XCI7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuIH0iXX0= */"]
});

/***/ }),

/***/ 1782:
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function ContactComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.togle(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Nom et prenom is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_10_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.f["fullname"].errors["required"]);
} }
function ContactComponent_div_1_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_13_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_1_div_13_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f["email"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.f["email"].errors["email"]);
} }
function ContactComponent_div_1_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message must be at least 25 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message must not exceed 250 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_div_16_div_1_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_div_1_div_16_div_2_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_div_1_div_16_div_3_Template, 2, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f["message"].errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f["message"].errors["minlength"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.f["message"].errors["maxlength"]);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function ContactComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_1_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.togle(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ContactComponent_div_1_div_10_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactComponent_div_1_div_13_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactComponent_div_1_div_16_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17)(18, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_div_1_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.sendMessage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Envoyer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.submitted && ctx_r1.f["fullname"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f["fullname"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r1.submitted && ctx_r1.f["email"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f["email"].errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r1.submitted && ctx_r1.f["message"].errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.submitted && ctx_r1.f["message"].errors);
} }
class ContactComponent {
    constructor() {
        this.imgHide = true;
        this.submitted = false;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({
            fullname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.max(250), _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(25)]),
        });
    }
    ngOnInit() {
        // this.contactForm = this.formBuilder.group(
        //   {
        //     fullname: ['', Validators.required],
        //     email: ['', [Validators.required, Validators.email]],
        //     message: ['', [Validators.required,Validators.max(250),Validators.min(25)]]
        //   }
        // );
    }
    togle(value) {
        this.imgHide = value;
        if (value) {
            this.contactForm.reset();
        }
    }
    get f() {
        return this.contactForm.controls;
    }
    sendMessage() {
        this.submitted = true;
        if (this.contactForm.invalid) {
            return;
        }
        // console.log(JSON.stringify(this.contactForm.value, null, 2));
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 2, vars: 2, consts: [["class", "contact_icon cursor-pointer", 3, "click", 4, "ngIf"], ["class", "contact_form box-shadow", 4, "ngIf"], [1, "contact_icon", "cursor-pointer", 3, "click"], [1, "fas", "fa-comment-dots", "fa-2x", "msg_icon"], [1, "contact_form", "box-shadow"], [1, "container", "py-2"], [1, "row", "p-2", "d-flex", "justify-content-between"], [1, "col-6"], [1, "h4"], [1, "col-2", "d-flex", "align-items-center", "cursor-pointer", 3, "click"], [1, "fa", "fa-times-circle", "fa-lg"], [1, "row", "py-1", "px-2"], ["type", "text", "name", "fullname", "id", "fullname", "placeholder", "Nom, pr\u00E9nom", "formControlName", "fullname", "required", "", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "row", "py-2", "px-2"], ["type", "email", "name", "email", "id", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control", 3, "ngClass"], ["name", "messgae", "id", "", "cols", "20", "rows", "5", "placeholder", "Messgae", "formControlName", "message", "required", "", 1, "form-control", 3, "ngClass"], [1, "row", "p-3"], [1, "col-4", "mr-auto", "btn_send", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_Template, 20, 12, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.imgHide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.imgHide);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: [".cursor-pointer[_ngcontent-%COMP%] {\n  cursor: pointer !important;\n}\n\n.contact_form[_ngcontent-%COMP%] {\n  width: 300px;\n  border: 1px solid var(--mbtPrimary);\n  border-radius: 10px;\n  color: var(--mbtPrimary) !important;\n  background-color: #fff !important;\n}\n\ninput[_ngcontent-%COMP%] {\n  border: 1px solid var(--mbtPrimary) !important;\n  border-radius: 10px !important;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none !important;\n  border: 1px solid var(--mbtPrimary) !important;\n  border-radius: 10px !important;\n}\n\n.btn_send[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background-color: var(--mbtSecondary);\n  border: none !important;\n  outline: 2px solid var(--mbtSecondary);\n  outline-offset: 2px;\n}\n\n.msg_icon[_ngcontent-%COMP%] {\n  color: var(--mbtPrimary) !important;\n  padding: 10px;\n  border-radius: 50%;\n  border: 2px solid var(--mbtPrimary) !important;\n  transform: rotateY(-180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQkFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0FBQUo7O0FBR0E7RUFDSSw4Q0FBQTtFQUNBLDhCQUFBO0FBQUo7O0FBR0E7RUFDSSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFHQTtFQUNJLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUFBSjs7QUFHQTtFQUNJLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7RUFDQSwyQkFBQTtBQUFKIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmN1cnNvci1wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWN0X2Zvcm17XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1idFByaW1hcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYnRQcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1idFByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbWJ0UHJpbWFyeSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxuIH1cclxuXHJcbi5idG5fc2VuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYnRTZWNvbmRhcnkpO1xyXG4gICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1tYnRTZWNvbmRhcnkpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxufVxyXG5cclxuLm1zZ19pY29ue1xyXG4gICAgY29sb3I6IHZhcigtLW1idFByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1idFByaW1hcnkpICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTE4MGRlZyk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = function () { return { exact: true }; };
const _c1 = function () { return { f: undefined }; };
const _c2 = function () { return { exact: false }; };
const _c3 = function () { return { f: "img" }; };
const _c4 = function () { return { f: "vid" }; };
const _c5 = function () { return { f: "doc" }; };
class HomeComponent {
    constructor(activeRoute, generaleService) {
        this.activeRoute = activeRoute;
        this.generaleService = generaleService;
        this.routeParams = {};
        this.queryParams = {};
        // this.activeRoute.params.subscribe((res:any) => {
        //   if(res){
        //     this.routeParams=res;
        //     if(this.langs.includes(res.lg)){
        //       this.generaleService.translateLanguageTo(res.lg);
        //     }else{
        //       this.generaleService.translateLanguageTo('fr',true);
        //     }
        //   }
        // });
        this.subQueryparams$ = this.activeRoute.queryParams.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((query) => query.q != null)).subscribe(res => this.queryParams = res);
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subQueryparams$.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 26, vars: 38, consts: [[1, "row", "d-flex", "align-items-center"], [1, "col-12", "border-bottom", "pb-2"], ["routerLinkActive", "FilterActive", "queryParamsHandling", "merge", 1, "p-1", "mx-3", "text-muted", "cursor-pointer", "filterBtn", 3, "routerLinkActiveOptions", "routerLink", "queryParams"], [1, "fas", "fa-search", "pe-1"], [1, "far", "fa-image", "pe-1"], [1, "far", "fa-play-circle", "pe-1"], [1, "far", "fa-file-alt", "pe-1"], [1, "row", "mt-4"], [1, "col-12"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 7)(19, "div", 8)(20, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](30, _c0))("routerLink", ".")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](31, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 18, "Tout"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](32, _c2))("routerLink", ".")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](33, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 20, "Images"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](34, _c2))("routerLink", ".")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](35, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 22, "Videos"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](36, _c2))("routerLink", ".")("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](37, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 24, "Documents"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("            ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 26, ctx.routeParams), "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("            ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 28, ctx.queryParams), "\n        ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.JsonPipe], styles: [".FilterActive[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--mbtPrimary) !important;\n  padding-bottom: 10px !important;\n  color: var(--mbtPrimary) !important;\n}\n\n.filterBtn[_ngcontent-%COMP%]:hover {\n  border-bottom: 2px solid #bebebe;\n  padding-bottom: 10px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxREFBQTtFQUNBLCtCQUFBO0VBQ0EsbUNBQUE7QUFDSjs7QUFFQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7QUFDSiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkZpbHRlckFjdGl2ZXtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYnRQcmltYXJ5KSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1tYnRQcmltYXJ5KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsdGVyQnRuOmhvdmVye1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYigxOTAsIDE5MCwgMTkwKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 3252:
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);



class NavbarComponent {
    constructor(translate, generaleService) {
        this.translate = translate;
        this.generaleService = generaleService;
        this.activeLg = this.generaleService.activeLanguage;
    }
    ngOnInit() { }
    translateLanguageTo(lg) {
        this.generaleService.activeLanguage.next(lg);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService)); };
NavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 6, consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "py-2"], [1, "container-fluid"], [1, "navbar-brand", "col-lg-3", "col-sm-4", "col-5", "text-center", "mr-auto"], ["src", "./assets/img/MOBILETIC_Logo.png", "alt", "mobiletic logo", 1, "navbar-logo", "w-50", "m-auto"], [1, "d-flex", "me-4"], [1, "p-1", "mx-1", "lgBtn", "text-center", "h5", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_5_listener() { return ctx.translateLanguageTo("fr"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_7_listener() { return ctx.translateLanguageTo("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "En");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_9_listener() { return ctx.translateLanguageTo("de"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "De");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("lgBtnActive", ctx.activeLg.getValue() == "fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("lgBtnActive", ctx.activeLg.getValue() == "en");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("lgBtnActive", ctx.activeLg.getValue() == "de");
    } }, styles: ["*[_ngcontent-%COMP%] {\n  transition: all 0.5s;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  color: #00FC88 !important;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: #6A1FFF !important;\n  color: #FFFFFF !important;\n}\n\n.active[_ngcontent-%COMP%] {\n  background-color: #00FC88;\n  color: #ffffff !important;\n  border-radius: 5px;\n  margin: 0 5px;\n  font-size: 1.2rem;\n}\n\n.disconet[_ngcontent-%COMP%] {\n  justify-content: center !important;\n  transition: all 0.5s;\n}\n\n.lgBtn[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 35px;\n  height: 35px;\n  border: none;\n  background-color: var(--mbtSecondary) !important;\n  color: #2b2b2bbd !important;\n  cursor: pointer;\n}\n\n.lgBtnActive[_ngcontent-%COMP%] {\n  outline: 2px solid #fff !important;\n  outline-offset: 2px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLG9CQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtFQUNBLDhCQUFBO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICAgIGNvbG9yOiAjMDBGQzg4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZBMUZGRiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBGQzg4O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLmRpc2NvbmV0IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLmxnQnRue1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgaGVpZ2h0OjM1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYnRTZWNvbmRhcnkpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzJiMmIyYmJkICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sZ0J0bkFjdGl2ZXtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8768:
/*!*******************************************************************!*\
  !*** ./src/app/components/satisfaction/satisfaction.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SatisfactionComponent": () => (/* binding */ SatisfactionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 7514);





function SatisfactionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SatisfactionComponent_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.review(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SatisfactionComponent_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.review(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Ces informations vous-ont elles \u00E9t\u00E9 utiles ?"));
} }
function SatisfactionComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "Merci pour vos commentaires."));
} }
function SatisfactionComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14)(1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SatisfactionComponent_div_2_ng_template_2_Template_input_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r8.review(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "Nous sommes d\u00E9sol\u00E9s."));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "Comment pouvons-nous l'am\u00E9liorer ?"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 7, "Envoyer"));
} }
function SatisfactionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SatisfactionComponent_div_2_div_1_Template, 4, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SatisfactionComponent_div_2_ng_template_2_Template, 11, 9, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.satisfyed)("ngIfElse", _r6);
} }
class SatisfactionComponent {
    constructor(generaleService, activeRoute) {
    }
    ngOnInit() {
        this.satisfyed = null;
        // console.log('articleId',this.articleId);
    }
    review(rep) {
        this.satisfyed = rep;
    }
    inistialize() {
        this.ngOnInit();
    }
}
SatisfactionComponent.ɵfac = function SatisfactionComponent_Factory(t) { return new (t || SatisfactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
SatisfactionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SatisfactionComponent, selectors: [["app-satisfaction"]], inputs: { articleId: "articleId" }, decls: 3, vars: 2, consts: [[1, "row", "pt-5"], ["class", "col-12 text-center mbt-primary-text", 4, "ngIf"], ["class", "col-12", 4, "ngIf"], [1, "col-12", "text-center", "mbt-primary-text"], [1, "d-flex", "flex-row", "justify-content-center", "align-items-center"], [1, "m-1", "p-1", "cursor-pointer", 3, "click"], [1, "fas", "fa-smile", "text-warning", "bg-dark", "fa-2x", "rounded-circle", "overflow-hidden", "border", "border-dark"], [1, "m-1", "h2"], [1, "fas", "fa-frown", "text-warning", "bg-dark", "fa-2x", "rounded-circle", "overflow-hidden", "border", "border-dark"], [1, "col-12"], ["class", "text-center mbt-primary-text", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "text-center", "mbt-primary-text"], [1, "h6"], [1, "m-auto", "text-left"], [1, "mbt-primary-text", "h6"], [1, "mbt-primary-text"], [1, "col-6", "d-flex", "flex-column"], ["name", "", "id", "", "cols", "30", "rows", "4", 1, "form-control"], ["type", "submit", 1, "btn", "mbt-primary", "form-control", "with-content", "px-3", "mt-2", 3, "value", "click"]], template: function SatisfactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SatisfactionComponent_div_1_Template, 11, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SatisfactionComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.satisfyed == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.satisfyed != null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: ["textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border: 2px solid var(--mbtPrimary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdGlzZmFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsbUNBQUE7QUFDSiIsImZpbGUiOiJzYXRpc2ZhY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZXh0YXJlYSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbnRleHRhcmVhOmZvY3Vze1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW1idFByaW1hcnkpO1xyXG59Il19 */"] });


/***/ }),

/***/ 9055:
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/generale.service */ 6651);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 7514);






class SearchComponent {
    constructor(activeRoute, generaleService, router) {
        this.activeRoute = activeRoute;
        this.generaleService = generaleService;
        this.router = router;
        this.queryParams = {};
        this.searchTerm$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(null);
        this.subQueryparams = this.activeRoute.queryParams
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((res) => { if (res.q == undefined)
            this.searchTerm$.next(null); }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((res) => res.q != undefined || res.q != null))
            .subscribe((res) => {
            if (res.q == '') {
                this.router.navigate(['/']);
            }
            else {
                this.searchTerm$.next(res.q);
            }
        });
        this.subSearch = this.searchTerm$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((text) => text != null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.debounceTime)(500), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.distinctUntilChanged)())
            .subscribe((text) => {
            // console.log('text',text);
            let lg = this.generaleService.activeLanguage.getValue();
            if (text != '') {
                this.router.navigate(['/' + lg + '/search'], {
                    queryParams: { q: text },
                    queryParamsHandling: 'merge',
                });
            }
            else
                this.router.navigate(['/' + lg + '/article']);
        });
    }
    ngOnInit() { }
    ngOnDestroy() {
        this.subQueryparams.unsubscribe();
        this.subSearch.unsubscribe();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_generale_service__WEBPACK_IMPORTED_MODULE_0__.GeneraleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 17, vars: 10, consts: [[1, "container-fluid"], [1, "row", "align-items-center", "justify-content-between"], [1, "col-lg-3", "col-sm-12", "text-center"], [1, "col-lg-7", "col-md-12", "p-0", "m-0", "mt-2"], [1, "search", "w-50", "m-auto"], [1, "fa", "fa-search"], ["type", "search", "id", "search", 1, "form-control", 3, "placeholder", "value", "input"], ["searhInput", ""], [1, "col-lg-2", "col-md-12", "btnManuel", "text-center", "mt-2"], [1, "btn", "mbt-primary", "h-100", "box-shadow", "text-nowrap"], ["src", "https://img.icons8.com/officel/16/000000/export-pdf.png"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10); return ctx.searchTerm$.next(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 8)(13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 4, "TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 6, "Avoir une question? Demande maintenant"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.searchTerm$.getValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 8, "Manual de formation"), " ");
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".search[_ngcontent-%COMP%] {\n  position: relative;\n  box-shadow: 0 0 10px rgba(51, 51, 51, 0.1);\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 40px;\n  text-indent: 25px;\n  border: 2px solid #d6d4d4;\n}\n\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n  border: 2px solid var(--mbtPrimary);\n}\n\n.search[_ngcontent-%COMP%]   .fa-search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12.5px;\n  left: 16px;\n}\n\n.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 110px;\n  background: var(--mbtPrimary);\n}\n\n.btnManuel[_ngcontent-%COMP%] {\n  height: 40px !important;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFSTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQ1I7O0FBR0k7RUFDSSxnQkFBQTtFQUNBLG1DQUFBO0FBQVI7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBQVI7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUFSOztBQUdJO0VBQ0ksdUJBQUE7RUFDQSxlQUFBO0FBQVIiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlYXJjaHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoNTEsIDUxLCA1MSwgLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2ggaW5wdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHRleHQtaW5kZW50OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkNmQ0ZDQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zZWFyY2ggaW5wdXQ6Zm9jdXN7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1tYnRQcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoIC5mYS1zZWFyY2h7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMTIuNXB4O1xyXG4gICAgICAgIGxlZnQ6IDE2cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLnNlYXJjaCBidXR0b257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1idFByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG5NYW51ZWx7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgfSJdfQ== */"] });


/***/ }),

/***/ 6651:
/*!**********************************************!*\
  !*** ./src/app/services/generale.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneraleService": () => (/* binding */ GeneraleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 7514);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);







class GeneraleService {
    constructor(router, translate, httpClient) {
        this.router = router;
        this.translate = translate;
        this.httpClient = httpClient;
        this.activeLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.activeUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('');
        this.fristArticle = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.lg$ = null;
        this.routeParams = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.navigateTo = null;
        this.langs = ['en', 'de', 'fr'];
        // Register translation languages
        translate.addLangs(this.langs);
        // Set default language
        this.router.events.subscribe((event) => {
            // console.log('event.snapshot',event);
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivationEnd) {
                if (event.snapshot.params['lg'] &&
                    this.langs.includes(event.snapshot.params['lg'])) {
                    translate.setDefaultLang(event.snapshot.params['lg']);
                    this.activeLanguage.next(event.snapshot.params['lg']);
                    // console.log('activeLg', this.activeLanguage.getValue())
                }
                else {
                    translate.setDefaultLang('fr');
                    this.activeLanguage.next('fr');
                }
            }
        });
        this.activeLanguage
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((res) => res != null))
            .subscribe((lg) => {
            let _url = this.router.url.split('/');
            if (_url.length >= 2 && this.langs.includes(_url[1])) {
                _url[1] = lg;
            }
            else {
                _url[1] = 'fr';
            }
            // console.log('_url',_url);
            _url = _url.join('/');
            this.router.navigateByUrl(_url);
        });
    }
    getTopArticles(lg) {
        return this.httpClient.get('/api/lmshelp/' + lg + '/topArticles');
    }
    getArticleChilde(lg, code, increment = null) {
        let artilceUrl = increment != null ? '/api/lmshelp/' + lg + '/getArticle/' + code + '/' + increment : '/api/lmshelp/' + lg + '/getArticle/' + code;
        return this.httpClient.get(artilceUrl);
    }
    makeSession() {
        return this.httpClient.get('/api/lmshelp/createSession');
    }
}
GeneraleService.ɵfac = function GeneraleService_Factory(t) { return new (t || GeneraleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
GeneraleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GeneraleService, factory: GeneraleService.ɵfac, providedIn: 'root' });


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
    production: false
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
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