import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number | undefined;
  num2: number | undefined;
  result: number | undefined;

  constructor() {
  }
  add() {
    this.result = this.num1 + this.num2;
  }
  minus() {
    this.result = this.num1 - this.num2;
  }
  multi() {
    this.result = this.num1 * this.num2;
  }
  divide() {
    this.result = this.num1 / this.num2;
  }
  ngOnInit() {
  }

}
