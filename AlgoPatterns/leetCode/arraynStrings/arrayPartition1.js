const arrayPairSum = (nums) => {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let sum = 0;
  // Iterate over the array, skipping one element each time
  for (let i = 0; i < nums.length; i += 2) {
    // Add the smaller element of each pair to the sum
    sum += nums[i];
  }

  return sum;
};
