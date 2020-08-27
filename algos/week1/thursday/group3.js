/* Basic 13 Algorithms                                                          
TEAM MEMBERS: Alex Lee, 
Kristen San Martin
James Dale
Steven Wittkopf

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/ 
function print1To255() {
  for (var i = 1; i <= 255; i++) {
    console.log(i);
  }
}
// print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  for (var i = 1; i <= 255; i += 2) {
    console.log(i);
  }
}

// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  var sum = 0;
  for (var i = 0; i <= 255; i++) {
    sum += i;
    console.log(i);
    console.log(sum);
    console.log(',')
  }
}

// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
function printArrayVals(arr) {
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
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
  return max;
}

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// input: [5,2,7,8,5,9,10]
// output: 6.5
function PrintAverageOfArray(arr) {
  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    avg += arr[i]; 
  }
  avg /= arr.length;
  console.log(avg);
  return avg;
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// output: [1,3,5,7,9,...,253, 255]
// What are the 4 questions when writing a for loop?
// Where do I start? var i = 1
// How long do I keep going?
// What happens each pass of the loop?
// What happens after each pass
function ReturnOddsArray1To255() {
  var odds = [];
  for (var i = 1; i <= 255; i ++) {
    if(i%2 == 1){
      odd.push(i)
    }
  }
  console.log(odds);
  return odds; 

}

//Steven if you do finish them it'd help me understand how to do them!
//I'm leading a study group either this weekend or in the evening.
// I am hoping to be as much help as possible.
//I'll be there.
// ill be there- james

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,26,64,100]
function SquareArrayVals(arr) {
  // code goes here
  for(let i = 0; i < arr.length; i++){
    arr[i] = arr[i] **2;
  }
  return arr
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
  var count = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > y){
      count += 1;
    }
  }
  return count;
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 0
    }
  }
  return arr
}
ZeroOutArrayNegativeVals([1,5,-3])
[1,5,0]
// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
  var max = arr[0]       
  var min = arr[0]
  var sum = arr[0]
  for (let i = 1; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
      if(arr[i] < min){
        min = arr[i];
      }
      sum += arr[i];
    }
  var avg = sum / arr.length;
  var arrnew[max, min, avg];
  return arrnew;
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
  for(let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i+1];
  }
  arr[arr.length-1] = 0;
  return arr
}


// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      arr[i] = 'Dojo';
    }
  }
  return arr
}