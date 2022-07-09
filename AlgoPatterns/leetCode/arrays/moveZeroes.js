// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
  //   create a pointer
  let pointer = 0;
  let zeroCounter = 0;
  //   create for loop which is i = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pointer] = nums[i];
      pointer++;
    } else if (nums[i] === 0) {
      zeroCounter++;
    }
  }

  for (let j = nums.length - 1; j > nums.length - (zeroCounter + 1); j--) {
    nums[j] = 0;
  }

  return nums;
};
