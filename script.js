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
    case "*":
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

let container = document.querySelector(".container");
container.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList[0] === "digit") {
    const digit = target.textContent;
    updateNumbers(digit);
  }
});
