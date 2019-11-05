import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  expression: string = '';

  constructor() { }

  aggiungi(carattere: string) {
    var lastChar: string = this.expression.substr(this.expression.length - 1, this.expression.length)

    if(this.isOperator(lastChar) && this.isOperator(carattere)) {
      carattere = ''
    }

    this.expression += carattere
  }

  calcola() {
    this.expression = eval(this.expression)
  }

  funzione(fun: string) {
    switch(fun) {
      case 'reverse': this.expression = '-' + this.expression; break;
      case 'C': this.expression = ''; break;
      case 'undo': this.expression = this.expression.substr(0, this.expression.length - 1); break;
    }
  }

  isOperator(char: string) {
    return char == '+' || char == '/' || char == '*' || char == '-' ? true : false;
  }
}