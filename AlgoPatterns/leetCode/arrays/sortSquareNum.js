// Given an integer array nums sorted in non-decreasing order, return an array
// of the squares of each number sorted in non-decreasing order.

//(naive) solution
nums = [-4, -1, 0, 3, 10];

const sortedSquares = (nums) => {
  //   first square numbers in array
  let answer = nums.map((element) => {
    return element ** 2;
  });
  // create compare function to order it in non-decreasing, otherwise unicode sort...
  return answer.sort((a, b) => a - b);
  // sort has a time Complexity of O(n log n), which is not ideal
};

console.log(sortedSquares(nums));

nums = [-4, -1, 0, 3, 10];

// better version with O(n) Time C
const sortedSquares2 = (nums) => {
  // using array constructor rather than [], cause you can fill array with 0s
  // which can be replaced, also unshifting is O(N) which will make this a
  // O(N^2), Array constructor with arrayIdx-- is much better
  let newArray = new Array(nums.length).fill(0);
  let left = 0;
  let right = nums.length - 1;
  let arrayIdx = nums.length - 1;

  while (left <= right) {
    let squareRight = nums[right] ** 2;
    let squareLeft = nums[left] ** 2;
    if (squareRight > squareLeft) {
      newArray[arrayIdx] = squareRight;
      right--;
    } else {
      newArray[arrayIdx] = squareLeft;
      left++;
    }
    arrayIdx--;
  }
  return newArray;
};

console.log(sortedSquares2(nums));

// The time complexity of this solution is O(n), where n is the length of the input array nums. This is because we perform a single pass through the nums array. The space complexity is O(n) as well, since we use an additional array of the same size as nums to store the squared numbers.
