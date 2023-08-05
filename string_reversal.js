/** @format */

import Stack from "./stack";

function reverseString(str) {
  const stringStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    stringStack.push(str.charAt(i));
  }
  let reversedStr = "";
  while (!stringStack.isEmpty()) {
    reversedStr += stringStack.pop();
  }
  return reversedStr;
}

export default reverseString;
