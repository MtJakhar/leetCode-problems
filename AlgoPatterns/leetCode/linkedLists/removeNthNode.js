// TimeC = O(N), SpaceC = O(1);

const removeNthFromEnd = (head, n) => {
  // create a dummy node
  let dummyHead = new ListNode(-1);
  // set node after dummy to be head.
  dummyHead.next = head;
  // referece original dummy as dummy will change
  let resultHead = dummyHead;
  // create counter and tail
  let count = 0;
  let tail = head;

  // this will move tail to n number of times, but not true tail
  while (count < n) {
    count++;
    tail = tail.next;
  }
  // create new pointer for head
  let removedNode = head;
  // create a prev for head using dummynode
  let prev = dummyHead;

  // this while loop takes previous tail position of n to true tail position
  // once tail is null, removedNode should be at proper position where node is to be deleted
  while (tail) {
    tail = tail.next;
    removedNode = removedNode.next;
    prev = prev.next;
  }

  // removes the "n" parameter node.
  prev.next = removedNode.next;

  // return original head of node list
  return resultHead.next;
};
