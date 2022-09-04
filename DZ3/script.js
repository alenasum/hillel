let operand = prompt('Введи число');

while (isOperandInvalid(operand)) {
    operand = prompt('Нормально введи число');
}

operand = Number(operand);

function isOperandInvalid(inval) {
    return inval === null || inval.trim() === '' || isNaN(inval) || inval <= 0
}

let chetnoe = 0;
let nechetnoe = 0;
let result = 0;

while (result <= operand) {
    if (result % 2 === 0) {
        chetnoe = chetnoe + result;
    } else {
        nechetnoe = result + nechetnoe;
    }

    result++;
}

alert('Сумма четных: ' + chetnoe);
alert('Сумма нечетных: ' + nechetnoe);