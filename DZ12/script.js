function Calculator(number) {
  this.result = number;

  this.sum = function (num) {
    this.result = this.result + num;
    return this.result;
  }

  this.mult = function (num) {
    this.result = this.result * num;

    return this.result;
  }

  this.sub = function (num) {
    this.result = this.result - num;

    return this.result;
  }

  this.div = function (num) {
    this.result = this.result / num;

    return this.result;
  }
}

const calc = new Calculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.result);