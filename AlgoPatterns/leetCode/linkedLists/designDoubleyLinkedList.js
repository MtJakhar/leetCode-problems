// doubley linked list

class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let current = this.head;

    while (index--) {
      current = current.next;
    }

    return current.val;
  }

  addAtHead(val) {
    let prev = this.head;
    let next = this.head.next;

    let newNode = new Node(val, prev, next);

    prev.next = newNode;
    next.prev = newNode;

    this.length++;
  }

  addAtTail(val) {
    let prev = this.tail.prev;
    let next = this.tail;

    let newNode = new Node(val, prev, next);

    prev.next = newNode;
    next.prev = newNode;

    this.length++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) return null;
    if (index === this.length) {
      return this.addAtTail(val);
    }
    let prev = this.head;
    while (index--) {
      prev = prev.next;
    }
    let next = prev.next;
    let newNode = new Node(val, prev, next);

    prev.next = newNode;
    next.prev = newNode;

    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }

    let prev = this.head;

    while (index--) {
      prev = prev.next;
    }
    let next = prev.next.next;

    prev.next = next;
    next.prev = prev;

    this.length--;
  }
}
