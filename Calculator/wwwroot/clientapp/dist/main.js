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

/***/ "./app/app.component.css":
/*!*******************************!*\
  !*** ./app/app.component.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./app/app.component.html":
/*!********************************!*\
  !*** ./app/app.component.html ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n    <h1>{{title}}</h1>\r\n</div>\r\n<app-calculator></app-calculator>"

/***/ }),

/***/ "./app/app.component.ts":
/*!******************************!*\
  !*** ./app/app.component.ts ***!
  \******************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Calculator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/*!***************************!*\
  !*** ./app/app.module.ts ***!
  \***************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./app/app.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./app/calculator/calculator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/calc.service.ts":
/*!*****************************!*\
  !*** ./app/calc.service.ts ***!
  \*****************************/
/*! exports provided: CalcService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcService", function() { return CalcService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalcService = /** @class */ (function () {
    function CalcService(http) {
        this.http = http;
        this.url = "api/Calc";
    }
    CalcService.prototype.getLast = function () {
        return this.http.get(this.url);
    };
    CalcService.prototype.getCalc = function (calc) {
        return this.http.post(this.url, calc);
    };
    CalcService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CalcService);
    return CalcService;
}());



/***/ }),

/***/ "./app/calculation.ts":
/*!****************************!*\
  !*** ./app/calculation.ts ***!
  \****************************/
/*! exports provided: Calculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculation", function() { return Calculation; });
var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    return Calculation;
}());



/***/ }),

/***/ "./app/calculator/calculator.component.css":
/*!*************************************************!*\
  !*** ./app/calculator/calculator.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calc {\r\n\r\n}\r\n.calc table\r\n{\r\n    margin: 10px;\r\n}\r\n.calc button {\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 4px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTs7SUFFSSxZQUFZO0FBQ2hCO0FBQ0k7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QiIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhbGMge1xyXG5cclxufVxyXG4uY2FsYyB0YWJsZVxyXG57XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuICAgIC5jYWxjIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./app/calculator/calculator.component.html":
/*!**************************************************!*\
  !*** ./app/calculator/calculator.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"calc\">\r\n    <div *ngIf=\"last\">\r\n        <b>Last Calculation:</b> {{last.firstOperand | number:'1.0-10' }} {{last.operator}} {{last.secondOperand | number:'1.0-10'}} = {{last.result | number:'1.0-10' }}\r\n    </div>\r\n    <div><b>Input: </b>{{current.firstOperand }} {{current.operator}} {{current.secondOperand }}</div>\r\n    <table>\r\n        <tr>\r\n            <td><button (click)=\"onClick('A')\">AC</button></td>\r\n            <td><button (click)=\"onClick('C')\">C</button></td>\r\n        </tr>\r\n        <tr>\r\n            <td><button (click)=\"onClick('9')\">9</button></td>\r\n            <td><button (click)=\"onClick('8')\">8</button></td>\r\n            <td><button (click)=\"onClick('7')\">7</button></td>\r\n            <td><button (click)=\"onClick('÷')\">÷</button></td>\r\n        </tr>\r\n        <tr>\r\n            <td><button (click)=\"onClick('6')\">6</button></td>\r\n            <td><button (click)=\"onClick('5')\">5</button></td>\r\n            <td><button (click)=\"onClick('4')\">4</button></td>\r\n            <td><button (click)=\"onClick('×')\">×</button></td>\r\n        </tr>\r\n        <tr>\r\n            <td><button (click)=\"onClick('3')\">3</button></td>\r\n            <td><button (click)=\"onClick('2')\">2</button></td>\r\n            <td><button (click)=\"onClick('1')\">1</button></td>\r\n            <td><button (click)=\"onClick('−')\">−</button></td>\r\n        </tr>\r\n        <tr>\r\n            <td><button (click)=\"onClick('0')\">0</button></td>\r\n            <td><button (click)=\"onClick('.')\">.</button></td>\r\n            <td><button (click)=\"onClick('=')\">=</button></td>\r\n            <td><button (click)=\"onClick('+')\">+</button></td>\r\n        </tr>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "./app/calculator/calculator.component.ts":
/*!************************************************!*\
  !*** ./app/calculator/calculator.component.ts ***!
  \************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _calculation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../calculation */ "./app/calculation.ts");
