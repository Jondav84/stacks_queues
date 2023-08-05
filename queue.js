/**
 * Node: node for a queue.
 *
 * @format
 */
import Deque from "./deque";
/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.queue = new Deque();
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    if (val === null || val === undefined) {
      throw new Error("Invalid input: value cannot be null or undefined");
    }
    this.queue.pushBack(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.queue.getSize() === 0) {
      throw new Error("The Queue is empty");
    }
    return this.queue.popFront();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.queue.getSize() === 0) {
      throw new Error("The Queue is empty");
    }
    return this.queue.peekFront();
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.queue.isEmpty();
  }
}

export default Queue;
