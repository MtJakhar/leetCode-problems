// Given an integer array nums and an integer val, remove all occurrences of val
// in nums in-place. The relative order of the elements may be changed.

// Return k after placing the final result in the first k slots of nums.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// my first version, creating my own splice method timeC => O(N^2)
let array = [3, 2, 2, 3];

console.log(array);

const removeElement = (nums, val) => {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      for (j = i + 1; j < nums.length; j++) {
        nums[j - 1] = nums[j];
      }
      nums.length--;
    }
  }
  return nums;
};

console.log(removeElement(array, 3));

// similar code to above but with splice() timeC => O(N^2) this doesnt work
// cause leet doesnt want you to delete elements from end of array

const removeElement2 = (nums, val) => {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

console.log(removeElement2(array, 3));

// best answer works timeC => O(n) SpaceC = O(1)

const removeElement3 = (nums, val) => {
  let index = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i];
      index++;
    }
  }
  return index;
};
