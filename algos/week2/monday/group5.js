/**
 *
 * MEMBERS: df
 * Merton Myers
 * Xue Vang
 * Allen "Dez" Valdez
 * 
 * Given an array of integers values, return an array with the same values in reverse order
 * input: [5,2,4,3,1,6]
 * output: [6,1,3,4,2,5]
 */
                                                   T diagram
                                                   1<3
                                                   1=4
                                                   4
                                                   
                                                   

function reverse(arr) {
  for (var i =0; i < arr.length/2; i++){
    var temp = arr[arr.length-1-i];
    arr[arr.length-1-i] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
console.log(reverse([5, 2, 4, 3, 1, 6]));

/* T-Diagram
var                   value
i                     0-->1-->2-->3
temp                  6-->1-->3
arr[arr.length-1-i]   (first iteration) 6-->5, (second)  1-->2, (third)  3-->4  
arr[i]                (first iteration) 5-->6, (second)  2-->1, (third)  4-->3

*/
/* var newarr[];
function reverse(arr){
  for (var i = 0; i < arr.length; i++){
    newarr.push(arr[arr.length-1-i)]
    return newarr;
  }
}
console.log(reverse(5,2,4,3,1,6)); */
