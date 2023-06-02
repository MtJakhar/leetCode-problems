// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
(numsOne = [1, 2, 3, 0, 0, 0]), (mm = 3), (numsTwo = [2, 5, 6]), (nn = 3);

// second solution
const merge = (nums1, m, nums2, n) => {
  let i = m + n - 1; // Pointer for the last position of the merged array
  let first = m - 1; // Pointer for the last element of nums1 (sorted portion)
  let second = n - 1; // Pointer for the last element of nums2

  while (second >= 0) {
    let fVal = nums1[first]; // Value of the element in nums1
    let sVal = nums2[second]; // Value of the element in nums2

    if (fVal > sVal) {
      // If the element in nums1 is larger, place it at the end of the merged array
      nums1[i] = fVal;
      i--; // Decrement the pointer for the merged array
      first--; // Decrement the pointer for nums1
    } else {
      // If the element in nums2 is larger or equal, place it at the end of the merged array
      nums1[i] = sVal;
      i--; // Decrement the pointer for the merged array
      second--; // Decrement the pointer for nums2
    }
  }
};

console.log(merge(numsOne, mm, numsTwo, nn));
