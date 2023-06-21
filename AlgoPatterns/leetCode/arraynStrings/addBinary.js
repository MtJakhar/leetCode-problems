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
