import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcolatrice',
  templateUrl: './calcolatrice.component.html',
  styleUrls: ['./calcolatrice.component.css']
})
export class CalcolatriceComponent {
  expression: string = '';
  memory: string[] = []

  constructor() { }

  aggiungi(carattere: string) {
    var lastChar: string = this.expression.charAt(this.expression.length - 1)

    if(this.isOperator(lastChar) && this.isOperator(carattere)) {
      carattere = ''
    }

    this.expression += carattere
  }

  calcola() {
    var lastChar: string = this.expression.substr(this.expression.length - 1, this.expression.length)

    if(this.isOperator(lastChar)) this.funzione('undo') 
    if(this.expression.includes('sin(')) {
      if(this.expression.includes('arc')) this.expression = this.expression.replace('arcsin(', 'Math.asin(Math.PI / 180 * ')
      else this.expression = this.expression.replace('sin(', 'Math.sin(Math.PI / 180 * ')
    }
    if(this.expression.includes('cos(')) {
      if(this.expression.includes('arc')) this.expression = this.expression.replace('arcsin(', 'Math.acos(Math.PI / 180 * ')
      else this.expression = this.expression = this.expression.replace('cos(', 'Math.cos(Math.PI / 180 * ')
    }
    if(this.expression.includes('tan(')) {
      if(this.expression.includes('arc')) this.expression = this.expression.replace('arctan(', 'Math.atan(Math.PI / 180 * ')
      else this.expression = this.expression.replace('tan(', 'Math.tan(Math.PI / 180 * ')
    }
    if(this.expression.includes('π')) this.expression = this.expression.replace('π', 'Math.PI')
    if(this.expression.includes('√(')) this.expression = this.expression.replace('√(', 'Math.sqrt(')
    if(this.expression.includes('log(')) this.expression = this.expression.replace('log(', 'Math.log10(')
    if(this.expression.includes('10^(')) this.expression = this.expression.replace('10^(', `Math.pow(10, `)

    this.expression = eval(this.expression)
  }

  funzione(fun: string) {
    switch(fun) {
      case 'reverse': {
        if(this.expression != '') {
          if(this.expression.startsWith('-')) this.expression = this.expression.replace('-', '+')
          else if(this.expression.startsWith('+'))this.expression = this.expression.replace('+', '-')
          else this.expression = '-' + this.expression
        }
      }; break;
      case 'C': this.expression = ''; break;
      case 'undo': this.expression = this.expression.slice(0, this.expression.length - 1); break;
    }
  }

  isOperator(char: string) {
    return char == '+' || char == '/' || char == '*' || char == '-' ? true : false;
  }

  session() {
    this.memory.push(this.expression)
  }

  del(item) {
    for( var i = 0; i < arr.length; i++){ 
      if ( arr[i] === 5) {
      arr.splice(i, 1); 
    }
}
    console.log(this.memory)
    return false
  }

  clear() {
    this.memory.length = 0;
  }
}