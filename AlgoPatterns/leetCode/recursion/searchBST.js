// recursive
// timeC = o(n) spaceC = o(n);

const searchBST = (root, val) => {
  if (!root) return null;
  if (val === root.val) return root;

  if (val < root.val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};

// iterative
// timeC = o(n) spaceC = o(1);

var searchBST2 = (root, val) => {
  while (root && val !== root.val) {
    if (val < root.val) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return root;
};
