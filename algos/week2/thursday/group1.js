/**
 *
 * MEMBERS:
 * Kristen San Martin
 * Alex Lee
 * Mertin Myers
 * James Dale
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */

function moveZeros(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      temp = arr[i + 1];
      arr[i + 1] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}

console.log(moveZeros[(2, 5, 0, 7, 0, 2, 0, 8, 7)]);

//

function moveZeros(arr) {
  var output = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      output.push(arr[i]);
    }
    if (arr[i] == 0) {
      output.push(arr[i]);
    }
  }
  return output;
}
console.log(moveZeros[(2, 5, 0, 7, 0, 2, 0, 8, 7)]);




//

function moveZeros(arr) {
  for (var j = 0; j < arr.length; j++){    
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i - 1] === 0 && arr[i] !== 0) {
        temp = arr[i - 1];
        arr[i + 1] = arr[i];
        arr[i] = temp;
      }
      return arr;
    }
    return arr;
}
}
console.log(moveZeros[2, 5, 0, 7, 0, 2, 0, 8, 7]);
