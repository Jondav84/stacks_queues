/** @format */

import Stack from "./stack";

const calculator = (expression) => {
  const calcStack = new Stack();
  const tokens = expression.split("");

  for (let token of tokens) {
    if (!isNaN(parseFloat(token))) {
      calcStack.push(parseFloat(token));
    } else {
      const operand2 = calcStack.pop();
      const operand1 = calcStack.pop();

      switch (token) {
        case "+":
          calcStack.push(operand1 + operand2);
          break;
        case "-":
          calcStack.push(operand1 - operand2);
          break;
        case "*":
          calcStack.push(operand1 * operand2);
          break;
        case "/":
          calcStack.push(operand1 / operand2);
          break;
        default:
          throw new Error("Invalid operator: " + token);
      }
    }
  }
  return calcStack.peek();
};

export default calculator;
