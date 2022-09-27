// timeC = O(n) spaceC = o(n)

const plusOne = (digits) => {
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

  console.log(newdigits);
};
