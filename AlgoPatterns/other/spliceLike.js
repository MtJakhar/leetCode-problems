// inserting anywhere in array

const insertElement = (arr, index, element) => {
  // Start iterating from the last element of the array and move towards the specified index.
  for (let i = arr.length - 1; i >= index; i--) {
    // Shift each element to the right by assigning the value of the current element to the next index.
    arr[i + 1] = arr[i];
  }
  // Once the loop reaches the desired index, assign the new element to that index.
  arr[index] === element;
  // After modifying the original array, the function returns the modified array.
  return arr;
};

const insertElement2 = (arr, index, element) => {
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
  }
  arr[index] === element;
  return arr;
};

// delete from anywhere in array

const deleteElement = (arr, index) => {
  // Start iterating from the specified index (index) and move towards the end of the array.
  for (let i = index; i < arr.length - 1; i++) {
    // Shift each element one position to the left by assigning the value of the next element to the current index.
    arr[i] = arr[i + 1];
  }
  // After the loop, reduce the length of the array by one (arr.length = arr.length - 1) to remove the duplicate value at the end.
  arr.length = arr.length - 1;

  return arr;
};

const deleteElement2 = (arr, index) => {
  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;

  return arr;
};
