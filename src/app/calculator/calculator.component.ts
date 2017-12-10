import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  currentNumber = "";
  result = 0;
  lastOperation = null;
  firstMove = 0;

  onClickNumber(number): void {
    this.currentNumber += number;
  }

  plusOperation(): void {
    this.makeOperation();
    this.lastOperation = "+";
  }

  abstOperation(): void {
    this.makeOperation();
    this.lastOperation = "-";
  }

  divOperation(): void {
    this.makeOperation();
    this.lastOperation = "/";
  }

  multOperation(): void {
    this.makeOperation();
    this.lastOperation = "*";
  }

  negativeButton(): void {
    if (this.currentNumber != "") {
      var temp = this.currentNumber.substr(0, 1);
      this.currentNumber = (temp != "-") ? ("-" + this.currentNumber) : this.currentNumber.substr(1, this.currentNumber.length);
    }
  }

  makeOperation(): void {
    if (this.firstMove != 0) {
      switch (this.lastOperation) {
        case "+":
          this.result = this.result + Number(this.currentNumber);
          break;
        case "-":
          this.result = this.result - Number(this.currentNumber);
          break;
        case "/":
          this.result = this.result / Number(this.currentNumber);
          break;
        case "*":
          this.result = this.result * Number(this.currentNumber);
          break;
      }
    } else {
      this.result = Number(this.currentNumber);
      this.firstMove += 1;
    }
    this.currentNumber = "";
  }

  showResult(): void {
    this.makeOperation();
    this.lastOperation = "";
  }

  clean(): void {
    this.currentNumber = "";
  }

  cleanAll(): void {
    this.currentNumber = "";
    this.result = 0;
    this.firstMove = 0;
    this.lastOperation = null;
  }

}
