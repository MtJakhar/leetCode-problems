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
      arrray.pop();
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
