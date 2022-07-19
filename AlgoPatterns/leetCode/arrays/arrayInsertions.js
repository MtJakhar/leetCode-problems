let newArray = new Array(6).fill(0);
let length1 = 0;

for (let i = 0; i < 3; i++) {
  newArray[i] = i;
  length1++;
}

for (let i = 0; i < newArray.length; i++) {
  console.log("Index " + i + " contains " + newArray[i]);
}

// A) Insert a new element at the end of the Array.

// it's important to ensure that there is enough space
// in the array for inserting a new element.
newArray[length1] = 10;
length1++;
console.log(newArray, "insert end/push");

// B) Insert new element at the beginning of the Array

// First, we will have to create space for a new element.
// We do that by shifting each element one index to the right.
// This will firstly move the element at index 3, then 2, then 1, then finally 0.
// We need to go backwards to avoid overwriting any elements.
for (let i = 3; i >= 0; i--) {
  newArray[i + 1] = newArray[i];
}
// Now that we have created space for the new element,
// we can insert it at the beginning.
newArray[0] = 20;
console.log(newArray, "insert beginning/unshift");

// C) Insert Anywhere in Array

for (let i = 4; i >= 2; i--) {
  newArray[i + 1] = newArray[i];
}

newArray[2] = 30;
console.log(newArray, "insert anywhere/splice");
