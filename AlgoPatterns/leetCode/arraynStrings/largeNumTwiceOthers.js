const dominantIndex = (nums) => {
  let largestIdx = 0;
  let largestValue = 0;
  for (let i = 0; i < nums.length; i++) {
    if (largestValue < nums[i]) {
      largestIdx = 1;
      largestValue = nums[i];
    }
  }
  for (let i = 0; i < nums.length; i++) {
    let product = nums[i] * 2;
    if (largestValue < product) {
      return -1;
    }
  }
  return largestIdx;
};
