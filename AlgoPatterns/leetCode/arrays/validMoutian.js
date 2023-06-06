// valid mountian array
// Given an array of integers arr, return true if and only if it is a valid mountain array.

const validMountainArray = (arr) => {
  // create variable that will hold peak index
  let peak = 0;
  // create termination conditions
  if (arr.length < 3) return false;
  if (arr[1] < arr[0]) return false;

  // Loop through array starting at index 1
  for (let i = 1; i < arr.length; i++) {
    // if current index is equal to previous index return false
    if (arr[i] === arr[i - 1]) return false;
    // if precious index is greater than current index return
    if (arr[i - 1] > arr[i]) {
      // set peak to the larger number
      peak = i - 1;
      // break out of loop
      break;
    }
  }
  // now loop through remaining array starting at peak
  for (let i = peak; i < arr.length; i++) {
    // if current index is larger than next index return false
    if (arr[i] <= arr[i + 1]) return false;
  }
  return true;
};

const validMountainArray2 = (arr) => {
  const n = arr.length;
  let i = 0;

  // Step 1: Check for a valid uphill climb
  while (i < n - 1 && arr[i] < arr[i + 1]) {
    i++;
  }

  // Step 2: Check for the peak of the mountain
  if (i === 0 || i === n - 1) {
    return false; // If the peak is at the start or end, it's not a valid mountain
  }

  // Step 3: Check for a valid downhill descent
  while (i < n - 1 && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1; // Return true if we reach the end of the array
};

// both solutions are tc = o(n), sc= o(1)
