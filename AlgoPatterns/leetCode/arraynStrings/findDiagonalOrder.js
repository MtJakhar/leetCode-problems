const findDiagonalOrder = (matrix) => {
  if (matrix.length === 0) return []; // If the matrix is empty, return an empty array
  // var for num of rows
  const rows = matrix.length;
  // var for num of elments with in first array which is the same as the num of col
  const cols = matrix[0].length;
  // create a new array, which will hold new order
  const result = [];

  let row = 0; // Starting row index
  let col = 0; // Starting column index
  let direction = 1; // 1 for moving up, -1 for moving down
  //   result = [1, 2, 4, 7, 5, 3, 6,    ]
  //   direction = -1, row = 1, col = 2

  for (let i = 0; i < rows * cols; i++) {
    result.push(matrix[row][col]);
    row -= direction; // Move up or down
    col += direction; // Move right or left

    if (row >= rows) {
      // If row exceeds the maximum index
      row = rows - 1;
      col += 2;
      direction = -direction; // Change direction to move up
    }

    if (col >= cols) {
      // If column exceeds the maximum index
      col = cols - 1;
      row += 2;
      direction = -direction; // Change direction to move down
    }

    if (row < 0) {
      // If row becomes negative
      row = 0;
      direction = -direction; // Change direction to move down
    }

    if (col < 0) {
      // If column becomes negative
      col = 0;
      direction = -direction; // Change direction to move up
    }
  }

  return result;
};
// The space complexity of this solution is O(1) because we are not using any additional data structures that grow with the input size. The result array is not counted in the space complexity analysis because it is required by the problem's output.

// The time complexity is O(m * n), where m is the number of rows and n is the number of columns in the matrix. We iterate through each element once, so the time complexity is linear with respect to the total number of elements in the matrix.

const findDiagonalOrder2 = (matrix) => {
  if (matrix.length === 0) return result;
  let totalRows = matrix.length;
  let totalCols = matrix[0].length;

  let row = 0;
  let col = 0;
  let direction = 1;
  let result = [];

  for (let i = 0; i < totalRows * totalCols; i++) {
    // row = 3, col = 0, direct -1
    result.push(matrix[row][col]);
    row -= direction;
    col += direction;

    if (row >= totalRows) {
      col += 2;
      row -= 1;
      direction = -direction;
    }

    if (col >= totalCols) {
      col -= 1;
      row += 2;
      direction = -direction;
    }

    if (row < 0) {
      row = 0;
      direction = -direction;
    }

    if (col < 0) {
      col = 0;
      direction = -direction;
    }
  }
  return result;
};
