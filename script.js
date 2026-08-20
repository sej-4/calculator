let operator = "";
let firstNumber = "";
let secondNumber = "";
let result = "";

function round(value) {
  const multiplier = Math.pow(10, 8);
  return Math.round(value * multiplier) / multiplier;
}

function add(a, b) {
  return round(a + b);
}

function subtract(a, b) {
  return round(a - b);
}

function multiply(a, b) {
  return round(a * b);
}

function divide(a, b) {
  return round(a / b);
}

function operate(operator, firstNumber, secondNumber) {
  switch (operator) {
    case "+":
      return add(firstNumber, secondNumber);
    case "-":
      return subtract(firstNumber, secondNumber);
    case "x":
      return multiply(firstNumber, secondNumber);
    case "÷":
      return divide(firstNumber, secondNumber);
    default:
      return null;
  }
}

function convertToExponent() {
  const display = document.querySelector(".display");
  const value = display.textContent;
  display.textContent = Number(value).toExponential(2);
}

function updateDisplay(value) {
  const display = document.querySelector(".display");
  display.textContent = value;
  if (display.textContent.length > 9) convertToExponent();
}

function updateNumbers(value) {
  if (result !== "" && secondNumber !== "") clearCalculator();

  if (!operator) {
    if (firstNumber.toString().length === 9) return;
    firstNumber === 0 ? (firstNumber = value) : (firstNumber += value);
    firstNumber = Number(firstNumber);
    updateDisplay(firstNumber);
  } else {
    if (secondNumber.toString().length === 9) return;
    secondNumber === 0 ? (secondNumber = value) : (secondNumber += value);
    secondNumber = Number(secondNumber);
    updateDisplay(secondNumber);
  }
}

function setOperator(operatorType) {
  if (firstNumber === "") firstNumber = 0;

  if (
    (operator && firstNumber !== "" && secondNumber !== "") ||
    isNaN(firstNumber)
  ) {
    firstNumber = calculateResult();
    secondNumber = "";
  }

  operator = operatorType;
}

function calculateResult() {
  if (secondNumber === "") return;

  const result = operate(operator, firstNumber, secondNumber);
  updateDisplay(result);
  return result;
}

function clearCalculator() {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  result = "";
  updateDisplay(0);
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
