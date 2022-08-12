// timeC = O(N), SpaceC = O(1);
const reverseList = (head) => {
  let current = head;
  let prev = null;
  let next;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
