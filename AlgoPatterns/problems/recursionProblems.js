//write a function called power which accepts a base and an exponent. The
//function should return the power of the base to the exponent.

const power = (base, exponent) => {
  //create base case
  if (exponent === 0) return 1;

  //implement recursion
  return base * power(base, exponent - 1);
};

// const power = (base, exponent) => {
//   //create exception
//   if (exponent === 0) {
//     return 1;
//   }
//   //first make a variable that takes answer
//   let result = 1;

//   const helper = (base2, exponent2) => {
//     //make base case
//     if (exponent2 <= 0) {
//       console.log("all done!!");
//       return;
//     }
//     //create formula
//     result *= base2;
//     exponent2--;
//     //recursion
//     helper(base2, exponent2);
//   };

//   helper(base, exponent);

//   return result;
// };

//write a function factorial which accepts a number and returns the factorial of that number.

const factorial = (number) => {
  //write exception
  if (number === 0) return 1;
  //write the base case
  if (number === 1) return 1;

  //write the formula for factorial
  return number * factorial(number - 1);
};

factorial(0);

//write a fucntion called productOfArray which takes in an array of numbers and returns the product of them all

const productOfArray = (array) => {
  //create base case
  if (array.length === 0) return 1;

  return array[0] * productOfArray(array.slice(1));
};

// const productOfArray = (array) => {
//   //create exception
//   if (array.length === 0) return "array is empty";

//   //first create variable to store product
//   let product = 1;

//   //create a helper function to go through array and multiply elements and store total value in product
//   const helper = (array1) => {
//     //create base case
//     if (array1.length === 0) return;
//     //take first value of array and multiply to product
//     product *= array1.at(-1);
//     //remove first value of array
//     array1.pop();

//     //then do recusion
//     return helper(array1);
//   };

//   helper(array);

//   return product;
// };

//write a funtion called recursive range which accepts a number and adds up all
//the from 0 to the number passed to the fucntion

const recursiveRange = (number) => {
  //base ends at zero
  if (number === 0) return 0;

  return number + recursiveRange(number - 1);
};

//write a recursive function called fib which accepts a number and returns the
//nth number in the Fibonacci sequence.

const fib = (number) => {
  //base case
  if (number === 2) return 1;

  return fib(number - 1) + fib(number - 2);
};

// const fib = (number) => {
//   // create variable for fib total or create an array
//   let array = [1];

//   const helper = (num) => {
//     if (num === 0) return;

//     if (array.length === 1) {
//       array.push(1);
//     } else {
//       array.push(array.at(-1) + array.at(-2));
//     }

//     helper(num - 1);
//   };

//   helper(number);

//   // return index based on parameter
//   return array[number - 1];
// };

// fib(10);

//write a recursive function which takes a string and returns a new string reversed
const reverse = (str) => {
  //exception
  if (str.length < 1) return "no string here";
  //empty array
  let array = [];
  //helper function
  const helper = (string) => {
    if (string.length === 1) return string[0];
    //target each element in string in reverse order and add to array
    console.log(array.push(string.slice(-1)));

    return helper(string.slice(-1));
  };

  //call helper function
  helper(str);

  return array.join("");
  //return new string
};

reverse("muizz");

let str = "muizz";
str.slice(-1);
