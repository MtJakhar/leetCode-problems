// timeC = O(n) spaceC = O(n)
const hasPathSum = (root) => {
  if (root === null) {
    return false;
  }

  let hasPath = false;

  const dfs = (node, sum) => {
    if (node.left === null && node.right === null) {
      if (sum === node.val) {
        hasPath = true;
      }
      return;
    }

    if (node.left) {
      dfs(node.left, sum - node.val);
    }

    if (node.right) {
      dfs(node.right, sum - node.val);
    }
  };
  dfs(root, targetSum);

  return hashPath;
};

const hasPathSum2 = (root) => {
  if (root === null) {
    return false;
  }

  if (sum === root.val && root.left === null && root.right === null) {
    return true;
  }

  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
};
