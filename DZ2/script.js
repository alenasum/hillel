let operandA = prompt('Введи первое число');

while (isOperandValid(operandA)) {
    operandA = prompt('Нормально введи первое число');
}

operandA = Number(operandA);

let operandB = prompt('Введи второе число');

while (isOperandValid(operandB)) {
    operandB = prompt('Нормально введи второе число');
}

operandB = Number(operandB);

let operation = prompt('Введи действие');

while (isOperationValid(operation)) {
    operation = prompt('Нормально введи действие');
}

switch (operation) {
    case '+':
        result = operandA + operandB;

        alert(`${operandA} + ${operandB} = ${result}`);
        break;

    case '-':
        result = operandA - operandB;

        alert(`${operandA} - ${operandB} = ${result}`);
        break;

    case '*':
        result = operandA * operandB;

        alert(`${operandA} * ${operandB} = ${result}`);
        break;

    case '/':
        result = operandA / operandB;

        alert(`${operandA} / ${operandB} = ${result}`);
        break;
}

function isOperandValid(val) {
    if (isNaN(val) || val === null) {
        return true;
    } else {
        return false;
    }
}

function isOperationValid(operation) {
    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        return true;
    } else {
        return false;
    }
}