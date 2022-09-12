// timeC = O(n) spaceC = O(n)
const preorderTraversal = (root) => {
  if (!root) {
    return [];
  }

  const stack = [root];
  const result = [];

  while (stack.length) {
    let node = stack.pop();

    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return result;
};

const preorderTraversal2 = (root) => {
  // if not root retun empty
  if (!root) return [];
  // create and array to store values of tree
  const output = [];
  // create function which will push node val into outputt array
  const preorder = (node) => {
    // if no node return null
    if (!node) return null;
    // push val to array
    output.push(node.val);
    // go left and call preorder(node.left) this will continue until null
    if (node.left) preorder(node.left);
    // ibid with right
    if (node.right) preorder(node.right);
  };

  preorder(root);
  return output;
};
