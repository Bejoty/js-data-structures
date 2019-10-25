'use strict';

/**
 * Linked list node containing a data value and reference to the next node.
 */
class Node {
  constructor(data, next=null) {
    this.data = data;
    this.next = next;
  }
}

/**
 * Simple singly-linked list implementation.
 */
class LinkedList {
  /**
   * Constructs an empty list.
   */
  constructor() {
    this.head = null;
  }

  /**
   * Inserts the specified value at the beginning of this list.
   * @param data
   */
  insert(data) {
    const node = new Node(data, this.head);
    this.head = node;
  }

  /**
   *
   * @param data
   * @returns {boolean}
   */
  includes(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    const list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    return `[${list.join(', ')}]`;
  }
}

module.exports = {LinkedList, Node};
