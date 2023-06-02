// Given a fixed-length integer array arr, duplicate each occurrence of zero,
// shifting the remaining elements to the right.
let arr = [1, 0, 2, 3, 0, 4, 5, 0];

// my solution

const duplicateZeros = (array) => {
  // loop through array
  for (i = 0; i <= array.length; i++) {
    // if zero duplicate it and insert with splice
    if (array[i] === 0) {
      array.splice(i, 0, 0);
      i = i + 1;
      //   pop() has been added cause, array must be fixed to original length
      array.pop();
    }
  }

  return array;
};

console.log(arr);
console.log(duplicateZeros(arr));

// Time complexity is O(N^2) space is O(n)

// answer without pop
let answer1 = [1, 0, 0, 2, 3, 0, 0, 4, 5, 0, 0];
// answer with pop
let answer2 = [1, 0, 0, 2, 3, 0, 0, 4];

// let arr = [1, 0, 2, 3, 0, 4, 5, 0];

var duplicateZeros2 = function (arr) {
  const length = arr.length;
  let i = 0;

  while (i < length) {
    if (arr[i] === 0) {
      // Shift all elements to the right by one position
      for (let j = length - 1; j > i; j--) {
        arr[j] = arr[j - 1];
      }
      // Insert the duplicated zero at the current position
      arr[i + 1] = 0;
      i += 2; // Increment by 2 since we processed a zero and its duplicate
    } else {
      i++; // Increment by 1 if the current element is not zero
    }
  }
  arr.length = length;
};
