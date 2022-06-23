//piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Pushing Pseudocode
  // This function should accept a value
  push(val) {
    // Create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list. set the head and tail to be the newly created node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
      this.tail.next = newNode;
      this.tail - newNode;
    }
    // Increment the length by one
    this.length++;
    // return
    return this;
  }

  //Popping removing a node from the end of the linked list
  pop(val) {
    //if there are no nodes in the list, return undefined
    if (!this.head) return undefined;
    // loop through the list until you reach the tail
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // set the next property of the 2nd to last node to be null
    // set the tail to be the 2nd to last node
    this.tail = newTail;
    this.tail.next = null;
    // Decrement the length of the list by 1
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // return the value of the node removed
    return current;
  }
  // Shifting- removing a new node from the beginning of the linked list.
  shift(val) {
    // if there are no nodes, return undefined
    if (!this.head) return undefined;
    // Store the current head property in a variable
    let currentHead = this.head;
    // set the head property to be the current heads next property
    this.head = currentHead.next;
    // decrement the length by 1
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    // Return the value of the node removed
    return currentHead;
  }
  // Unshift adding a new node to the beginning of the linked list
  // This function should accept a value
  unshift(val) {
    // create a new node using the value passed to the function
    let newNode = new Node(val);
    // if there is no head property on the list, set the head and tail to be the newly created node
    if (!head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // otherwise set teh newly created nodes next property to be the current head property on the list
      newNode.next = this.head;
      // set the head property on the list to ne that newly created node
      this.head = newNode;
    }

    // increment the length of the list by 1
    this.length++;
    // Return the linked list
    return this;
  }

  //Get - retrieving a node by its position in the linked List!
  // This function should accpt an index
  get(index) {
    // if the index is less than zero or greater than or equal to the length of the list, return null
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    // Loop through the list until you reach the index and return the node at the specific index
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //set- changing the value of a node based on tis position in the linkied list
  // this function should accept a value and an index
  set(val, index) {
    // Use your get function to find the specific node
    let foundNode = this.get(index);
    // if the node is not found, return false
    // if the node is found, set teh value of that node to be the value passed to the function and return true
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert - adding a node to the linked list ar a specific position
  insert(index, val) {
    // if the index is less than zero or greater than the length , return false
    if (index < 0 || index > this.length) return false;
    // if the index is  the same as the length, psuh a new node to the end of the list
    if (index === this.length) return this.push(val);
    // if the index is 0, unshift a new node to the start of the list
    if (index === 0) this.unshift(val);
    // Otherwise, using the get method, access the node the index -1
    // set the next property on that node to be the new node
    let newNode = new Node(val);
    let prev = this.get(index - 1);
    // set the next property on the new node to be the previous next
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    // INcrement the length
    this.length++;
    // Return true
    return true;
  }

  // Remove- removing a node form the linked list at a specific position
  remove(index) {
    // if the index is less than zero or greater the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    // if the index is 0, shift
    if (index === 0) return this.shift();
    // if the index is the same as the length-1, pop
    if (index === this.length - 1) return this.pop();
    // Otherwise, using the get method, access the node atthe index - 1
    let previousNode = this.get(index - 1);
    // Set the next property on that node to be the next of the next node
    let removed = previousNode.next;
    previousNode.next = removed.next;
    // Decrement the length
    this.length--;
    // Return the value of the node removed
    return removed;
  }

  // Reverse- reversing the Linked list in place!
  reverse() {
    // Swapp the head and tail
    // create a variable called node and initialize it to the head property
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    // create a variable called next
    let next;
    // create a variable called prev
    let prev = null;
    // loop through the list
    for (var i = 0; i < this.length; i++) {
      // set next to be the next property on whatever node is
      next = node.next;
      // set the next property on the node to be whatever prev is
      node.next = prev;
      // set prev to be the value of the node variable
      prev = node;
      // Set the node variable to be the value of the next variable
      node = next;
    }
    return this;
  }
}

// the below method is an example of how to add a new node to the list but it is inefficent
// let first = new Node("hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")

let list = new SinglyLinkedList();
list.push("Hello");
list.push("Goodbye");

// Big O of singly Linked List
