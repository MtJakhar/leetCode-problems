// timeC = O(n) spaceC = O(1)
const firstUniqChar = (s) => {
  // create object
  let counter = {};
  // for of loop iterates over each letter in string
  for (let letter of s) {
    // with for of loop creates key with (counter[letter]) and value with (counter[letter] ||0) +1
    counter[letter] = (counter[letter] || 0) + 1;
  }

  // for in looks at the value of each key in object
  for (let letter in counter) {
    // first time letter count is 1, return postion of the index of that letter in orginal "s" string
    if (counter[letter] === 1) {
      return s.indexOf(letter);
    }
  }
  // return -1 if  all letters repeat
  return -1;
};
