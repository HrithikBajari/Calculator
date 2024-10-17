let displayValue = '0';
let expression = '';

function appendNumber(number) {
    if (displayValue === '0' || displayValue === 'Error') {
        displayValue = number.toString();
    } else {
        displayValue += number.toString(); 
    }
    expression += number.toString();  
    updateDisplay();
}

function setOperation(operation) {
    if (displayValue === 'Error') return;  

    if (['+', '-', '*', '/'].includes(displayValue.slice(-1))) {
        return;
    }

    displayValue += ' ' + operation + ' ';
    expression += operation;  
    updateDisplay();
}

function calculate() {
    try {
        let result = eval(expression);  
        displayValue = result.toString();
    } catch (error) {
        displayValue = 'Error';  
    }
    expression = displayValue;  
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length > 1) {
        displayValue = displayValue.trim().slice(0, -1);  
    } else {
        displayValue = '0';
    }
    expression = expression.slice(0, -1);  
    updateDisplay();
}

function resetCalc() {
    displayValue = '0';
    expression = '';
    updateDisplay();
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.textContent = displayValue;
}
