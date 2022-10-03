// timeC = o(n) spaceC = o(n)

const containsDuplicate = (nums) => {
  // create a memory
  // go through array and see if what i see now, is something ive seend before
  // if number is never seen before, put it in memory
  // if the number does exist in memory return true

  let memory = {};

  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = "stored mem";
    } else {
      return true;
    }
  }

  return false;
};
// timeC o(nlogn) space = o(1)
const containsDuplicate2 = (nums) => {
  // sort out input array (o nlogn)
  //[1,2,3,1]
  //[1,1,2,3]

  nums.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) return true;
  }
  return false;
};
