var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, HostListener } from '@angular/core';
import { Calculation } from '../calculation';
import { CalcService } from '../calc.service';
var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(calcService) {
        this.calcService = calcService;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allowed = '0123456789.-−+/*xX×=CcAa';
        this.current = new Calculation();
        this.calcService.getLast().subscribe(function (calc) {
            _this.last = calc;
            _this.current.firstOperand = calc.result.toString();
        });
    };
    CalculatorComponent.prototype.handleKeyboardEvent = function (event) {
        var key = event.key;
        if (this.allowed.includes(key)) {
            this.onClick(key);
        }
        else if (key == 'Enter') {
            this.onClick('=');
        }
        else if (key == 'Backspace') {
            this.onClick(key);
        }
    };
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
                    // only add if first . this number
                    this.current.secondOperand += '.';
                }
            }
            else {
                if (!this.current.firstOperand.includes('.')) {
                    this.current.firstOperand += '.';
                }
            }
        }
        else if (input == '=') {
            // Solve operation.
            this.solve('');
        }
        else if (input == 'A') {
            this.current = new Calculation();
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
            this.current = new Calculation();
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
            result = text + num;
        }
        return result;
    };
    __decorate([
        HostListener('document:keypress', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], CalculatorComponent.prototype, "handleKeyboardEvent", null);
    CalculatorComponent = __decorate([
        Component({
            selector: 'app-calculator',
            templateUrl: './calculator.component.html',
            styleUrls: ['./calculator.component.css']
        }),
        __metadata("design:paramtypes", [CalcService])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
export { CalculatorComponent };
//# sourceMappingURL=calculator.component.js.map