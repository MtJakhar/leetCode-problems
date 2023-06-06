const removeDuplicates = (nums) => {
  if (nums.length === 0) {
    return 0; // If the array is empty, there are no duplicates to remove
  }

  let i = 0; // Pointer to keep track of the last index with a unique value

  for (let index = 1; index < nums.length; index++) {
    // Iterate through the array starting from the second element

    if (nums[index] !== nums[i]) {
      // If the current element is different from the last unique element

      i++; // Increment the pointer to move to the next position
      nums[i] = nums[index]; // Place the distinct element in the next position
    }
    // If the current element is a duplicate, skip it and continue to the next iteration
  }

  return i + 1; // Return the count of unique elements (i + 1)
};

// time complexity is O(n), while the space is O(1)
