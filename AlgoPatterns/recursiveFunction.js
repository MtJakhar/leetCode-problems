// here is an example of a recursive function
const countDown = (num) => {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
};

// second example
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

// Helper method recursion

function outer(input) {
  var outerScopedVariable = [];
  function helper(helperInput) {
    // modify the outer scoped variable
    helper(helperInput--);
  }

  helper(input);
  return outerScopedVariable;
}
