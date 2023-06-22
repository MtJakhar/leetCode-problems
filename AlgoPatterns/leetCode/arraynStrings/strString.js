function strStr(haystack, needle) {
  // Handle edge cases
  if (needle === "") {
    return 0; // An empty needle is always found at the beginning
  }

  if (haystack.length < needle.length) {
    return -1; // Needle is longer than haystack, impossible to find
  }

  // Iterate through the haystack
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    // Check if current substring matches the needle
    let j;
    for (j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break; // Mismatch found, break the inner loop
      }
    }

    // If the inner loop completed without breaking, we found the needle
    if (j === needle.length) {
      return i; // Return the starting index of the needle in haystack
    }
  }

  return -1; // Needle not found in haystack
}
