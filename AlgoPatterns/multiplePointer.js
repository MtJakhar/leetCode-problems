// Multiple Pointer The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a
// pair does not exist. Time Complexity of O(n) || Space Complexity of O(1)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// Tester
let array1 = [];

const countUniqueValues = (array) => {
  //check if array is empty
  if (array.length === 0) {
    return console.log("No values in array");
  }
  //create a multiple pointers compares unique values of array
  //one pointer has initial index while second is the next index over
  let pointer = 0;
  //iterate through array and compare index with pointer if index is diff
  //than pointer change index and move pointer right else move index right
  for (let index = 1; index < array.length; index++) {
    if (array[index] !== array[pointer]) {
      array[pointer] === array[index];
      pointer++;
    }
  }
  return pointer + 1;
};

console.log(countUniqueValues(array1));
