// recursive solution
const climbStairs = (n) => {
  let countingFunc = (stairsLeft, saveResults) => {
    if (stairsLeft < 0) return 0;
    if (stairsLeft === 0) return 1;

    if (saveResults[stairsLeft]) {
      return saveResults[stairsLeft];
    }

    saveResults[stairsLeft] =
      countingFunc(stairsLeft - 1, saveResults) +
      countingFunc(stairsLeft - 2, saveResults);

    return saveResults[stairsLeft];
  };

  return countingFunc(n, {});
};
