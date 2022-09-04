let operandA = prompt('Введи первое число');

while (isOperandInvalid(operandA)) {
    operandA = prompt('Нормально введи первое число');
}

operandA = Number(operandA);

let operandB = prompt('Введи второе число');

while (isOperandInvalid(operandB)) {
    operandB = prompt('Нормально введи второе число');
}

operandB = Number(operandB);

let operation = prompt('Введи действие');

while (isOperationInvalid(operation)) {
    operation = prompt('Нормально введи действие');
}

let result = null;

switch (operation) {
    case '+':
        result = operandA + operandB; break;

    case '-':
        result = operandA - operandB; break;

    case '*':
        result = operandA * operandB; break;

    case '/':
        result = operandA / operandB; break;
}

alert(`${operandA} ${operation} ${operandB} = ${result}`);

function isOperandInvalid(inval) {
   return inval === null || inval.trim() === '' || isNaN(inval) 
}

function isOperationInvalid(operation) {
   return operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'     
}