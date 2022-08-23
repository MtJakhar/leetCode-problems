class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //   [0,1,2,3,4,5]
  get(index) {
    if (!this.head) {
      return -1;
    }
    if (index < 0 || index >= this.length) {
      return -1;
    }

    let current = this.head;
    let counter = 0;

    while (index !== counter) {
      current = current.next;
      counter++;
    }

    return current.val;
  }

  addAtHead(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      newNode.next = current;
      this.head = newNode;
    }
    this.length++;
  }

  addAtTail(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      return this.addAtHead(val);
    }
    if (index === this.length) {
      return this.addAtTail(val);
    }

    let current = this.head;
    let counter = 0;

    let newNode = new Node(val);
    while (counter < index - 1) {
      current = current.next;
      counter++;
    }

    let after = current.next;
    current.next = newNode;
    newNode.next = after;

    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let counter = 0;

      while (counter < index - 1) {
        current = current.next;
        counter++;
      }
      let fNode = current.next;
      let after = fNode.next;
      current.next = after;
    }
    this.length--;
  }
}
