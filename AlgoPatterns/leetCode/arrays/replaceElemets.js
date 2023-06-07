// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.
// solution

let arr1 = [17, 18, 5, 4, 6, 1];
let arr2 = [18, 6, 6, 6, 1, -1];

const replaceElements = (arr) => {
  // create variable with a value of -1
  let max = -1;
  // loop through array from the end to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // create variable which which compares max with current index, choose the greater of the two
    let newMax = Math.max(arr[i], max);
    // set current variable to max
    arr[i] = max;
    // let max equal to the newmax
    max = newMax;
  }
  return arr;
};

// time C of O(n), space complexity O(1)

console.log(replaceElements(arr1));
