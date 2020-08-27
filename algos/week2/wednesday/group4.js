/**
 *
 * MEMBERS:
 * Micheal Ross, Steven Wittkopf, John Parker, Adrian Espiritu
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

// n^2, use an inner loop and outer loop to check for summing pairs. Computationally expensive
// n log(n), sort the array and then use binary search to seek out paired elements: doesn't necessarily return the first occurence of a sum pair..
// n, using a set store visited values. Upon each iteration, see if the difference of the goal and the current element are present in the set. Uses more memory.
function twoNumSum(arr, target) {
  let i, j, difference;
  for (i = 0; i < arr.length - 1; i++) {
    difference = target - arr[i];
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] == difference) {
         return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

function twoNumSumLinear(arr, target) {
  let visited = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (visited.has(target - arr[i])) {
      return [target - arr[i], arr[i]];
    } else {
      visited.add(arr[i]);
    }
  }
  return -1;
}

twoNumSum([1, 3, 7, 8, 5, 2], 12);
