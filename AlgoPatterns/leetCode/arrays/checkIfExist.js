// Given an array arr of integers, check if there exists two integers N and M such that N is the double of M ( i.e. N = 2 * M).

// More formally check if there exists two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]

// my naive solution
const checkIfExist = (arr) => {
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
        answer = true;
        break;
      }
    }
  }
  return answer;
};

// set

var checkIfExist2 = function (arr) {
  const set = new Set();

  for (const num of arr) {
    if (set.has(num * 2) || set.has(num / 2)) {
      return true;
    }

    set.add(num);
  }

  return false;
};
