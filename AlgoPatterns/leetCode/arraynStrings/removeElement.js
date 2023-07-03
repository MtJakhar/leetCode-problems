const removeElement = (nums, val) => {
  // create a pointer variable which tracks number of vals not equal to val
  let notVal = 0;
  //   iterate over each element in te array
  for (let i = 0; i < nums.length; i++) {
    // if current element is not equal to val removed
    if (nums[i] !== val) {
      // make current element equal to the position of the notVal
      nums[notVal] = nums[i];
      //   increment notVal pointer
      notVal++;
    }
  }
  //   return new notVal
  return notVal;
};

// timeC = O(n) ,spaceC = O(1)
