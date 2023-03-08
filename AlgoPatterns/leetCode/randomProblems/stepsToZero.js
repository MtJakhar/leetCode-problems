// tC = o(N)
var numberOfSteps = function (num) {
  // create step tracker variable
  let step = 0;
  // create while loop until num is 0
  while (num !== 0) {
    // if num is odd -1
    // if num is even /2
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num -= 1;
    }
    step += 1;
  }

  return step;
};
