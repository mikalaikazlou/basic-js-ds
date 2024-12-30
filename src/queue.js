//const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    if (!this.length) {
      this.head = new ListNode(value);
    } else {
      let currentHead = this.head;
      while (currentHead.next) {
        currentHead = currentHead.next;
      }
      currentHead.next = new ListNode(value);
    }
    this.length++;
    return this.head;
  }

  dequeue() {
    let node = this.head;
    if (!this.length) {
      return null;
    } else {
      this.head = node.next;
      let currentHead = this.next;
      while (currentHead) {
        currentHead.head = currentHead;
      }
    }
    this.length--;
    return node.value;
  }
}

module.exports = {
  Queue,
};
