/**
 *
 * MEMBERS:
 * Binbin Mu
 * Allen "Dez" Valdez
 * Sean Prescod
 * Kahlil Bello
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] == target) {
        sum++;
        console.log(
          'These are the pairs that sum up the Target number ' +
            arr[i] +
            ' and ' +
            arr[j]
        ); //if statement
      } //inner loop
  } //outer loop
  return sum;
} //function

let sum = twoNumSum([1, 3, 7, 8, 5, 2, 4], 12);

console.log(sum + ' total pairs...');

// [1,2,3]
// [1,1,2,2,3,3]

function theTwoSum(arr, target) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        total++;
        console.log('Pairs ' + arr[i] + ' and ' + arr[j]);
      }
    }
  }
  return total;
}

console.log(theTwoSum([1, 3, 7, 8, 5, 2, 4], 12) + ' total pairs...');

// i for-loop
// target - arr[i] = res
// findIndex of res -> return the index of res
// give a number [1, 3, 7, 8, 5, 2, 4], 8
// if the index of res != i
// push arr[i] to newArr

let newArr = [];
let res;
let index;

function twoSum_method2(arr, target) {
  for (let i = 0; i < array.length; i++) {
    res = target - arr[i];
    index = findIndex(element => element === res);
    if (index !== i && index !== -1){
       newArr.push(arr[i]);
    }
  }
  console.log(newArr);
}
