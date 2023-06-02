// how to push all elements of an array right and add to the 0 index
let array = [1, 2, 3, 4, 5, 6, 7];
const unshift = (arr, newElement) => {
  // loop through array, then start loop from end and go to zero index
  for (let i = arr.length - 1; i >= 0; i--) {
    // move current value to the index after it`
    arr[i + 1] = arr[i];
  }
  // add new element to front
  arr[0] = newElement;

  return arr;
};
