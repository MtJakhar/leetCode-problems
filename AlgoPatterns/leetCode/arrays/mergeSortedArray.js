// You are given two integer arrays nums1 and nums2, sorted in non-decreasing
// order, and two integers m and n, representing the number of elements in nums1
// and nums2 respectively.
(numsOne = [1, 2, 3, 0, 0, 0]), (mm = 3), (numsTwo = [2, 5, 6]), (nn = 3);

// second solution
const merge = (nums1, m, nums2, n) => {
  let i = m + n - 1;
  let first = m - 1;
  let second = n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      first--;
    } else {
      nums1[i] = sVal;
      i--;
      second--;
    }
  }
};

console.log(merge(numsOne, mm, numsTwo, nn));
