const isSymmetric = (root) => {
  // if there are no nodes it is symmetical
  if (root === null) {
    return true;
  }

  // create helper function
  let isMirror = (tree1, tree2) => {
    // this will compare left and right branches of the tree.
    // it will return true or false based on whether both sides are null
    if (tree1 === null || tree2 === null) {
      return tree1 === tree2;
    }
    // compares values of nodes if values are not equal recursion
    //  will stop
    if (tree1.val !== tree2.val) {
      return false;
    }
    //  once left and right branches pass if statements
    // recursion will repeat itself until truee or false is returned
    return (
      isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left)
    );
  };

  return isMirror(root.left, root.right);
};
