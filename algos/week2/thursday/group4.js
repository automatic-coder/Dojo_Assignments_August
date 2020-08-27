/**
 *
 * MEMBERS:
 * Binbin Mu
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */

function moveZerosNewArr(arr) {
  let newArr = arr.filter((x) => x != 0);
  while (newArr.length < arr.length) {
    newArr.push(0);
  }
  return newArr;
}

// start at the end
// everytime we find a 0, left shift all items until there is an open spot for the zero at the end
function moveZerosInPlace(arr) {
  let j,
    lastNonZero = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      if (i < lastNonZero) {
        for (j = i; j < lastNonZero; j++) {
          arr[j] = arr[j + 1];
        }
        arr[lastNonZero] = 0;
      }
      lastNonZero--;
    }
  }
  return arr;
}

// [a, 0, b, 0, c]
// [3, 1]
// numZeros := 2
function moveZerosInPlaceLinear(arr) {
  let i,
    numZeros,
    stack = [];
  for (i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 0) {
      stack.push(i);
    }
  }
  if (stack.length == arr.length){
      return arr;
  }
  else if (stack.length > 0) {
    numZeros = stack.length;
    for (i = stack.pop() + 1; i < arr.length; i++) {
      if (stack.length > 0 && i == stack[stack.length-1]) {
        stack.pop();
      }
      else {
        arr[i - (numZeros - stack.length)] = arr[i];
      }
    }
    for (i = arr.length - numZeros; i < arr.length; i++){
        arr[i] = 0;
    }
  }
  return arr;
}
console.log(moveZerosInPlaceLinear([2, 5, 0, 7, 0, 2, 0, 8, 7]));

console.log(moveZerosNewArr([2, 5, 0, 7, 0, 2, 0, 8, 7]));
console.log(moveZerosInPlace([2, 5, 0, 7, 0, 2, 0, 8, 7]));

