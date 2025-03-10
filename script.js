const display = document.getElementById('display');

function addToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

function calculate() {
    try {
        let expression = display.value;
        
        // Replace mathematical constants
        expression = expression.replace(/π/g, Math.PI);
        expression = expression.replace(/e/g, Math.E);
        
        // Handle square root
        expression = expression.replace(/√/g, 'Math.sqrt');
        
        // Handle power operator
        expression = expression.replace(/\^/g, '**');
        
        // Handle trigonometric functions
        expression = expression.replace(/sin/g, 'Math.sin');
        expression = expression.replace(/cos/g, 'Math.cos');
        expression = expression.replace(/tan/g, 'Math.tan');
        expression = expression.replace(/asin/g, 'Math.asin');
        expression = expression.replace(/acos/g, 'Math.acos');
        expression = expression.replace(/atan/g, 'Math.atan');
        
        // Handle logarithms
        expression = expression.replace(/log/g, 'Math.log10');
        expression = expression.replace(/ln/g, 'Math.log');
        
        // Handle factorial
        expression = expression.replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)));
        
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.' || key === '+' || key === '-' || 
        key === '*' || key === '/' || key === '(' || key === ')') {
        addToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});