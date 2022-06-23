// BubbleSort Pseudocode
// 	• Start looping from with a variable called I the end of the array towards the beginning
// 	• Start an inner loop with a variable called j from the beginning until I - 1
// 	• If arr[j] is greater than arr[j+1], swap those two values
// Return the sorted array

//Naive solution
const BubbleSort = (array) => {
  //create a for loop with index of i, loop left to right
  for (let i = 0; i < array.length; i++) {
    //Start an inner loop with a variable called j from the beginning until I - 1
    for (let j = 0; j < array.length; j++) {
      // If arr[j] is greater than arr[j+1], swap those two values
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  // Return sorted array
  return array;
};

BubbleSort([5, 3, 4, 1, 2]);

const BubbleSort2 = (array) => {
  //create a for loop with index of i, loop left to right
  let noSwaps;
  for (let i = array.length; i > 0; i--) {
    //Start an inner loop with a variable called j from the beginning until I - 1
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // If arr[j] is greater than arr[j+1], swap those two values
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  // Return sorted array
  return array;
};
