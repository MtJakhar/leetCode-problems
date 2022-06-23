// Frequency Counter Pattern
// given two strings, write a function to determine if the second string is an anagram of the first.
// Time Complexity of O(n) || Space Complexity of O(1)

const validAnagram = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) {
    return false;
  }
  let freqCount1 = {};
  let freqCount2 = {};

  for (let val of firstWord) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }

  for (let val of secondWord) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }

  for (let key in freqCount1) {
    //comparing key/letter
    if (!(key in freqCount2)) {
      return false;
    }
    //comparing values/count
    if (freqCount1[key] !== freqCount2[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("muizz", "zzium"));
