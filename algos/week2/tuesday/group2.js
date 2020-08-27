/**
 * MEMBERS:
 * Steven Wittkopf
 *
 * Given in a array, return the same array in sorted order from least to greatest.
 *
 * input: [3,7,8,9,4,5,1,2,6]
 * output:[1,2,3,4,5,6,7,8,9]
 */
// In the outer loop, control for the stopping point of the inner loops. Start at the end and go to zero.
// In the inner loop, iterate to the stopping point, swapping adjacent elements when the left is bigger than the right
// Adjacent elements:
function bubbleSort(arr) {
  //loop
  let i, bound, temp, done;
  // outer loop
  for (bound = arr.length - 1; bound > 0; bound--) {
      // inner loop
      done = true;
      for (i = 0; i < bound; i++) {
      // Check if the item at i is greater than its right hand neighbor
         if (arr[i] > arr[i + 1]) {
            // swap arr[i] <-> arr[i+1]: store, overwrite, restore
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            done = false;
         }
      }
      if (done) {
         break;
      }
   }
   return arr;
}

// Take each subsequent maximum and move it to the end of the array
function selectionSort(arr) {
  let i, bound, max, temp;
  for (bound = arr.length - 1; bound > 0; bound--) {
    max = 0;
    for (i = 1; i < bound; i++) {
      if (arr[i] > arr[max]) {
        max = i;
      }
    }
    if (max < bound) {
      temp = arr[max];
      arr[max] = arr[bound];
      arr[bound] = temp;
    }
  }
  return arr;
}

// bubble sort, insertion sort, selection sort
// merge sort, quick sort, shell (sedgewick), heap sort

console.log(bubbleSort([3, 7, 8, 9, 4, 5, 1, 2, 6]));
[3, 7, 8, 4, 5, 1, 2, 6, 9];
