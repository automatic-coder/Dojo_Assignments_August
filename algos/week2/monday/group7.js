/**
 *
 * MEMBERS: Josh Cornell
 * Luis Carddona
 * John Parker
 *
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */

function reverse(arr) {
//   keeps old array
  let temp = 0;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - i - 1] = temp;
  }
  return arr;
}

function newRev(arr){
   //   creates new array
  let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[arr.length - i - 1]);
//   }

  for(let i = arr.length - 1; i >= 0; i--){
     newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverse([5, 2, 4, 3, 1, 6]));
console.log(newRev([5, 2, 4, 3, 1, 6]));
