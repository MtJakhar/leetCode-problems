//how to remove first element and push all others to the left
let array = [1, 2, 3, 4, 5, 6, 7];

const shift = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr.length--;
  // or arr.pop()
  return arr;
};

console.log(shift(array));
