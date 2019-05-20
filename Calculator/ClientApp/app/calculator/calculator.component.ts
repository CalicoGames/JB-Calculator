import { Component, OnInit, HostListener } from '@angular/core';


import { Calculation } from '../calculation';
import { CalcService } from '../calc.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
    allowed: string;
    last: Calculation;
    current: Calculation;

  constructor(private calcService: CalcService) { }

    ngOnInit() {
        this.allowed = '0123456789.-−+/*xX×=CcAa';
        this.current = new Calculation();
        this.calcService.getLast().subscribe(calc => {
            this.last = calc;
            this.current.firstOperand = calc.result.toString();
        });

    }

    // Allow keyboard shortcuts.
    @HostListener('document:keypress', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
        var key: string = event.key;
        // only pass allowed keys
        if (this.allowed.includes(key)) {
            this.onClick(key);
        }
        else if (key == 'Enter') {
            this.onClick('=');
        }
    }

    // handle button presses
    onClick(input: string) {
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

        } else if (input == '=')
        {
            // Solve operation.
            this.solve('');

        }
        else if (input == 'A')
        {
            // clear current operation
            this.current = new Calculation();
        }
        else if (input == 'C')
        {
            // clear the current element
            if (this.current.secondOperand) {
                this.current.secondOperand = '';
            } else if (this.current.operator) {
                this.current.operator = '';
            } else {
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
    }

    solve(nextOp: string) {
        // Only solve if we have data.
        if (this.current.firstOperand && this.current.operator && this.current.secondOperand) {
            this.last = this.current;
            this.current = new Calculation();
            // Send to API for results.
            this.calcService.getCalc(this.last).subscribe(calc => {
                this.last.result = calc.result;
                if (nextOp) {
                    this.current.operator = nextOp;
                }
                this.current.firstOperand = calc.result.toString();
            });
        }
    }

    pushNumber(num: string, text: string): string {
        var result: string;
        if (!text || text == '0') {
            // push new number on empty string.
            result = num;
        }
        else {
            // append element to end of string
            result = text + num;
        }
        return result;
    }


}
