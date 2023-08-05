/** @format */

import Stack from "./stack";

function hasBalancedBrackets(str) {
  const stringStack = new Stack();
  const openingBrackets = "([{";
  const closingBrackets = ")]}";

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    if (openingBrackets.includes(char)) {
      stringStack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingBracket = openingBrackets[closingBrackets.indexOf(char)];
      if (stringStack.isEmpty() || stringStack.pop() !== matchingBracket) {
        return false;
      }
    }
  }
  return stringStack.isEmpty();
}

export default hasBalancedBrackets;
