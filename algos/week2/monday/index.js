/**
 * 
 * MEMBERS: 
 * 
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 * 
 *  i         j
 * [5,2,4,3,1,6]
 *    i     j
 * [6,2,4,3,1,5]
 *      i j
 * [6,1,4,3,2,5]
 *        i
 * [6,1,3,4,2,5]
 * 
 */

function reverseInPlace(arr) {
    let temp, last, mid;
    last = arr.length - 1;
    mid = Math.floor(arr.length / 2);
    for (var i = 0; i < mid; i++) {
      // store: store the variable you want to overwrite first
      // overwrite: overwrite the variable you stores with the one you are swapping
      // restore: overwrite the swapped variable with the value you stored
      // item at index i, and item at index (last - i)
      swap(temp, arr, i, last);
    }
    return arr;
  //   return arr.reverse();
  }

  function swap(temp, arr, i, last){
    temp = arr[i];
    arr[i] = arr[last - i];
    arr[last - i] = temp;
  }

 console.log(reverse([5,2,4,3,1,6]));