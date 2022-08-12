// timeC = O(n), spaceC = O(1);

const reverse = (head) => {
  let current = head;
  let prev = null;
  let next;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const isPalindrome = (head) => {
  let fast = head;
  let slow = head;
  let startPointer = head;
  let length = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    length++;
  }

  let mid = reverse(slow);

  while (length) {
    length--;
    if (mid.val !== startPointer.val) return false;
    mid = mid.next;
    startPointer = startPointer.next;
  }
  return true;
};
