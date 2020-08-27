/**
 *
 * MEMBERS:
 * Shawn Converse
 * Sean Prescod
 * Micheal Ross
 *Jaime Cazares
 *
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */

function reverseNewArray(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseNewArray([5, 2, 4, 3, 1, 6]));
// Output: [6,1,3,4,2,5]

function reverseSameArray(arr) {

    return arr;
}
console.log(reverseSameArray([5, 2, 4, 3, 1, 6]));

