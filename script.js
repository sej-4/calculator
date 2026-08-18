let operator;
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
    case "/":
      return divide(firstNumber, secondNumber);
    default:
      return null;
  }
}

function updateDisplay(value) {
  const display = document.querySelector(".display");
  display.textContent = value;
}

function updateNumbers(digit) {
  if (!operator) {
    firstNumber += digit;
    updateDisplay(firstNumber);
  } else {
    secondNumber += digit;
    updateDisplay(secondNumber);
  }
}

function setOperator(operatorType) {
  if (!firstNumber) {
    firstNumber = 0;
  }
  if (firstNumber && secondNumber && operator) {
    firstNumber = calculateResult();
    secondNumber = "";
  }
  operator = operatorType;
}

function calculateResult() {
  let result = operate(operator, +firstNumber, +secondNumber);
  updateDisplay(result);
  return result;
}

function clearCalculator() {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  updateDisplay("");
}

const container = document.querySelector(".container");
container.addEventListener("click", (event) => {
  const button = event.target;
  const buttonType = button.classList[0];

  if (buttonType === "digit") {
    updateNumbers(button.textContent);
  }

  if (buttonType === "operator") {
    setOperator(button.textContent);
  }

  if (buttonType === "equal") {
    calculateResult();
  }

  if (buttonType === "clear") {
    clearCalculator();
  }
});