/* harmony import */ var _calc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calc.service */ "./app/calc.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(calcService) {
        this.calcService = calcService;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allowed = '0123456789.-−+/*xX×=CcAa';
        this.current = new _calculation__WEBPACK_IMPORTED_MODULE_1__["Calculation"]();
        this.calcService.getLast().subscribe(function (calc) {
            _this.last = calc;
            _this.current.firstOperand = calc.result.toString();
        });
    };
    // Allow keyboard shortcuts.
    CalculatorComponent.prototype.handleKeyboardEvent = function (event) {
        var key = event.key;
        // only pass allowed keys
        if (this.allowed.includes(key)) {
            this.onClick(key);
        }
        else if (key == 'Enter') {
            this.onClick('=');
        }
    };
    // handle button presses
    CalculatorComponent.prototype.onClick = function (input) {
        if (!isNaN(Number(input))) {
            // If a number, add to the appropriate operand.
            if (this.current.operator) {
                this.current.secondOperand = this.pushNumber(input, this.current.secondOperand);
            }
            else {
                this.current.firstOperand = this.pushNumber(input, this.current.firstOperand);
            }
        }
        else if (input == '.') {
            if (this.current.operator) {
                if (!this.current.secondOperand.includes('.')) {
                    // only add decimal point if number doesn't have one already.
                    if (!this.current.secondOperand) {
                        // if blank, add zero first.
                        this.current.secondOperand = '0';
                    }
                    this.current.secondOperand += '.';
                }
            }
            else {
                if (!this.current.firstOperand.includes('.')) {
                    // only add decimal point if number doesn't have one already.
                    if (!this.current.firstOperand) {
                        // if blank, add zero first.
                        this.current.firstOperand = '0';
                    }
                    this.current.firstOperand += '.';
                }
            }
        }
        else if (input == '=') {
            // Solve operation.
            this.solve('');
        }
        else if (input == 'A') {
            // clear current operation
            this.current = new _calculation__WEBPACK_IMPORTED_MODULE_1__["Calculation"]();
        }
        else if (input == 'C') {
            // clear the current element
            if (this.current.secondOperand) {
                this.current.secondOperand = '';
            }
            else if (this.current.operator) {
                this.current.operator = '';
            }
            else {
                this.current.firstOperand = '';
            }
        }
        else {
            // should be an operation.
            if (this.current.operator && this.current.secondOperand) {
                //Already have an operation lined up, solve then set operation against results.
                this.solve(input);
            }
            this.current.operator = input;
        }
    };
    CalculatorComponent.prototype.solve = function (nextOp) {
        var _this = this;
        // Only solve if we have data.
        if (this.current.firstOperand && this.current.operator && this.current.secondOperand) {
            this.last = this.current;
            this.current = new _calculation__WEBPACK_IMPORTED_MODULE_1__["Calculation"]();
            // Send to API for results.
            this.calcService.getCalc(this.last).subscribe(function (calc) {
                _this.last.result = calc.result;
                if (nextOp) {
                    _this.current.operator = nextOp;
                }
                _this.current.firstOperand = calc.result.toString();
            });
        }
    };
    CalculatorComponent.prototype.pushNumber = function (num, text) {
        var result;
        if (!text || text == '0') {
            // push new number on empty string.
            result = num;
        }
        else {
            // append element to end of string
            result = text + num;
        }
        return result;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CalculatorComponent.prototype, "handleKeyboardEvent", null);
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./app/calculator/calculator.component.css")]
        }),
        __metadata("design:paramtypes", [_calc_service__WEBPACK_IMPORTED_MODULE_2__["CalcService"]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./environments/environment.ts":
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi ./main.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jesse\source\repos\Calculator\Calculator\ClientApp\main.ts */"./main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map