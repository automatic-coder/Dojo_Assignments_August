/**
 *
 * MEMBERS:
 * ben
 * Nathan
 *
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] == target) {
          newArr.push(arr[i]);
          newArr.push(arr[j]);
          return newArr;
        }
      }
    }
  }
  return 'There is no solution.';
}

twoNumSum([1, 3, 7, 8, 5, 2], 12);
