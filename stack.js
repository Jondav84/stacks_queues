/**
 * Node: node for a stack.
 *
 * @format
 */
import Deque from "./deque";

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.stack = new Deque();
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    if (val === null || val === undefined) {
      throw new Error("Invalid input: value cannot be null or undefined");
    }
    this.stack.pushBack(val);
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.stack.getSize() === 0) {
      throw new Error("The Stack is empty");
    }
    return this.stack.popBack();
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    if (this.stack.getSize() === 0) {
      throw new Error("The stack is empty");
    }
    return this.stack.peekBack();
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.stack.isEmpty();
  }
}

export default Stack;
