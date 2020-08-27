/* Basic 13 Algorithms                                                          
TEAM MEMBERS: 
//luis cardona!!!!!
//Binbin Mu
//Gary Johnson

Go Around 2:
Shawn Converse
Sean Prescod
Raoul Soumah


1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
// function print1To255() {
  // code goes here
// print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255
*/
function printOdds1To255() {
  // code goes here
  //loop for 1 255
  for(var i = 1; i<=255; i++){
  //get odds if stament
  i!==0 f(i % = 1){};
  };
  //log
}

// Gary Johnson
function printOdds1to255(){
    for(var i = 1; i<=255; i++){
        if(i%2!==0){  
          console.log(i)
        }
      }
}


//luis cardona
function printOdds1To255() {
    for(var i = 1; i <+255; i++){
        if(i %2 === 1){
            console.log(i);
        };
    };
}

//Binbin
function printOdds1To255() {
    for(let i = 1; i <= 255; i++){      // for (let i =1; i<=255; i+=2){ console.log(i); }
        if (i % 2 === 1){
            console.log(i);
        }
    }
}



// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()
// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
//
// function PrintIntsAndSum0To255() {
//     for(let i = 1; i <= 255; i++){}

// }

//Gary Johnson
function PrintIntsAndSum0To255() {
    for(var i=0; i<256; i++){
        console.log(i);
        var a = a+i;
        console.log(a);
    }

}

// T diagram
// var      ||  val
// i             3
// a = a+i       3+3
// a             6




// 4. Iterate and Print Array
// Iterate through a given array, printing each value.
// Input array: [1,4,65,34,78]
// Output: 1, 4, 65, 34, 78
// function printArrayVals(arr) {
//   // code goes here
// }

function printArrayVals(arr) {
    for (let i = 0; i<arr.length; i++){
        //i += ;
        console.log(arr[i]);
        b = 4
    };
}


var arr = [3,55,63,22,14,90];
arr = ['dogo', 'domo', 'dogo'];
printArrayVals(arr);
console.log(arr);
console.log(a); // output: 0
console.log(b); // output: undefined

// output:
// dogo 
// domo 
// dogo
// ['dogo', 'domo', 'dogo'] 

// 5. Find and Print Max
// PrintMaxOfArray(arr)
// Given an array, find and print the largest element.
// input:  [5,7,2,4,89,6,1]; if arr[i] > arr [i+1] => arr[i]
// output: 89

// // larger(var a, var b){
// //    if(a>b){
//             return a;
// }else{
//     return b;
// }
// //}

function PrintMaxOfArray(arr) {

    let max =0;
    for(var i = 0; i<arr.length; i++){
        if (arr[i] < max){
            max = max;
        }else{
            max = arr[i];
        }
    console.log(max);
    }
}


// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// input: [5,2,7,8,5,9,10]
// output: 6.5
function PrintAverageOfArray(arr) {
  // code goes here
}

// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// output: [1,3,5,7,9,...,253, 255]
function ReturnOddsArray1To255() {
  for (var num = 1; num < 256; num++) {
    if (num % 2 === 1) {
      return num;
    }
  }
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,36,64,100]
function SquareArrayVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] **2;
  }
  return arr;
}

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  var temp = 0;
  for(var num = 0; num < arr.length; num++){
    if (arr[num]>y){
      temp++;
    }
  }
  console.log(temp);
}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  for(let i = 0; i < arr.length; i++){
    if (arr[i] < 0) {
      arr[i] = 0
    }
  }
  return arr;
}

// 11. Max, Min, Average
// PrintMaxMinAverageArrayVals(arr)
// Given an array, print the max, min and average values for that array.
function PrintMaxMinAverageArrayVals(arr) {
  // code goes here
  var average = 0;
  var min = arr[0];
  var max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
    if (min > arr[i]) {
      min = arr[i]
    }
    if (max < arr[i]) {
      max = arr[i]
    }
  }
  average = average / arr.length;
  console.log('The average of the array is: ' + average);
  console.log('The min of the array is: ' + min);
  console.log('The max of the array is: ' + max);
  // console.log('The min of the array is: ' + Math.min(...arr));
  // console.log('The max of the array is: ' + Math.max(...arr));
  
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
  let temp = 0;
  for (let i = 0; i <= arr.length; i += 2) {
      if ((i + 1) < arr.length) {
          temp = arr[i];
          arr[i] = arr[i+1];
          arr[i + 1] = temp;
      }
  }
  console.log(arr);
} //Shawn


// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  for (let i =0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = "Dojo";
    }
  }
  return arr;
}
