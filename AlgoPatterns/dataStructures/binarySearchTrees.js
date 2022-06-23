//Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // BST Insert
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // BST Find
  find(value) {
    if (this.root === null) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (!found && current) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
          // or return true
        }
      }
    }
    if (!found) return undefined;
    return current;
    // or return false
  }
  //   BFS() {
  //     let data = [];
  //     let queue = [];
  //     let node = this.root;
  //     queue.push(node);
  //     while (queue.length) {
  //       node = queue.shift();
  //       data.push(node);
  //       if (node.left) queue.push(node.left);
  //       if (node.right) queue.push(node.right);
  //     }
  //     return data;
  //   }
}

let tree = new BinarySearchTree();

tree.insert(10);
