// Given a binary array nums, return the maximum number of consecutive 1's in the array.
let array = [1, 1, 0, 1, 1, 1];
let array2 = [1, 0, 1, 1, 0, 1];

const findMaxConsecutiveOnes = (nums) => {
  //   create a value holder
  let currentMax = 0;
  let finalMax = 0;

  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++;
      finalMax = Math.max(currentMax, finalMax);
    } else {
      currentMax = 0;
    }
  }
  return finalMax;
};

console.log(findMaxConsecutiveOnes(array));
