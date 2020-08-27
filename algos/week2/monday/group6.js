/**
 *
 * MEMBERS:
 * Jeffrey Yi
 *
 * Kristen San Martin
 *
 * BinbinMu
 *
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */

function reverse(arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.push(arr[arr.length - 1 - i]);
  }
  return newarr;
}

console.log(reverse([5, 2, 4, 3, 1, 6]));

function reverseInPlace(arr) {
  var temp = 0;
  var n = arr.length;
  for (var i = 0; i < n / 2; i++) {
    temp = arr[i];
    arr[i] = arr[n - 1 - i]; // i=0, n-1-0=5
    arr[n - 1 - i] = temp;
  }
  return arr;
}
console.log(reverseInPlace([5, 2, 4, 3, 1, 6]));

