// Given a binary array nums, return the maximum number of consecutive 1's in the array.
let array = [1, 1, 0, 1, 1, 1];
let array2 = [1, 0, 1, 1, 0, 1];

const findMaxConsecutiveOnes = (nums) => {
  //   create a value holder
  let currentMax = 0;
  let finalMax = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      currentMax++;
      finalMax = Math.max(currentMax, finalMax);
    } else {
      currentMax = 0;
    }
  }
  return finalMax;
};

console.log(findMaxConsecutiveOnes(array));

// timeC = O(n) while spaceC = O(1)

// const findMaxConsecutiveOnes = (nums) => {
// 	let counter = 0;
// 	let counter2 = 0;

//   for(let i = 0; i < nums.length; i++){
//   	if(nums[i] === 1) {
//     	counter++
//     }
//     if(counter > counter2) {
//     	counter2 = counter
//     }
//     if(nums[i] === 0){
//     	counter = 0
// 		}
//   }

//   return counter2;
// }
