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

function updateDisplay(value) {
  const display = document.querySelector(".display");
  display.textContent = value;
}

function updateNumbers(value) {
  if (!operator) {
    firstNumber += value;
    updateDisplay(firstNumber);
  } else {
    secondNumber += value;
    updateDisplay(secondNumber);
  }
}

function setOperator(operatorType) {
  if (!firstNumber) firstNumber = 0;

  if (operator && firstNumber && secondNumber) {
    firstNumber = calculateResult();
    secondNumber = "";
  }

  operator = operatorType;
}

function calculateResult() {
  const result = operate(operator, +firstNumber, +secondNumber);
  updateDisplay(result);
  return result;
}

function clearCalculator() {
  operator = "";
  firstNumber = "";
  secondNumber = "";
  updateDisplay("");
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
