/* Basic 13 Algorithms                                                          
TEAM MEMBERS: Stephen Lebel, Merton Myers, John Parker
Xue Vang
Josh Cornell
for loop
    1,    2 ,3
(var i=0, i<5, i++ )
{
    console.log(i);
}

out: 0,1,2,3,4

John Parker
1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  // code goes here
  // create a for loop
  //  starting at 1
  //  ending at 255,
  //  increment by 1;
  //  console.log(i)

  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  // code goes here
  for (i=1; i<=128, i++){
      var temp = (i*2)-1;
      console.log(temp);
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  for (i=0; i<=255, i++){
    var sum;
    sum = (i + sum);

    console.log(i);
    console.log(sum);

}

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// Input array: [1,4,65,34,78]
// arr[1]=4;
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  // code goes here
  for (i=0; i<arr.length ; i++){
      
    console.log(arr[i])

  }

}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print the largest element.
// input:  [5,7,2,4,89,6,1]
// arr[4]=89 for (i=0; i<7 ; i++){ 
// 1st, 2nd, 3rd, 4th... these are ordinal positions
// index: ordinal number - 1: we start at 0 -> 1 ->

// if: check if a condition is true before executing the body of the contained code
// else if: the previous conditions were not met but we have another to check
// else: all previous conditions are false so take this action
// output: 89
function PrintMaxOfArray(arr) {
  // code goes here
  var max = arr[0];
  for (var i = 1; i < arr.length; i++){
    // 0, 1, 2, 3... length-3, length-2, length-1, X
    if (arr[i] > max){
      max = arr[i];
    }
  }
  console.log(max);
}

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// input: [5,2,7,8,5,9,10]
// output: 6.5
function PrintAverageOfArray(arr) {
  // code goes here
  let total = arr.length;
  let sum = 0;
  for(let i = 0; i <= total - 1; i++){
    sum = sum + arr[i];
  }
  // console.log(sum/total);
  return sum/total;
}

console.log(PrintAverageOfArray([5,2,7,8,5,9,10]));

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// output: [1,3,5,7,9,...,253, 255]
function ReturnOddsArray1ToN(n) {
  // code goes here
  let arr = [];
  for(let i = 1; i <= n; i += 2){
    arr[arr.length] = i;
  }
  return arr;
}

console.log(ReturnOddsArray1ToN(255));

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,26,64,100]
function SquareArrayVals(arr) {
  // code goes here
  let squared = [];
  for(let i = 0; i < arr.length; i++){
    squared[i] = arr[i] ** 2;
  }
  return squared;
}

console.log(SquareArrayVals([2,4,6,8,10]));

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
  let greater = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > y){
      greater++;
    }
  }
  console.log(greater);
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  for (var i = 0; i<arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  return arr;
}
console.log(ZeroOutArrayNegativeVals([1, -1, 2, -3, 4, -4, 5]))

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function printMaxMinAverageArrayVals(arr) {
  // code goes here
  var max = arr[0];
  var min = arr[0];
  var sum = arr[0];
  
    for 
  
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
}
