/**
 *Members: Alex Lee, Raoul Soumah, Jason Ford
 *
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {}
twoNumSum([1, 3, 7, 8, 5, 2], 12);

function twoNumSum(arr, target) {
  var output = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        output.push(arr[i]);
        output.push(arr[j]);
        return output;
      }
    }
  }
}
console.log(twoNumSum([1, 3, 7, 8, 5, 2], 12));
//2*
function twoNumSum(arr, target) {
  var output = [];
  const givarr = {};
  for (let i in arr) {
    const j = target - arr[i];
    if (j in givarr) {
      output.push(j, arr[i]);
      return output;
    }
    givarr[arr[i]] = i;
  }
  return 'target not found';
}

console.log(twoNumSum([1, 3, 7, 8, 5, 2], 12));