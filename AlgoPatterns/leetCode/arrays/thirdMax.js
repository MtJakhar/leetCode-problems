// couldnt solve this my self

// TimeC = O(n), SpaceC = O(1)

let thirdMax = function (nums) {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  let thirdMax = -Infinity;

  for (let n of nums) {
    if (n === firstMax || n === secondMax || n === thirdMax) continue;

    if (firstMax < n) {
      thirdMax = secondMax;
      secondMax = firstMax;
      firstMax = n;
    } else if (secondMax < n) {
      thirdMax = secondMax;
      secondMax = n;
    } else if (thirdMax < n) {
      thirdMax = n;
    }
  }
  if (thirdMax === -Infinity) {
    return firstMax;
  } else {
    return thirdMax;
  }
};
