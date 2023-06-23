function longestCommonPrefix(strs) {
  // If the input array is empty, there is no common prefix
  if (strs.length === 0) {
    return "";
  }

  // Set the initial prefix as the first string in the array
  let prefix = strs[0];

  // Iterate through the remaining strings
  for (let i = 1; i < strs.length; i++) {
    // Keep removing characters from the prefix until it becomes a prefix of the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);

      // If the prefix becomes empty, there is no common prefix
      if (prefix === "") {
        return "";
      }
    }
  }

  return prefix;
}
