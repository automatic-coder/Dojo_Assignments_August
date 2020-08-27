/**
 *
 * MEMBERS:
 *
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */

function moveZeros(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else {
      var temp = arr[i];
      arr[i] = arr[i-count];
      arr[i-count] = temp;
    }
  }
  return arr;
}

console.log(moveZeros([2, 5, 0, 7, 0, 2, 0, 8, 7]));

function moveZeros(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    } else if(count > 0){
      arr[i] = arr[i-count];
    }
  }
  for(var i=arr.length-count; i<arr.length; i++){
      arr[i] = 0;
  }
  return arr;
}  