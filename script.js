let operator;
let number1 = "";
let number2 = "";

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
    number1 += digit;
    updateDisplay(number1);
  } else {
    number2 += digit;
    updateDisplay(number2);
  }
}

function setOperator(operatorType) {
  if (!number1) {
    number1 = 0;
  }
  if (number1 && number2 && operator) {
    number1 = calculateResult();
    number2 = "";
  }
  operator = operatorType;
}

function calculateResult() {
  let result = operate(operator, +number1, +number2);
  updateDisplay(result);
  return result;
}

function clearCalculator() {
  number1 = "";
  operator = "";
  number2 = "";
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
