// Insertion Sort Pseudocode
// 	• Start by picking the second element in the array
// 	• Now compare the second element with the one before it and swap if necessary.
// 	• Continue to the next element and if it is in the incorrect order, iterate through the sorted portion to place the element in the correct place
// Repeat until the array is sorted

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    for (let j = i - 1; j >= 0 && arr[j] > value; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = value;
  }
  return array;
};

insertionSort([2, 1, 9, 76, 4]);

const insertionSort2 = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      } else {
        break;
      }
    }
  }
  return array;
};
