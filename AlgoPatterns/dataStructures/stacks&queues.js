//stack array implementation

let stack = [];

stack.push("google");
stack.push("insta");
stack.push("youtube");
stack.pop();
// using push and pop in trandom on a array will function as a stack!!

//stack implementation v2
let stackv2 = new Stack();
stackv2.push("First");
stackv2.push("Second");
stackv2.push("Third");
stackv2.push("Fourth");
stackv2.pop();

//A Stack class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack1 {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //  Pushing Pseudocode
  // 	• The function should accept a value
  push(val) {
    // 	• Create a new node with that value
    let newNode = new Node(val);
    // 	• If there are no nodes in the stack, set the first an last property to be the newly created node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // • If there is at least one node; create a variable that stores the current first property on the stack
      let temp = this.first;
      // • Reset the first property to ne the newly created node
      // • Set the next property on the node to be the previously created variable
      this.first = newNode;
      this.first.next = temp;
    }
    // Increment the size of the stack by 1
    return ++this.size;
  }

  pop(val) {
    // • If there are no nodes in the stack, return null
    if (!this.first) return null;
    // • Create a temporary variable to store the first property on the stack
    let temp = this.first;
    // • If there is only 1 more, set the first and last property to be null
    // • If there is more than one node , set the first property to be the next property on the current first
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;

    //     • Decrement the size by 1
    this.size--;
    // Return the value of the node removed
    return temp.value;
  }
}

//Queue array implementation
let q = [];

q.unshift("first");
q.unshift("second");
q.unshift("third");

q.pop();
q.pop();
//this shows first in first out principles

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // • This function accepts some value
  enqueue(val) {
    // • Create a new node using that value passed to the function
    let newNode = new Node(val);
    // • If there are no nodes in the queue, set this node to be the first and last property of the queue
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    // • If there is no first property, just return null;
    if (!this.first) return null;
    // • Store the first property in a varibale
    let temp = this.first;
    // • See if the first is the same as the last
    if (this.first === this.last) {
      this.last = null;
    }
    // • If there is more than 1 node, set the first property to be the next property of first
    this.first = this.first.next;
    // • Decrement the size by 1
    this.size--;
    // • Return the value of the node dequeued
    return temp.value;
  }
}
