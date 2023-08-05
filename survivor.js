/** @format */

import CircularDeque from "./circular_deque";

function findSurvivor(peopleCount, skip) {
  const survivors = new CircularDeque();

  for (let i = 1; i <= peopleCount; i++) {
    survivors.pushBack(i);
  }
  while (survivors.getSize() > 1) {
    for (let i = 1; i < skip; i++) {
      survivors.pushBack(survivors.popFront());
    }
    survivors.popFront();
  }
  return survivors.peekFront();
}

export default findSurvivor;
