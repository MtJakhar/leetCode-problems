// recursion

// timeC = o(n) spaceC = o(n)

const swapPairs = (head) => {
  //     if the list had no node or has only one node left;
  if (head === null || head.next === null) {
    return head;
  }
  // nodes to be swapped
  let firstNode = head;
  let secondNode = head.next;
  //     swapping
  firstNode.next = swapPairs(secondNode.next);
  secondNode.next = firstNode;
  //     now the head is the second node
  return secondNode;
};

// iterative
// timeC = o(n) spaceC = o(1)

const swapPairs2 = (head) => {
  const dummy = new ListNode();
  dummy.next = head;
  let temp = dummy;

  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next;
    temp.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    temp = node1;
  }

  return dummy.next;
};
