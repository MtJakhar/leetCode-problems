// T(C) = O(N), S(C)=O(N)

var runningSum = function (nums) {
  // create variable which keeps track of running sum
  let runningSum = 0;
  // create new empty array to hold new running values
  let newNums = [];
  // loop through nums and add each new index to runningSum
  for (let i = 0; i < nums.length; i++) {
    runningSum += nums[i];
    // once added add running sum to newNums
    newNums.push(runningSum);
  }
  // return newArray
  return newNums;
};
