const intersection = (nums1, nums2) => {
  let firstSet = new Set();

  for (let num of nums1) {
    firstSet.add(num);
  }

  let intersectionSet = new Set();
  for (let num of nums2) {
    if (firstSet.has(num)) {
      intersectionSet.add(num);
    }
  }

  return Array.from(intersectionSet);
};
