const reverseString = (s) => {
  // first create a pointers for the left and right index of the string
  let left = 0;
  let right = s.length - 1;

  // loop until left is greater than right
  while (left < right) {
    // create a temp var which holds one of the indexs
    let temp = s[left];
    // switch left and right indexs
    s[left] = s[right];
    s[right] = temp;
    // increment left and decrement right
    left++;
    right--;
  }
  return s;
};
// tC = O(n) sC = O(1)
