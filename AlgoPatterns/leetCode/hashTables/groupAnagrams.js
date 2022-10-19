// brute force TimeC = O(N*wlogw)
const groupAnagrams = (strs) => {
  let cache = {};
  for (let str of strs) {
    let sortedKey = str.split("").sort().join();

    !cache[sortedKey] ? (cache[sortedKey] = [str]) : cache[sortedKey].push(str);
  }
  return Object.values(cache);
};

const groupAnagrams2 = (strs) => {
  let cache = {};
  const primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];
  for (let str of strs) {
    let key = str
      .split("")
      .reduce((total, char) => total * primes[char.charCodeAt() - 97], 1);

    !cache[key] ? (cache[key] = [str]) : cache[key].push(str);
  }
  return Object.values(cache);
};
