const removeDuplicates = (nums) => {
  //     create pointer at index 0
  let pointer = 0;
  //     create loop which loop through array and compares each number to pointer
  for (index = 1; index < nums.length; index++) {
    //         compare number to pointer if it is not the same move index, if num is diff, move pointer and change next index over to that unique value
    if (nums[pointer] !== nums[index]) {
      pointer++;
      nums[pointer] = nums[index];
    }
  }
  //     return amount of unique values
  return pointer + 1;
};

// time complexity is O(n), while the space is O(1)
