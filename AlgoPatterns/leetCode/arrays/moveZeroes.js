// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

const moveZeroes = (nums) => {
  //   create a pointer
  let pointer = 0;
  // create a counter for zero
  let zeroCounter = 0;
  //   loop through array from 0 index
  for (let i = 0; i < nums.length; i++) {
    // if current index not eqaul to zero
    if (nums[i] !== 0) {
      // set pointer index to current index
      nums[pointer] = nums[i];
      // increment pointer
      pointer++;
    } else if (nums[i] === 0) {
      // otherwise if index is 0 increment counter
      zeroCounter++;
    }
  }

  // loop thorugh array staring for last index until elements equal to zero count are replaced with zeros
  for (let i = nums.length - 1; i > nums.length - (zeroCounter + 1); i--) {
    nums[i] = 0;
  }
  // return original array
  return nums;
};

const moveZeroes2 = function (nums) {
  // Initialize two pointers, one for the current element and one for the last non-zero element
  let current = 0; // Current element pointer
  let nonZeroIndex = 0; // Last non-zero element pointer

  // Iterate through the array
  while (current < nums.length) {
    // If the current element is non-zero, swap it with the last non-zero element
    if (nums[current] !== 0) {
      // Swap current element with the last non-zero element
      [nums[current], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[current]];

      // Increment the last non-zero element pointer
      nonZeroIndex++;
    }

    // Move to the next element
    current++;
  }
};
