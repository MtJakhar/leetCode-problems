// Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.
// timeC = O(n), spaceC = O(1)
const sortArrayByParity = (nums) => {
  if (nums.length === 1) {
    return nums;
  }
  // create a left and right pointer
  let left = 0;
  let right = nums.length - 1;

  //   create while loop
  while (left < right) {
    if (nums[right] % 2 === 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
    if (nums[right] % 2 !== 0) {
      right--;
    }
    if (nums[left] % 2 === 0) {
      left++;
    }
  }
  return nums;
};

let object = {
  "haroon age": 18,
  "harron height": "6 feet +",
};
