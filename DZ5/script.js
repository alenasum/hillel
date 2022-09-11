let operation = prompt('Введи действие');

while (isOperationInvalid(operation)) {
    operation = prompt('Нормально введи действие');
}

const operandsStr = prompt('Введи операнды');

const operandsArr = operandsStr.split(',').map(str => {
    return Number(str);
});


let result = operandsArr[0];

for (let i = 1; i < operandsArr.length; i++) {
    switch (operation) {
        case '+':
            result += operandsArr[i];
            break;
        case '-':
            result -= operandsArr[i];
            break;
        case '*':
            result *= operandsArr[i];
            break;
        case '/':
            result /= operandsArr[i];
            break;
    }

}
console.log('Результат: ', result);

function isOperationInvalid(operation) {
    return operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/'
}