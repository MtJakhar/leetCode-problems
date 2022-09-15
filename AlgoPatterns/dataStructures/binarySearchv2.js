// binary Search Tree

// create a  node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// create binary tree class
class BST {
  constructor() {
    this.root = null;
    this.count = 1;
  }

  size() {
    return this.count;
  }

  insert(value) {
    this.count++;

    let newNode = new Node(value);

    const searchTree = (node) => {
      // if value < node.value, go left
      if (value < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      }
      // if value > node.value, go right
      else if (value > node.value) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }

  min() {
    // continue traveling left until no children
    let currentNode = this.root;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    // continue traveling right until no children
    let currentNode = this.root;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    return currentNode.value;
  }

  contains(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  //   the following methods are dfs and search branch by branch
  dfsInorder() {
    let result = [];
    let root = this.root;
    if (!root) return [];

    const inorder = (node) => {
      // if child exist, go left again
      if (node.left) inorder(node.left);
      // capture root node value
      result.push(node.val);
      // if right child exists, go right again
      if (node.right) inorder(node.right);
    };
    inorder(root);
    return result;
  }

  dfsPreorder() {
    let result = [];
    let root = this.root;
    if (!root) return [];

    const preorder = (node) => {
      result.push(node.val);
      if (node.left) inorder(node.left);
      if (node.right) inorder(node.right);
    };
    preorder(root);
    return result;
  }

  dfsPostorder() {
    let result = [];
    let root = this.root;
    if (!root) return [];

    const postorder = (node) => {
      // if child exist, go left again
      if (node.left) postorder(node.left);
      // if right child exists, go right again
      if (node.right) postorder(node.right);
      // capture root node value
      result.push(node.val);
    };
    postorder(root);
    return result;
  }
  //   bfs is a level by level search
  //  use a queue
  bfs() {
    let result = [];
    let queue = [this.root];

    while (queue.length) {
      let node = queue.shift();

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      result.push(node.val);
    }
    return result;
  }
}

const bst = new BST(15);

bst.insert(3);
bst.insert(36);
bst.insert(2);
bst.insert(12);
bst.insert(28);
bst.insert(39);

bst.size();

bst.min();
bst.max();

bst.contains(2);
bst.contains(9);

bst.dfsInorder();
