// tC = O(n)

var fizzBuzz = function (n) {
  // create an empty array which stores values
  let array = [];
  // create variable num which is added to array and is incremented based on n
  let num = 0;
  // create loop until it reachs n
  for (let i = 0; i < n; i++) {
    num += 1;
    // if num / 3 true return fizz
    // if num / 5 return buzz
    // if num / 15 return fizzbuzz
    if (num % 15 === 0) {
      array.push("FizzBuzz");
    } else if (num % 3 === 0) {
      array.push("Fizz");
    } else if (num % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(`${num}`);
    }
  }
  return array;
};
