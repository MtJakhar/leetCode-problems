// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.
// solution

let arr1 = [17, 18, 5, 4, 6, 1];
let arr2 = [18, 6, 6, 6, 1, -1];

const replaceElements = (arr) => {
  let rightMax = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    let newMax = Math.max(arr[i], rightMax);
    arr[i] = rightMax;
    rightMax = newMax;
  }
  return arr;
};

console.log(replaceElements(arr1));
