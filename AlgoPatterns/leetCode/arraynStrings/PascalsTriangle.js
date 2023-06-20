const generate = (numRows) => {
  const triangle = []; // Initialize an empty array to store the triangle

  // Iterate over each row
  for (let i = 0; i < numRows; i++) {
    const row = []; // Create a new array to represent the current row

    // Iterate over each element in the current row
    for (let index = 0; index <= i; index++) {
      if (index === 0 || index === i) {
        // If the element is the first or last in the row, set it to 1
        row.push(1);
      } else {
        // Calculate the element by summing the two elements directly above it from the previous row
        const previousRow = triangle[i - 1];
        const num = previousRow[index - 1] + previousRow[index];
        row.push(num);
      }
    }

    // Add the current row to the triangle
    triangle.push(row);
  }

  // Return the generated Pascal's Triangle
  return triangle;
};
