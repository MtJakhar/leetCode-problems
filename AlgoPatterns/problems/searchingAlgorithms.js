//	• Function accepts an array and a value X
// 	• Loop through the array and check if the current array element is equal to the value
// 	• If it is, return the index at which the element is found If the value is never found, return -1
// linearSearch([10, 15, 20, 25, 30], 15)
const linearSearch = (array, value) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};

linearSearch([10, 15, 20, 25, 30], 15);

// Binary Search
// 	• This function accepts a sorted array and a value
// 	• Create a left pointer at the start of the array, and a right pointer at the end of the array
// 	• While the left pointer comes before the right pointer:
// 		○ Create a pointer in the middle
// 		○ If you find the correct value, return index
// 		○ If the value is too small move the left pointer up
// 		○ If the value is too large, move the right pointer down
//     If you never find the value, return -1

const binarySearch = (array, value) => {
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer <= rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    if (value < array[middlePointer]) {
      rightPointer = middlePointer - 1;
    } else if (value > array[middlePointer]) {
      leftPointer = middlePointer + 1;
    } else {
      return middlePointer;
    }
  }

  return -1;
};

binarySearch([1, 2, 3, 4, 5], 2);

// Naive String Search

const naiveSearch = (long, short) => {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
};

naiveSearch("lorie loled");
