function createCalculator(result) {
    let calculator = {
        set: function (number) {
            result = number;

            return number;
        },
        add: function (number) {
            result += number;
            return result;
        },
        mult: function (number) {
            result *= number;
            return result;
        },
        sub: function (number) {
            result -= number;
            return result;
        },
        div: function (number) {
            result /= number;
            return result;
        }
    }
    return calculator;
}

const calc = createCalculator(100);

console.log(calc.add(10));
console.log(calc.div(10));
console.log(calc.mult(5));
console.log(calc.sub(100));
console.log(calc.set(50));
console.log(calc.add(10));