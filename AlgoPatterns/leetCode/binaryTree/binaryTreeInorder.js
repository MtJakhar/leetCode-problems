// timeC = O(n) spaceC = O(n)
// iterative error with this
const inorderTraversal = (root) => {
  if (!root) return [];
  let stack = [];
  let output = [];
  while (stack.length || node !== null) {
    if (node !== null) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      output.push(node.val);
      node = node.right;
    }
  }
  return output;
};

// recursive
const inorderTraversal2 = (root) => {
  // if no node reutn empty node at root
  if (!root) return [];
  // create and empty array to store order of values
  const result = [];

  // when using recusion create a helper function
  const inorder = (node) => {
    //  if no node return null
    if (!node) return null;
    // if node.left recurse inorder with node
    if (node.left) inorder(node.left);
    // add value of node to array
    result.push(node.val);
    //  if there is no left go right
    if (node.right) inorder(node.right);
  };

  // call helper function
  inorder(root);
  // return array order
  return result;
};
