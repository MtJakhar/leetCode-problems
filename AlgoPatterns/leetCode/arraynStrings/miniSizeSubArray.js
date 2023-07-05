const minSubArrayLen = (s, nums) => {
  let minLength = Infinity; // Initialize the minimum length to Infinity
  let sum = 0; // Initialize the sum of the current window
  let start = 0; // Start of the window

  for (let end = 0; end < nums.length; end++) {
    // Iterate over the array
    sum += nums[end]; // Add the current number to the sum

    while (sum >= s) {
      // Shrink the window from the left side
      minLength = Math.min(minLength, end - start + 1); // Update the minimum length
      sum -= nums[start]; // Subtract the number at start from the sum
      start++; // Move the start pointer to the right
    }
  }

  return minLength !== Infinity ? minLength : 0; // Return the minimum length, or 0 if no subarray found
};
