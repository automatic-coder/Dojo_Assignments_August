/**
 *
 * MEMBERS:
 * Josh Cornell
 * Gary Johnson
 * Merton Myers
 * Jaime Cazares
 *
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {
  let pair = [];
  let arr1 = arr.slice();

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[i] + arr1[j] === target) {
        pair.push(arr1[i]);
        pair.push(arr1[j]);
        arr1[i] = 0;
        arr1[j] = 0;
      }
    }
  }
//   checks if no pair found
  if (pair === undefined || pair === null) return;
  
  return pair;
}

var x = [9, 1, 3, 7, 8, 5, 2];
twoNumSum(x, 12);

