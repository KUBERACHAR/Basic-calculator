// This script handles the functionality of a simple calculator.

// Appends a character to the input string and updates the display field with the new input
let input = '';

function press(char) {
  input += char;
  document.getElementById('display').value = input;
}

// * Evaluates the current input as a mathematical expression and updates the display.
// * Handles division by zero and other errors.
function calculate() {
  try {
    if (input.includes('/0')) {
      throw new Error("Division by zero");
    }
    const result = eval(input);
    document.getElementById('display').value = result;
    input = result.toString();
  } catch (err) {
    document.getElementById('display').value = "Error!";
    input = '';
  }
}

// Clears the calculator input and display.
function clearDisplay() {
  input = '';
  document.getElementById('display').value = '';
}

// Keyboard Inputs
document.addEventListener('keydown', (event) => {
  const key = event.key;
  const allowedKeys = '0123456789+-*/.';
  if (allowedKeys.includes(key)) {
    press(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Backspace') {
    input = input.slice(0, -1);
    document.getElementById('display').value = input;
  } else if (key === 'c') {
    clearDisplay();
  }
});