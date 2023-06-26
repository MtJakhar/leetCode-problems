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
// tc = O(s) sc = O(1)

const longestCommonPrefix2 = (strs) => {
  // If the input array is empty, there is no common prefix, so return an empty string
  if (strs.length === 0) {
    return "";
  }

  // Sort the input array of strings in lexicographical order
  strs.sort();

  // Get the first and last string from the sorted array
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];

  // Find the common prefix between the first and last strings
  let commonPrefix = "";
  for (let i = 0; i < firstStr.length; i++) {
    if (firstStr[i] === lastStr[i]) {
      // If the characters match, add it to the common prefix
      commonPrefix += firstStr[i];
    } else {
      // If the characters don't match, break the loop
      break;
    }
  }

  return commonPrefix;
};
// tc = O(n*m) sc = o(1)

const longestCommonPrefix3 = (strs) => {
  // check for edge case of no strsings
  if (strs.length === 0) return "";
  // sort based on alpha order
  strs.sort();
  // crete var for first and last strsing, if first and last share common prefix all will cause it is in alpha order
  let first = strs[0];
  let last = strs[strs.length - 1];

  // create var for common prefix as empty strsing
  let cPrefix = "";
  for (let i = 0; i < first.length; i++) {
    // check to see if first and last current index are the same, if yes add to cPrefix, else break
    if (first[i] === last[i]) {
      cPrefix += first[i];
    } else {
      break;
    }
  }
  return cPrefix;
};
