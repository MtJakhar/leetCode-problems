// timeC = O(n) spaceC = O9n)
// iterative error revaluate
const postorderTraversal = (root) => {
  // if (!root) return [];
  // const stack = [root];
  // const result = [];
  // while (stack.length) {
  //   let node = stack.pop();
  //   if (node.right) stack.push(node.right);
  //   result.push(node.val);
  //   if (node.left) stack.push(node.left);
  // }
  // return result;
};

// recursive
const postorderTraversal2 = (root) => {
  if (!root) return [];
  const result = [];

  const inorder = (node) => {
    if (!node) return null;

    if (node.left) inorder(node.left);
    result.push(node.val);
    if (node.right) inorder(node.right);
  };

  inorder(root);
  return result;
};
