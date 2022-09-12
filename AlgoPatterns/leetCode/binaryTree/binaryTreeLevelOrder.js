// timeC = O(n) spaceC = O(n)
const levelOrder = (root) => {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    let len = queue.length;
    result.push(queue.map((node) => node.val));

    while (len--) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

const levelOrder2 = (root) => {
  // create edge case for root
  if (!root) return [];
  // create array to store answers
  let result = [];
  // create a queue FIFO, and push in root node
  let queue = [root];
  // queue.push(root)

  // create loop that goes on until queue is empty
  // this loop will keep track of amount of row arrays and pushs them to result
  while (queue.length > 0) {
    // row will contain each level of the tree
    let row = [];

    // keep track howmany things are in row, keep track of number of elements within binary tree level
    let rowSize = queue.length;

    // this loop will build up elements in row array
    while (rowSize > 0) {
      // now doing BFS
      // take first element in queue
      let node = queue.shift();

      // now checj if selected node has children
      // if it has chidlren push them to the queue
      if (node.left) {
        queue.push(node.left);
      }

      if (node.right) {
        queue.push(node.right);
      }
      // push selected nodes value to row array
      row.push(node.val);
      rowSize--;
    }
    // push row/level to the result array
    result.push(row);
  }

  return result;
};
