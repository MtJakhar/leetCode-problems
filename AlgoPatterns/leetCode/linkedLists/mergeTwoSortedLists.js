// timeC = O(n) spaceC = O(1)
const mergeTwoLists = (list1, list2) => {
  // anytime you use additon or subtraction use a dummy node
  // dummyNode.next will be returned, next is need cause dummy was not in original list
  let dummyNode = new ListNode(-1);
  //   dummy will be used as a prev as prev val will be changing
  let prev = dummyNode;

  //   while list1 and list2 are true or while they are not null
  while (list1 && list2) {
    // if list1 is less than list2
    if (list1.val <= list2.val) {
      // shift dummy pointer to list 1
      prev.next = list1;
      prev = list1;
      // move list.val to next val in list
      list1 = list1.next;
    } else {
      // shift dummy to list 2
      prev.next = list2;
      prev = list2;
      // move list.val to next val in list
      list2 = list2.next;
    }
  }
  //   if list1 is null move dummy prev to list2
  if (!list1) {
    prev.next = list2;
  }
  //   if list 2 is null move dummy prev to list1
  if (!list2) {
    prev.next = list1;
  }
  // return listNode by returning list without dummy attached
  return dummyNode.next;
};
