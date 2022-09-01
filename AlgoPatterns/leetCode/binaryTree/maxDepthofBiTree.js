// timeC = O(n) spaceC = O(n)

const maxDepth = (root) => {
  //using recursion to solve this problem by creating helper function
  let maxNodes = (node, sum) => {
    // if there are no nodes return sum, which is 0
    if (node === null) {
      return sum;
    }
    // goes through entire depth of left and right brances of tree, than choosing branch
    // which has most depth, function calls itself until conditions are meet (node === null),
    return Math.max(
      maxNodes(node.left, sum + 1),
      maxNodes(node.right, sum + 1)
    );
  };

  // sets sum to zero which shall be incremented, and inputs tree(root) into function.
  return maxNodes(root, 0);
};
