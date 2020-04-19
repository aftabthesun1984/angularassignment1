class Calculator{

    firstNumber : number;
    secondNumber: number;

    constructor(num1: number, num2: number) {
        this.firstNumber = num1;
        this.secondNumber = num2;
    }
    Add(){
        console.log("Add of Two number = "+ (this.firstNumber + this.secondNumber));
    }
    Subtract (){
        console.log("Subtract of Two number = "+ (this.firstNumber - this.secondNumber));
    }
    Multiply(){
        console.log("Multiply of Two number = "+ (this.firstNumber * this.secondNumber));
    }
    Division (){
        console.log("Division  of Two number = "+ (this.firstNumber / this.secondNumber));
    }
}

var calculator = new Calculator(15, 10);
calculator.Add();
calculator.Subtract();
calculator.Multiply();
calculator.Division();

