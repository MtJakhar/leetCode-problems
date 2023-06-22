var addBinary = function (a, b) {
  let result = ""; // Store the final binary sum
  let carry = 0; // Initialize the carry to 0

  // Start from the last digit and move towards the first digit
  let i = a.length - 1;
  let j = b.length - 1;

  // Perform binary addition until we process all digits
  while (i >= 0 || j >= 0) {
    // Get the current digits or assume 0 if we have processed all digits
    const digitA = i >= 0 ? Number(a[i]) : 0;
    const digitB = j >= 0 ? Number(b[j]) : 0;

    // Calculate the sum of the current digits and the carry
    const sum = digitA + digitB + carry;

    // Determine the new carry and the bit to be added to the result
    carry = Math.floor(sum / 2);
    const bit = sum % 2;

    // Prepend the bit to the result string
    result = bit + result;

    // Move to the next digits
    i--;
    j--;
  }

  // If there is still a carry after processing all digits, add it to the result
  if (carry > 0) {
    result = carry + result;
  }

  return result;
};

const addBinary2 = (a, b) => {
  let result = "";
  let carry = 0;

  let indexA = a.length - 1;
  let indexB = b.length - 1;

  while (indexA >= 0 || indexB >= 0) {
    const digitA = indexA >= 0 ? Number(a[indexA]) : 0;
    const digitB = indexB >= 0 ? Number(b[indexB]) : 0;

    const sum = digitA + digitB + carry;

    carry = Math.floor(sum / 2);
    const bit = sum % 2;
    result = bit + result;

    i--;
    j--;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
};

const addBinary3 = (a, b) => {
  // create a string for result and carry
  let result = "";
  let carry = 0;
  // create var for ab and b starting at hte end of the strings
  let indexA = a.length - 1;
  let indexB = b.length - 1;

  // loop until both are at element 0
  while (indexA >= 0 || indexB >= 0) {
    // create select current index for both a nad b
    let digitA = indexA >= 0 ? Number(a[indexA]) : 0;
    let digitB = indexB >= 0 ? Number(b[indexB]) : 0;

    let sum = digitA + digitB + carry;

    carry = Math.floor(sum / 2);

    let bit = sum % 2;
    result = bit + result;

    indexA--;
    indexB--;
  }

  if (carry > 0) {
    result = carry + result;
  }

  return result;
};
