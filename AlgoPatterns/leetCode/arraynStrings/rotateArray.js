// create helper function
const reverse = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  // Get the actual rotation steps by taking modulo k with the array length.
  k = k % nums.length;

  // Reverse the entire array.
  reverse(nums, 0, nums.length - 1);

  // Reverse the first k elements.
  reverse(nums, 0, k - 1);

  // Reverse the remaining elements after k.
  reverse(nums, k, nums.length - 1);
};

// timeC = O(n), spaceC = O(1)
