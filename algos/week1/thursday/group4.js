/* Basic 13 Algorithms                                                          
TEAM MEMBERS: 
Xue Vang, Adrian Espiritu, Jason Ford, Kahlil Bello

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  // code goes here
}
// print1To255();

//###########################################################################################

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255*/

function printOdds1To255() {
  // code goes here
  /*
  -run through a loop to check every value from 1 to 255
  -compare each value if it is divisible by 2 
  -if it is divisible by 2, then it is even
  -if not, it is odd, print out that value
  */

  for (var i = 1; i <= 255; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  printOdds1To255();
}

//###########################################################################################

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  /* -run through a loop to check every value from 0 to 255
     -create an extra variable in order to keep track of the total sum  
  */
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    console.log(i);
    sum = sum + i;
    console.log(sum);
  }

  return sum;
}
PrintIntsAndSum0To255();

//###########################################################################################

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
  // code goes here
  /* -run through a loop to check every value from index 0 to the final index
     -print out every read value
  */
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
var array = [1, 4, 65, 34, 78];
printArrayVals(array);

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print the largest element.
// input:  [5,7,2,4,89,6,1]
// output: 89
function PrintMaxOfArray(arr) {
  // code goes here
  /* -run a code to inspect every number in the array
     -create a temporary variable in function to hold the max and assign it to 0
     -run a for loop to go through the indexes
     -check if max is less than the value of the current array index
     -if max is less, reassign the value of max to the value of that array.
     -return the value of max to the user.
  */
  var max = 0;
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      //arr[i] <--
      max = arr[i];
    } //end if statement
  } //end for loop
  return max;
}
var array = [5, 7, 2, 4, 89, 6, 1];
console.log(PrintMaxOfArray(array));

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// input: [5,2,7,8,5,9,10]
// output: 6.5
function PrintAverageOfArray(arr) {
  // code goes here
  var sum = 0;
  for(var i =0; i<arr.length; i++){
    sum +=i;
  }

  return sum/arr.length;
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// output: [1,3,5,7,9,...,253, 255]
function ReturnOddsArray1To255() {
  // code goes here
  var arr = [];

  for(var i=1; i<=255; i+=2){
    arr.push[i];
  }
  console.log(arr);
  return arr;
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,26,64,100]
function SquareArrayVals(arr) {
  // code goes here

      // code goes here
      for ( var i = 0; i < arr.length; 1++){
        arr[i] = arr[i] * arr[i];
      }
      return arr;
}



// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i]> y){
      count++;
    }
    console.log(count);
  }
  // code goes here
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
for (var i = 0; i < arr.length; i++){
  if (arr[i] < 0){
    arr[i] = 0
  }
}
  return arr;
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {

  var min = arr[0];
  var max = arr[0];
  var sum = 0;
  
for (var i = 1; i< arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
  }

  if(arr[i] < min){
    min = arr[i];
  }
  
  sum += arr[i];

}
  var avg = sum/arr.length;

  console.log("min is " + min);
  console.log("max is " + max);
  console.log(avg);
  // console.log("average is " + (sum/(arr.length)));
  // code goes here
}

main (){

  getMin(arr, 5);

}

// function minMax (arr, n){
// static int getMin(int arr[], int n) 
//     { 
//         int res = arr[0]; 
          
//         for (int i = 1; i < n; i++) 
//             res = Math.min(res, arr[i]); 
//         return res; 
//     } 
//     static int getMax(int arr[], int n) 
//     { 
//         int res = arr[0]; 
          
//         for (int i = 1; i < n; i++) 
//             res = Math.max(res, arr[i]); 
//         return res; 
//     } 
// }

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
  
  for (var i=0; i<(arr.length-1); i++){
    arr.length[i] = arr.length[i+1];
  }
  arr[arr.length-1] = 0;
  return;
}

// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  for (var i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  return arr;
  // code goes here
}
