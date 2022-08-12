const getIntersectionNode = (headA, headB) => {
  if (headA === null || headB === null) {
    return null;
  }

  let pointA = headA;
  let pointB = headB;

  while (pointA !== pointB) {
    pointA = pointA.next;
    pointB = pointB.next;

    if (pointA === pointB) {
      return pointA;
    }

    if (pointA === null) {
      pointA = headB;
    }

    if (pointB === null) {
      pointB = headA;
    }
  }
  return pointA;
};
