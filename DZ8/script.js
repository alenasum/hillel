const resultEl = document.querySelector('#result');

const list = document.querySelector('#list');

const li = document.querySelector('.list-item.red');

const btn = document.querySelector('#myButton');

function onBtnClick() {
    const firstValue = document.querySelector('#firstValue');

    const secondValue = document.querySelector('#secondValue');

    const operation = document.querySelector('#operation').value;

    let result = 0;

    switch (operation) {
        case '+':
            result = +firstValue.value + +secondValue.value;
            break;
        case '-':
            result = +firstValue.value - +secondValue.value;
            break;
        case '*':
            result = +firstValue.value * +secondValue.value;
            break;
        case '/':
            result = +firstValue.value / +secondValue.value;
            break;
    }

    resultEl.innerHTML = `${firstValue.value} ${operation} ${secondValue.value} = ${result}`;
}

btn.addEventListener('click', onBtnClick);