/**
 * MEMBERS:
 * Ben
 * Nate Roe
 * Allen "Dez" Valdez
 * Jakeya Jake French
 * Given in a array, return the same array in sorted order from least to greatest.
 * console.log("i: ", i)
 * input: [3,7,8,9,4,5,1,2,6]
 * output:[1,2,3,4,5,6,7,8,9]
 */

function sort(arr) {
  // Start looping for array
  //Swap higher index number with lower index number
  //Repeat until no swaps are required
  for (var j = 0; j < arr.length; j++) {
                                             //Goes through the loop the amount of number sin the array
    for (var i = 0; i < arr.length; i++) {
                                             // Goes through arr once

      if (arr[i] > arr[i + 1]) {
                                             // if the index of the array is greater than the next index in the array
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }                                      // swaps the indexes
    }
  }
  return arr;
}
sort([3, 7, 8, 9, 4, 5, 1, 2, 6]);

