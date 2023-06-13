// timeC = o(n), spaceC = o(1)

const dominantIndex = (nums) => {
  let largest = 0;
  let largeIndex = 0;

  // create first for loop which will find largest number
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      largeIndex = i;
    }
  }

  // now compare largest with all elements to see if at least twice as big
  for (let i = 0; i < nums.length; i++) {
    if (largeIndex === i) {
      i++;
    }
    // return -1 if largest si less than 2 time any other element
    if (largest < nums[i] * 2) {
      return -1;
    }
  }

  // return largestIndex if for loops are completed.
  return largeIndex;
};

// nums = [3,6,1,0]

const dominantIndex2 = (nums) => {
  let largest = 0;
  let largeIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > largest) {
      largest = nums[i];
      largeIdx = i;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (i === largeIdx) {
      i++;
    }
    if (largest < nums[i] * 2) {
      return -1;
    }
  }
  return largeIdx;
};
