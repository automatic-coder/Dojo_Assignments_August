/* Basic 13 Algorithms                                                          
TEAM MEMBERS: 
//luis

1. Print 1-255
Print1To255()
Print all the integers from 1 to 255.
output: 1 2 3 4 5 6 7 8 9 10 ... 254 255
*/
function print1To255() {
  // code goes here
  for(var x=0;x<=255;x++) {
    console.log(x);
  }

}
print1To255();

/*
2. Print Odds 1-255
PrintOdds1To255()
Print all odd integers from 1 to 255.
output: 1 3 5 7 9 11 13 15 ... 253 255
*/
function PrintIntsAndSum0To255() {
  // code goes here
  var sum = 0;
  for (let i = 0; i < 256; i++) {
    sum += i;
    console.log(i);
    console.log(sum + ',');
  }
}
// 3. Print Ints and Sum 0-255
// PrintIntsAndSum0To255()

// Print integers from 0 to 255, and with each integer print the sum so far.
// output: 0 0 , 1 1, 2 3, 3 6, 4 10, 5 15 ...
function PrintIntsAndSum0To255() {
  // code goes here
  var sum = 0;
  for (let i = 0; i < 256; i++) {
    sum += i;
    console.log(i);
    console.log(sum + ',');
  }
}

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
// input:  [5,7,2,4,89,6,1]_________________________
// output: 89
//here
function PrintMaxOfArray(arr) {
  // code goes here
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
      console.log(max);
    }
  }
}

// 6. Get and Print Average

// 6. Get and Print Average

// 6. Get and Print Average

// 6. Get and Print Average

// 6. Get and Print Average
// code goes here
// var average = 0;
// for (let i = 0; i < arr.length; i++) {
//   average += arr[i];
// }
// average = average / arr.length;
// console.log(average);

// 6. Get and Print Average
// PrintAverageOfArray(arr)
// Analyze an array’s values and print the average.
// input: [5,2,7,8,5,9,10]
// output: 6.5
function PrintAverageOfArray(arr) {
  var sum = 0;
  var avg = 0;
  for(var i=0; i<arr.length; i++) {
    sum += arr[i];

  }
  avg = sum/arr.length;
  return avg;
}
PrintAverageOfArray();




function PrintAverageOfArray(arr) {
  var sum = 0;
  for(var i=0; i<arr.lenght; i++){
   sum = sum + arr[i];
  
  }

  return sum/arr.lenght;
  
  
}
// 7. Array with Odds
// ReturnOddsArray1To255()
// Create an array with all the odd integers between 1 and 255 (inclusive).
// for (var num = 1; num < 256; num++) {
//   if (num % 2 === 1) {
//     return num;
// output: [1,3,5,7,9,...,253, 255]
function ReturnOddsArray1To255() {
  // code goes here
  var arr=[];
  for(var i=0;i<=255;i++) {
    if(i%2 !== 0) {
      arr.push(i);
    }
  }
  return arr;
}

function ReturnOddsArray1To255() {
  // need an arry
  //need to loop the arry
  //check if it is an odd with the %
  //if it is != then we can push to the set arry
  //return the arry
  var arry = [];
  for( var i =0; i<255; i++){
    if(i %2 != 0){
      arry.push(i);
     }

  }
  
}

// 8. Square the Values
// SquareArrayVals(arr)
// Square each value in a given array, returning that same array with changed values.
// input: [2,4,6,8,10]
// output: [4,16,36,64,100]
function SquareArrayVals(arr) {
  // code goes here 
  for(var i = 0; i<arr.length; i++){
    arr[i] = arr[i] * ar[i];
  }
 return arr;
}



function SquareArrayVals(arr) {


}


// console.log(SquareArrayVals([2,4,6,8,10]));

// 9. Greater than Y
// ReturnArrayCountGreaterThanY(arr, y)
// Given an array and a value Y, count and print the number of array values greater than Y.
function returnArrayCountGreaterThanY(arr, y) {
  // code goes here
  //need an arry
  //loop the arry
  //check if index is > the 
  var countPrint = 0;
  for(var i = 0; i<arr.lenght;i++){
    if(arr[i] > y){
      console.log(arr)
    }
  }

}

function returnArrayCountGreaterThanY(arr, y) {
  // code goes here

}

// 10. Zero Out Negative Numbers
// ZeroOutArrayNegativeVals(arr)
// Return the given array, after setting any negative values to zero.
function ZeroOutArrayNegativeVals(arr) {
  // code goes here
  //need to loop the given arry
  //need to check if is <0 then need to assign curent index to 0
for(var i= 0; i< arr.length; i++ ){
    if(arr[i]<0){
 
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
  for (let i = 0; i < arr.length; i++) {
    average += arr[i];
  }
  average = average / arr.length;
  console.log('The min of the array is: ' + Math.min(...arr));
  console.log('The max of the array is: ' + Math.max(...arr));
  console.log('The average of the array is: ' + average);
}

// 12. Shift Array Values
// ShiftArrayValsLeft(arr)
// Given an array, move all values forward (to the left) by one index, dropping the first value and leaving a 0 (zero) value at the end of the array.
// input: [1,2,3,4,5,6,7]
// ouput: [2,3,4,5,6,7,0]
function ShiftArrayValsLeft(arr) {
  // code goes here
  for(var i = 0; i < arr.length; i++){

    if((i + 1) > arr.length){
      arr[arr.length] = 0;
    }else{
      var temp = arr[i + 1];
      arr[i] = temp;
    }
  }
  console.log(arr);
}

// Josh, i tried this algo and it worked. - Shawn
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
}






// 13. Swap String For Array Negative Values
// SwapStringForArrayNegativeVals(arr)
// Given an array of numbers, replace any negative values with the string 'Dojo'.
function SwapStringForArrayNegativeVals(arr) {
  // code goes here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 'Dojo';
    }
  }
  return arr;
}


