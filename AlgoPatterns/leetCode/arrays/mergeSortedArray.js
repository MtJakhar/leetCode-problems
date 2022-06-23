// You are given two integer arrays nums1 and nums2, sorted in non-decreasing
// order, and two integers m and n, representing the number of elements in nums1
// and nums2 respectively.
(numsOne = [1, 2, 3, 0, 0, 0]), (mm = 3), (numsTwo = [2, 5, 6]), (nn = 3);

const merge = (nums1, m, nums2, n) => {
  // create third pointer "i" put at end of nums 1
  let pointer = nums1.length - 1;
  // loop through nums1
  for (pointer; pointer > nums1[0]; pointer--) {
    if (nums2[n] > nums1[m]) {
      nums1[pointer] = nums2[n];
      n--;
    } else if (nums2[n] < nums1[m]) {
      nums1[pointer] = nums1[m];
      m--;
    } else if (nums2[n] === nums1[m]) {
      break;
    } else {
      console.log(error);
    }
  }
  return nums1;
};

console.log(merge(numsOne, mm, numsTwo, nn));
