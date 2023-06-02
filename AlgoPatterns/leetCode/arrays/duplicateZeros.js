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

const duplicateZeros2 = (array) => {
  // loop through array
  for (i = 0; i <= array.length; i++) {
    // if zero duplicate it and insert with splice
    if (array[i] === 0) {
      // splice written out
      for (let i = array.length; i >= array[i]; i--) {
        array[i + 1] = array[i];
      }
      // array[i] = 0

      i++;
      //   pop() has been added cause, array must be fixed to original length

      array.pop();
    }
  }

  return array;
};

// better solution Time Complexity is O(N), Space  is O(1)
// error in code below not correct

const duplicateZeros3 = (array) => {
  let countZero = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      countZero++;
    }
  }

  let len = array.length + countZero;

  for (let i = array.length - 1, j = len - 1; i < j; i--, j--) {
    if (array[i] !== 0) {
      if (j < array.length) {
        array[j] = array[i];
      }
    } else {
      if (j < array.length) {
        array[j] = array[i];
      }
      j--;
      if (j < array.length) {
        array[j] = array[i];
      }
    }
  }
};
