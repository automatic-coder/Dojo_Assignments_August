/* 
Predict the output:
TEAM MEMBERS:  
James
Gary

*/
function a(arr) {
  b = arr.length;

  var temp = arr[b - 1];                 //arr[2,4],[2,2],[4,2]
  arr[b - 1] = arr[0];                   //b=2
  arr[0] = temp;                         //temp=4
  return arr;
}

console.log( a([1, 2, 3]) );
console.log( a([2, 4]) );

// output: [3,2,1], [4,2]


// 2
function bar(arr){
  var x = arr.length;
  
  for( var i =0; i<x/2; i++){
    var temp = arr[x-i-1];
    arr[i] = arr[x-i-1];
    arr[x-i-1] = temp;
  }
  return arr
}
// arr  => [1,2,3], [3,2,3], [3,2,3]
// temp => 3, 2
// i    => 0, 1
// x    => 3

// x  =>  3
/ i => 0/ 2
//
//nsole.log(bar([1,2,3]))
console.log(bar([1,2,3,4,5,6,7,8]))

// output: ?