/* 
Predict the output:
TEAM MEMBERS:
-Steven Wittkopf
-Carlos U
-Jaime Cazares
*/

function a(arr) {
  var b = arr.length;

  var temp = arr[b - 1]; //store
  arr[b - 1] = arr[0]; //overwrite
  arr[0] = temp; //restore
  return arr;
}

console.log(a([1, 2, 3]));
console.log(a([2, 4]));

var arr = [1, 2];
arr[0] = arr[1];
arr[1] = arr[0];
// arr: [2, 2]

// 2
function bar(arr) {
  var x = arr.length;
  // questions to ask when writing a for loop:
  // - where do I start? var i = 0, create the iterative variable i, start at 0 or the beginning of the array
  // - how long do I keep going? i < arr.length/2 go up to half of the length of the array
  // - What happens each pass of the loop? loop body
  // - What happens after each pass? i++ change i by adding 1
  for (var i = 0; i < x / 2; i++) {
    // assignment statement: take a variable, give it a value
    // replaces the ith item with the last-ith item
    var temp = arr[x - 1 - i];
    arr[i] = arr[x - 1 - 1];
    arr[x - 1 - i] = temp;
  }
  return arr;
}
console.log(bar([1, 2, 3]));
console.log(bar([1, 2, 3, 4, 5, 6, 7, 8]));

// output:
// [3, 2, 3]
// [8, 7, 6, 5, 5, 6, 7, 8]
