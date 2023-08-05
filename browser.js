/** @format */

import Deque from "./deque";

class Browser {
  constructor() {
    this.backStack = new Deque();
    this.forwardStack = new Deque();
  }

  navigateTo(url) {
    this.backStack.pushBack(url);
    this.forwardStack = new Deque();
  }

  navigateBack() {
    if (this.canGoBack()) {
      const currentPage = this.backStack.popBack();
      this.forwardStack.pushBack(currentPage);
      return this.getCurrentPage();
    } else {
      return null;
    }
  }

  navigateForward() {
    if (this.canGoForward()) {
      const currentPage = this.forwardStack.popBack();
      this.backStack.pushBack(currentPage);
      return this.getCurrentPage();
    } else {
      return null;
    }
  }

  canGoBack() {
    return this.backStack.getSize() > 1;
  }
  canGoForward() {
    return !this.forwardStack.isEmpty();
  }
  getCurrentPage() {
    return this.backStack.peekBack();
  }
}

export default Browser;
