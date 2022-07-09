// valid mountian array
// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

const validMountainArray = (arr) => {
  let startOfValley = 0;

  if (arr.length < 3) return false;
  if (arr[1] < arr[0]) return false;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i]) return false;
    if (arr[i - 1] > arr[i]) {
      startOfValley = i - 1;
      break;
    }
  }

  for (let i = startOfValley; i < arr.length - 1; i++) {
    if (arr[i] <= arr[i + 1]) return false;
  }
  return true;
};
