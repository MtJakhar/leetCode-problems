// TimeC = O(n), because linked list | spaceC = O(1)

const detectCycle = (head) => {
  if (!head) return null;
  if (!head.next) return null;
  // first determine if there is a cycle using fast slow method
  let slow = head;
  let fast = head;

  let pointer = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (fast !== slow) return null;
  // second find start of cycle by using third pointer to find when slow returns to start of cycle
  while (pointer !== slow) {
    pointer = pointer.next;
    slow = slow.next;
  }

  return slow;
};
