var Calculator = /** @class */ (function () {
    function Calculator(num1, num2) {
        this.firstNumber = num1;
        this.secondNumber = num2;
    }
    Calculator.prototype.Add = function () {
        console.log("Add of Two number = " + (this.firstNumber + this.secondNumber));
    };
    Calculator.prototype.Subtract = function () {
        console.log("Subtract of Two number = " + (this.firstNumber - this.secondNumber));
    };
    Calculator.prototype.Multiply = function () {
        console.log("Multiply of Two number = " + (this.firstNumber * this.secondNumber));
    };
    Calculator.prototype.Division = function () {
        console.log("Division  of Two number = " + (this.firstNumber / this.secondNumber));
    };
    return Calculator;
}());
var calculator = new Calculator(15, 10);
calculator.Add();
calculator.Subtract();
calculator.Multiply();
calculator.Division();
