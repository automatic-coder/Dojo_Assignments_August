/**
 *
 * MEMBERS:
 * Jeffrey Yi
 * Xue Vang
 * Kristen San Martin
 * Jakeya Jake French
 * Given an array of positive integers and a target number, return a pair of numbers that sum up to the target number. You may return this pair in an array.
 *
 * input: [1,3,7,8,5,2], 12
 * output: [7,5]
 */

function twoNumSum(arr, target) {  
  var newarray = [];
   for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length -1; j++) {
     if (arr[i] + arr[j] ==target) {
       newarray.push(arr[i], arr[j]);
       return newarray;
     }    
    }
  }
}
    



     twoNumSum([1, 3, 7, 8, 5, 2], 12); 
       