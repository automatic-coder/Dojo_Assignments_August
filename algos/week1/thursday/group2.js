/* Basic 13 Algorithms                                                          
TEAM MEMBERS: Nate, Jakeya, Ben, Ling
// Gary JOhnson
// Binbin Mu
// Indy Bell
// Jakeya French

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  for (var i = 1; i <= 255; i++) console.log(i);
}
print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  for (var i = 1; i <= 255; i++) if (i % 2 !== 0) console.log(i);
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log(i);
    sum += i;
    console.log(sum);
  }
}
PrintIntsAndSum0To255();

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  // code goes here
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print the largest element.
// input:  [5,7,2,4,89,6,1]
// output: 89
function PrintMaxOfArray(arr) {
  // code goes here
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(max);
}
PrintMaxOfArray([1, 2, 3]);
// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// output: 6.5

function PrintAvgOfArray(arr) {
  for(a=0; a<a.length; a++){
    sum = a + sum;
  }
      var avg = sum / a.length;
      return avg;

PrintMaxofArray([1,2,3])


// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// output: [1,3,5,7,9,...,253, 255]
function ReturnOddsArray1To255() {
  // code goes here
  
}

function ReturnOddsArray1To255() {
  array_returned = [];
  for(var a = 1; a < 256; a++){
    if(a%2 != 0){
      array_returned.push(a);
    }
    return array_returned;
  }
}


// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,26,64,100]
function SquareArrayVals(arr) {
  // code goes here

}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
}

function returnArrayCountGreaterThanY(arr, y) {
  for(var val=0; val<arr.length; val++){ // arr = [5.8,10,12,52,14]
      if(arr[val] > y){                 // arr[val]  
        console.log(arr[val]);
      }
  }
}

y = 22
arr = [5.8,10,12,52,14]
returnArrayCountGreaterThanY(arr, y)


// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.

function ZeroOutArrayNegativeVals(arr) {
  // code goes here
  
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
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
