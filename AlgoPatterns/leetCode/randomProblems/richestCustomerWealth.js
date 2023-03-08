// tC = O(n^2) or O(n x m) sC = O(n)
var maximumWealth = function (accounts) {
  let accountWealth = [];
  // iterate though first layer of array to get index of customer store in variable
  // loop through inner array and add to number variable return that variable
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    accountWealth.push(sum);
  }
  return Math.max(...accountWealth);
};

// tC = O(n x m) sC = O(1)
var maximumWealth = function (accounts) {
  let maxWealthSoFar = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    maxWealthSoFar = Math.max(maxWealthSoFar, sum);
  }
  return maxWealthSoFar;
};
