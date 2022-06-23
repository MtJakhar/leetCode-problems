// Given an array nums of integers, return how many of them contain an even number of digits
array = [1, 12, 3232, 22222, 222, 2222];

const findNumbers = (nums) => {
  // make a digit counter
  const digitCounter = (number) => {
    let digits = 0;

    while (number > 0) {
      number = Math.floor(number / 10);
      digits++;
    }
    return digits;
  };
  // make a even number variable
  let evenNums = 0;
  for (i = 0; i < nums.length; i++) {
    if (digitCounter(nums[i]) % 2 == 0) {
      evenNums++;
    }
  }
  return evenNums;
};

console.log(findNumbers(array));
