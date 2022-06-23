// Selection sort Pseudocode
// Store the first element as the smallest value you've seen so far
// • Compare this item to the next item in the array until you find a smaller number
// If a smaller number is found, designate that smaller number to be the new minimum and continue until
//  the end of the array.
// • If the minimum is not the value you initially began with, swap the two
// values Repeat this with the next element until the array is sorted

const selectionSort = (array) => {
  // • Store the first element as the smallest value you've seen so far
  // • Compare this item to the next item in the array until you find a smaller number
  for (let i = 0; i < array.length; i++) {
    // • If a smaller number is found, designate that smaller number to be the new minimum and
    // continue until the end of the array.
    let minimum = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minimum] > array[j]) {
        minimum = j;
      }
    }
    //  • If the minimum is not the value you initially began with, swap the two values Repeat this with the next
    // element until the array is sorted
    if (i !== minimum) {
      [array[i], array[minimum]] = [array[minimum], array[i]];
    }
  }
  return array;
};

selectionSort([0, 2, 34, 22, 10, 19, 17]);
