// timeC = O(n) spaceC = o(n)
// this was my first attempt at solving this. It didnot pass all test cases.
const plusOneBeta = (digits) => {
  let string = "";

  for (let i = 0; i < digits.length; i++) {
    string = string.concat(digits[i].toString());
  }

  string = parseInt(string);
  string++;

  string = string.toString();

  let newdigits = [];

  for (let i = 0; i < string.length; i++) {
    newdigits.push(parseInt(string[i]));
  }

  return newdigits;
};

// timeC = O(n), spaceC = O(1)
const plusOne = (digits) => {
  // loop through the array starting from the rear
  for (let i = digits.length - 1; i >= 0; i--) {
    // if digit is less than 9 add 1 and return updated array;
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // becuase current digit is 9, set it to zero
    digits[i] = 0;
  }
  // if all digits are 9 , we need to add a 1 to the beginning of the array.
  digits.unshift(1);
  return digits;
};
