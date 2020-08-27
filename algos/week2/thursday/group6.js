/**
 *
 * MEMBERS:
 * Shawn Converse
 * ben
 * Allen "Dez" Valdez
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */
// arr.splice(i, 1);
function moveZeros(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1); // removes the zero and shifts all elements to the left
      arr.push(0); // adds the zero to the end
    }
  }
  return arr;
}




function moveZeros(arr) {
    var length = arr.length;
    console.log("The length of the array is: " + length)
    for (var i = 0; i < length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1); // removes the zero and shifts all elements to the left
            arr.push(0); // adds the zero to the end
            length--;
        }
        console.log("The loop position is: " + i);
    }
    return arr;
}

console.log(moveZeros([2, 5, 0, 7, 0, 2, 0, 8, 7]));
