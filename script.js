let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";

function round(value) {
  const multiplier = Math.pow(10, 8);
  return Math.round(value * multiplier) / multiplier;
}

const calculator = {
  add(a, b) {
    return round(a + b);
  },
  subtract(a, b) {
    return round(a - b);
  },
  multiply(a, b) {
    return round(a * b);
  },
  divide(a, b) {
    const result = round(a / b);
    return result === Infinity ? NaN : result;
  },
};

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return calculator.add(firstNumber, secondNumber);
    case "-":
      return calculator.subtract(firstNumber, secondNumber);
    case "x":
      return calculator.multiply(firstNumber, secondNumber);
    case "÷":
      return calculator.divide(firstNumber, secondNumber);
    default:
      return null;
  }
}

function convertToExponentialNotation() {
  const display = document.querySelector(".display");
  display.textContent = Number(display.textContent).toExponential(2);
}

function updateDisplay(value) {
  const display = document.querySelector(".display");
  display.textContent = value;
  if (display.textContent.length > 10) convertToExponentialNotation();
}

function clearCalculator() {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  updateDisplay(0);
}

function isMaxLength(value) {
  return value.toString().length === 9;
}

function isEmpty(value) {
  return value === "";
}

function updateNumbers(value) {
  if (!isEmpty(firstNumber) && !isEmpty(secondNumber) && !isEmpty(result))
    clearCalculator();

  if (isEmpty(firstNumber)) {
    if (isMaxLength(firstNumber)) return;
    firstNumber === 0 ? (firstNumber = value) : (firstNumber += value);
    firstNumber = Number(firstNumber);
    updateDisplay(firstNumber);
  } else {
    if (isMaxLength(secondNumber)) return;
    secondNumber === 0 ? (secondNumber = value) : (secondNumber += value);
    secondNumber = Number(secondNumber);
    updateDisplay(secondNumber);
  }
}

function setOperator(operatorType) {
  if (isEmpty(firstNumber)) firstNumber = 0;

  if (!isEmpty(firstNumber) && !isEmpty(secondNumber)) {
    firstNumber = calculateResult();
    secondNumber = "";
    result = "";
  }

  operator = operatorType;
}

function calculateResult() {
  if (isEmpty(secondNumber)) return;

  const result = operate(operator, firstNumber, secondNumber);
  updateDisplay(result);
  return result;
}

const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
  const button = event.target;
  const buttonType = button.classList[0];

  switch (buttonType) {
    case "digit":
      updateNumbers(button.textContent);
      break;
    case "operator":
      setOperator(button.textContent);
      break;
    case "equal":
      result = calculateResult();
      break;
    case "clear":
      clearCalculator();
  }
});
