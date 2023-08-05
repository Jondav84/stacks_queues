/** @format */

import Deque from "./deque";

class CircularDeque extends Deque {
  pushFront(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.tail.next = this.head;
      this.head.prev = this.tail;
    }
    this.size++;
  }
  popFront() {
    if (!this.head) {
      return undefined;
    }
    const value = this.head.val;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = this.tail;
    }

    this.size--;
    return value;
  }
}

export default CircularDeque;
