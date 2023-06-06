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

const checkIfExist2 = (arr) => {
  const seen = new Set(); // Create a Set to store seen elements

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];

    if (seen.has(current * 2) || seen.has(current / 2)) {
      // Check if the double or half of the current element is already seen
      return true; // If found, return true
    }

    seen.add(current); // Add the current element to the set
  }

  return false; // If no such pair is found, return false
};

// space complexity and time complexity are both O(n)
