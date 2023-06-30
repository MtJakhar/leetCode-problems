const twoSum = (numbers, target) => {
  let left = 0; // Pointer to the leftmost element
  let right = numbers.length - 1; // Pointer to the rightmost element

  while (left < right) {
    const sum = numbers[left] + numbers[right]; // Calculate the sum of two elements

    if (sum === target) {
      return [left + 1, right + 1]; // Return the indices (1-based) of the two elements
    } else if (sum < target) {
      left++; // Increment the left pointer if the sum is less than the target
    } else {
      right--; // Decrement the right pointer if the sum is greater than the target
    }
  }

  return []; // If no solution is found, return an empty array
};

//   SpaceC = O(1), TimeC = O(n)
