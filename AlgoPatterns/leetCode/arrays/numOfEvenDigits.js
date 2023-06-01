// Given an array nums of integers, return how many of them contain an even number of digits
array = [1, 12, 3232, 22222, 222, 2222];

// this solution is a TimeC = O(n^2) and SpaceC = O(1) Naive solution
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
    if (digitCounter(nums[i]) % 2 === 0) {
      evenNums++;
    }
  }
  return evenNums;
};

console.log(findNumbers(array));

// TimeC = O(N) and SpaceC = O(N), Better solution for timeC

const findNumbers2 = (nums) => {
  // create counter for num of evens
  let evenCount = 0;
  // Loop thorugh array at convert num[i] to a string and get its length to get number of digits
  for (let i = 0; i < nums.length; i++) {
    // Converting to string takes additional space, hence O(N)
    let number = nums[i].toString();
    // use modelo to check if string num length is even if even add to even counter
    if (number.length % 2 === 0) {
      evenCount++;
    }
  }

  // return even count
  return evenCount;
};
