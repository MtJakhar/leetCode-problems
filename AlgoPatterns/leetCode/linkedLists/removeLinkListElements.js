//  ListNode is a node class in Leetcode problem
// TimeC = O(N), SpaceC = O(1);
const removeElements = (head, val) => {
  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let current = head;

  while (current) {
    if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }
  return dummy.next;
};
