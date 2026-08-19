let operator = "";
let firstNumber = "";
let secondNumber = "";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
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

function isNumber(value) {
  return value !== "" && !isNaN(value);
}

function updateDisplay(value) {
  const display = document.querySelector(".display");
  display.textContent = value;
}

function updateNumbers(value) {
  if (!operator) {
    firstNumber === 0 ? (firstNumber = value) : (firstNumber += value);
    firstNumber = Number(firstNumber);
    updateDisplay(firstNumber);
  } else {
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
      calculateResult();
      break;
    case "clear":
      clearCalculator();
  }
});
