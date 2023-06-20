const spiralOrder = (matrix) => {
  // Handle empty matrix case
  if (matrix.length === 0) return [];

  // create an empty array which will hold spiral order
  const result = [];
  // create variables which keep track of the toprow, bottomrow, leftColumn, rightColumn
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftColumn = 0;
  let rightColumn = matrix[0].length - 1;

  while (topRow <= bottomRow && leftColumn <= rightColumn) {
    // Traverse top row from left to right
    for (let i = leftColumn; i <= rightColumn; i++) {
      result.push(matrix[topRow][i]);
    }
    topRow++;

    // Traverse right column from top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      result.push(matrix[i][rightColumn]);
    }
    rightColumn--;

    // Check if there are more rows
    if (topRow <= bottomRow) {
      // Traverse bottom row from right to left
      for (let i = rightColumn; i >= leftColumn; i--) {
        result.push(matrix[bottomRow][i]);
      }
      bottomRow--;
    }

    // Check if there are more columns
    if (leftColumn <= rightColumn) {
      // Traverse left column from bottom to top
      for (let i = bottomRow; i >= topRow; i--) {
        result.push(matrix[i][leftColumn]);
      }
      leftColumn++;
    }
  }

  return result;
};
//   Space Complexity: The space complexity of this solution is O(m+n) because the output array (result) is not counted in the space complexity analysis. We only use a constant amount of extra space for the variables used to track the boundaries and indices.

// Time Complexity: The time complexity of this solution is O(m * n), where m is the number of rows and n is the number of columns in the matrix. We iterate through all the elements in the matrix exactly once, and the number of iterations is proportional to the total number of elements in the matrix, which is m * n. Therefore, the time complexity is quadratic in terms of the matrix size.
