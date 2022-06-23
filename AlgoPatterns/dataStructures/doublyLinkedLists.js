class DoblyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Pushing- adding a node to the end of the doubly linked list

  // Pushing Pseudocode

  push(val) {
    // 	• Create a new node with the value passed to the function
    let newNode = new Node(val);
    // 	• If the head property is null set the head and tail to be the newly created node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 	• If not, set the next property on the tail to be that node
      this.tail.next = newNode;
      // 	• Set the previous property on the newly created node to be the tail
      newNode.prev = this.tail;
      // 	• Set the tail to be the newly created node
      this.tail = newNode;
    }
    // 	• Increment the length
    this.length++;
    // 	• Return the Doubly Linked List
    return this;
  }
  // Popping- removing a node from the end of the doubly linked list
  pop() {
    // 	• If there is nor head, return undefined
    if (!head) return undefined;
    // 	• Store the current tail in a variable to return later
    let poppedNode = this.tail;
    // 	• If the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // 	• Update the tail to be the previous Node
      this.tail = poppedNode.prev;
      // 	• Set the newTails next to null
      this.tail.next = null;
      poppedNode.prev = null;
    }
    // 	• Decrement the length
    this.length--;
    // Return the value removed
    return poppedNode;
  }

  // Shift- removing node from the beginning of a linked list
  shift() {
    // 	• If length is 0, return undefined
    if (this.length === 0) return undefined;
    // 	• Store the current head property in a variable
    let oldHead = this.head;
    // 	• If the length is one
    // 		○ Set the head to be null
    // 		○ Set the tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // 	• Update the head to be the next of the old head
    this.head = oldhead.next;
    // 	• Set the heads prev property to null
    this.head.prev = null;
    // 	• Set the old heads prev to null
    oldHead.next = null;
    // 	• Decrement the length
    this.length--;
    // Return old head
    return oldHead;
  }

  unshift(val) {
    // 	• Create a new node with the value passed to the function
    let newNode = newNode(val);
    // 	• If the length is 0
    // 		○ Set the head to be the new node
    // 		○ Set the tail to be the new node
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 	• Otherwise
      // 		○ Set the prev property on the head of the list to be the new node
      // 		○ Set the next property on the new node to be the head property
      // 		○ Update the head to be the new node
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    // 	• Increment the length
    this.length++;
    // Return the list
    return this;
  }

  // Get- accessing a node in a linked list by its position
  get(index) {
    // 	• If the index is less than 0 or greater or equal to the length, return null
    if (index < 0 || index >= this.length) return null;
    let count, current;
    // 	• If the index is less than or equal to half the length of the list
    // 		○ Loop through the list starting from the head and loop towards the middle
    // 		○ Return the node once it is found
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      // 	• If the index is greater than half the length of the list
      // 		○  Loop through the list starting from the tail and loop towards the middle
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    //  Return the node once it is found
    return current;
  }

  //   Set
  set(index, val) {
    //   Replacing the value of a node to the in a Doubly linked list
    let foundNode = this.get(index);
    //       • Create a variable which is the result of the get method at the index passed to the function
    //           ○ If the get method returns a vaild node, set the value of that node to be the value passed to the function
    //           ○ Return true
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    //   Otherwise, return false
    return false;
  }

  // Insert
  // Insert- adding a node in a doubly Linked list by a certain position
  insert(index, val) {
    // 	• If the index is less than zero or greater than or equal to the length return false
    if (index < 0 || index > this.length) return false;
    // 	• If the index is 0, unshift
    if (index === 0) return !!this.unshift(val);
    // 	• If the index is the same as the length, push
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    // 	• Use the get method to access the index -1
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    // 	• Set the next and prev properties on the correct nodes to link everything together
    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    // 	• Increment the length
    this.length++;
    // Return true
    return true;
  }

  // Remove
  // Removing a node in a Doubly Linked List by a certain position
  remove(index) {
    // 	• If the index is less than zero or greater than or equal to the length return undefined
    if (index < 0 || index >= this.length) return undefined;
    // 	• If the index is 0, shift
    if (index === 0) return this.shift();
    // 	• If the index is the same as the length -1, pop
    if (index === this.length - 1) return this.pop();
    // 	• Use the get method to retrieve the item to be removed
    let removeNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;
    // 	• Update the next and prev properties to remove the found  node from the list
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;

    // 	• Set next and prev to null on the found node
    removeNode.next = null;
    removeNode.prev = null;
    // 	• Decrement the length
    this.length--;
    // Return the removed node
    return removedNode;
  }
}
