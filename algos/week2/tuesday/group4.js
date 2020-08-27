/**
 * MEMBERS:
 * Jaime Cazares, Xue Vang, Alex Lee, John Parker
 *
 *
 * Given in a array, return the same array in sorted order from least to greatest.
 * 
 * input: [3,7,8,9,4,5,1,2,6]
 * output:[1,2,3,4,5,6,7,8,9]
 */

function sort(arr) {
  for (var j = 0; j < arr.length; j++) {
    console.log("j ", j)
    for (var i = 0; i < arr.length; i++) {
      console.log("i ", i)
      if (arr[i] > arr[i + 1]) {
        console.log("SWAPPING")
        console.log(arr[i], arr[i+1])
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(sort([3, 7, 8, 9, 4, 5, 1, 2, 6]));
