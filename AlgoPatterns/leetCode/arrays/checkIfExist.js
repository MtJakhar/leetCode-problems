// my naive solution
const checkIfExist = (arr) => {
  let pointer = 0;
  let answer = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
        answer = true;
        break;
      }
    }
  }
  return answer;
};
