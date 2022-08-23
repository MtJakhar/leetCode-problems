const getIntersectionNode = (headA, headB) => {
  // edge case if there is not head in either linkedList
  if (headA === null || headB === null) {
    return null;
  }
  // create pointers for both heads
  let pointA = headA;
  let pointB = headB;

  // create while loop to compare values of linked list and find intersection
  // loop will break if points are at same node
  while (pointA !== pointB) {
    // advance points
    pointA = pointA.next;
    pointB = pointB.next;

    //  if nodes both are equal to null it returns null.
    if (pointA === null && pointB === null) {
      return null;
    }
    // if points reach end of their list start at the head of the list its being compared to
    if (pointA === null) {
      pointA = headB;
    }
    // ibid
    if (pointB === null) {
      pointB = headA;
    }
  }
  return pointA;
};
