// iterative solution
// TimeC = O(n) spaceC = O(1); for both solutions
const reverseString = (s) => {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  return s;
};

// rescursive solution

const reverseString2 = (s) => {
  if (s.length == 0) {
    return;
  }
  var temp = s[0];
  s.shift();
  reverseString(s);
  s.push(temp);
};

const reverseString3 = (s) => {
  const reverse = (start, end, string) => {
    if (start >= end) {
      return;
    }
    let temp = string[start];
    string[start] = string[end];
    string[end] = temp;

    reverse(start + 1, end - 1, string);
  };
  reverse(0, s.length - 1, s);
};
