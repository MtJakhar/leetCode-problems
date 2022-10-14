// timeC = O(n) spaceC = O(n)

const containsNearbyDuplicate = (nums, k) => {
  let numsMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (numsMap.has(num) && i - numsMap.get(num) <= k) {
      return true;
    } else {
      numsMap.set(num, i);
    }
  }
  return false;
};
