// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

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

const generateTri = (num) => {
  // first create an array holding triangle values in 2d arr
  let triangle = [];
  // create a loop which will create a triangle is a num number of rows.
  for (let triSection = 0; triSection < num; triSection++) {
    // create a var for row which shall hold current rows values
    let row = [];
    // create a for loop which shall help create rows the row length shall be based on current section
    for (let rowElement = 0; rowElement <= triSection; rowElement++) {
      // if current index is 0 or it is the last on for this row then the value to be push will be 1
      if (rowElement === 0 || rowElement === triSection) {
        row.push(1);
      } else {
        // otherwise we shall add the previous values above and push that into the row array
        let prevVal = triangle[triSection - 1][rowElement - 1];
        let prevVal2 = triangle[triSection - 1][rowElement];
        let num = prevVal + prevVal2;
        row.push(num);
      }
    }
    // Add the current row to triangle
    triangle.push(row);
  }
  // return full trianlge
  return triangle;
};
