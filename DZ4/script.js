let operation = prompt('Введи действие');

while (isOperationInvalid(operation)) {
    operation = prompt('Нормально введи действие');
}

let operationCount = prompt('Введи количество действий');

while (isCountInvalid(operationCount)) {
    operationCount = prompt('Нормально введи количество действий');
}

let operand = prompt('Введи число');

while (isOperandInvalid(operand)) {
    operand = prompt('Нормально введи число');
} 

let result = null;

result = calculate(operation, operationCount, result);

alert(result);

// Здесь должен быть нормальный алерт, но я не успела сделать)

function isOperationInvalid(operation) {
   return operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'     
}

function isCountInvalid(inval) {
    return inval === null || inval.trim() === '' || isNaN(inval) || inval <= 2
 }

 function isOperandInvalid(inval) {
    return inval === null || inval.trim() === '' || isNaN(inval) || inval <= 0
}

function calculate(operation, operationCount, result) {
    operand = Number(operand);

    for (let i = 0; i < operationCount - 1; i++) {
        operand = +prompt('Введи число');
    
        if (i === 0) {
            result = operand;
        }
    
        if (operation === '+') {
            result += operand;
        } else if (operation === '-') {
            result -= operand;
        } else if (operation === '*') {
            result *= operand;
        } else if (operation === '/') {
            result /= operand;
        }
    }

    return result;
}

