let currentOperation = null;
let currentValue = '0';
let previousValue = null;

const display = document.getElementById('display');

function updateDisplay() {
  display.textContent = currentValue;
}

function appendNumber(number) {
  if (currentValue === '0') {
    currentValue = String(number);
  } else {
    currentValue += String(number);
  }
  updateDisplay();
}

function setOperation(operator) {
  if (currentOperation !== null) {
    calculateResult();
  }
  previousValue = currentValue;
  currentValue = '0';
  currentOperation = operator;
}
function appendDot() {
    if (!currentValue.includes('.')) {
      currentValue += '.';
      updateDisplay();
  }
}
function toggleSign() {
    if (currentValue !== '0') {
      currentValue = String(parseFloat(currentValue) * -1);
      updateDisplay();
  }
}

function calculateResult() {
  if (currentOperation === null || previousValue === null) return;

  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);
  switch (currentOperation) {
    case '+':
      currentValue = String(a + b);
      break;
    case '-':
      currentValue = String(a - b);
      break;
    case '*':
      currentValue = String(a * b);
      break;
    case '/':
      currentValue = b === 0 ? 'Error' : String(a / b);
      break;
    case '%':
      currentValue = String(a / 100); 
 }
  currentOperation = null;
  previousValue = null;
  updateDisplay();
}

function clearDisplay() {
  currentValue = '0';
  previousValue = null;
  currentOperation = null;
  updateDisplay();
}