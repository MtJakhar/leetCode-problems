// timeC = O(N) spaceC = O(n)

const singleNumber = (nums) => {
  const ht = {};

  for (const num of nums) {
    ht[num] = ht[num] + 1 || 1;
  }

  for (const key in ht) {
    if (ht[key] === 1) {
      return key;
    }
  }
};
