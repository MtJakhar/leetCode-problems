// Given an integer array nums and an integer val, remove all occurrences of val
// in nums in-place. The relative order of the elements may be changed.

// Return k after placing the final result in the first k slots of nums.

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

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

const removeElement4 = (nums, val) => {
  let k = 0; // Represents the number of elements not equal to val

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      // If the element is not equal to val, move it to the front of the array
      nums[k] = nums[i];
      k++;
    }
  }

  return k; // Return the number of elements not equal to val
};

// my first version, creating my own splice method timeC => O(N^2) doesn't work cause leetcode is retarded and is asking for the answer in the dumbest way possible.
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
