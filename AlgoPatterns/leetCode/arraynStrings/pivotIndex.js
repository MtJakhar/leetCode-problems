// timeC = O(n) spaceC = o(1)
// exampled array [1,7,3,6,5,6]
const pivotIndex = (nums) => {
  // total sum - leftsum - nums[i] = leftsum
  let totalSum = 0;
  // nums.reduce can also be used to get total sum
  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let leftSum = 0;
  //   i is acting as the pivot index which is to be returned
  for (let i = 0; i < nums.length; i++) {
    // because i is pivot index we dont leftsum += nums[0] started adding to left sum after pivot index is greater than 0.
    if (i != 0) leftSum += nums[i - 1];

    // if nums[3] total sum is 28 | left sums is 11 | pivotindex (i) is 6 | 28 -11 -6 = 11 => 11 ?== 11 | yes
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    }
  }
  //   if noting is returned from for loop return -1 answer as there is no pivot index.
  return -1;
};

const pivotIndex2 = (nums) => {
  // Calculate the total sum of all elements in the array
  const totalSum = nums.reduce((acc, curr) => acc + curr, 0);

  // Initialize the left sum to 0
  let leftSum = 0;

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the sum of elements to the left of the current index is equal to
    // the sum of elements to the right of the current index
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i; // Found the pivot index
    }

    // Add the current element to the left sum
    leftSum += nums[i];
  }

  // If no pivot index is found, return -1
  return -1;
};
