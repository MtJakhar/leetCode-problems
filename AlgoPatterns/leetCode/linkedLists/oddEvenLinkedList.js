// create two linked lists --> odd and even
// i wanto to place nodes in their respective lists
// if element is odd append node to odd list
// "" is even "" to even list

//  then at the very end connect two lists, connect the end of the oddlist withe the beginning of the evenLIst

const oddEvenList = (head) => {
  if (!head || !head.next) return head;

  let oddList = new ListNode(-1);
  let evenList = new ListNode(-1);
  let oddStart = oddList;
  let evenStart = evenList;
  let element = 1;
  let current = head;

  while (current !== null) {
    if (element % 2 === 1) {
      oddList.next = current;
      oddList = oddList.next;
    } else {
      evenList.next = current;
      evenList = evenList.next;
    }
    element++;
    current = current.next;
  }
  oddList.next = evenStart.next;
  evenList.next = null;

  return oddStart.next;
};
