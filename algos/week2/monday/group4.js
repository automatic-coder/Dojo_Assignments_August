/**
 *
 * MEMBERS:
 * Raoul Soumah
 * Kahlil Bello
 * Nate Roe
 * Adrian Espiritu
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */

function reverse(arr) {
  var reversedArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i]);
  }
  return reversedArray;
}



console.log(reverse([5, 2, 4, 3, 1, 6]));
