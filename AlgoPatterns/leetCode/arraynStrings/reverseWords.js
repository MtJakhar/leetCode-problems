const reverseWords = (s) => {
  // Step 1: Trim leading and trailing spaces
  s = s.trim();

  // Step 2: Split the string into an array of words
  const words = s.split(/\s+/);

  // Step 3: Reverse the order of words in the array
  const reversedWords = words.reverse();

  // Step 4: Join the reversed words into a single string
  const reversedString = reversedWords.join(" ");

  // Step 5: Return the reversed string
  return reversedString;
};

// spaceC = O(n) TimeC = O(n)
