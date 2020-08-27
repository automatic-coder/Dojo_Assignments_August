/* 
Predict the output:
TEAM MEMBERS:  
Josh Cornell
Binbin Mu
Jeffrey Yi
kahlil bello
*/
function a(arr) {
    b = arr.length;

    var temp = arr[b - 1];
    arr[b - 1] = arr[0];
    arr[0] = temp;
    return arr;
  }
  
  console.log(a([1, 2, 3]));
  console.log(a([2, 4]));
  
  // output: ?
  //[3,2,1]
  //[4,2]  
  
  
  
  
  // 2
  function bar(arr){
    var x = arr.length;
    
    for( var i =0; i<x/2; i++){
      var temp = arr[x-i-1]; // arr[(x-1)-i]
      arr[i] = arr[x-i-1];
      arr[x-i-1] = temp;
    }
    return arr;
  }
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  //  Theory* bar([3,3,3,3,5,6,7,8]) == [8,7,6,5,5,6,7,8]

  /*
  T DIAGRAM
  var | val
  x = 3 
  i = 0 -> 1
  i<2 = 1.5
  temp = 3 -> 2
  arr[0] = 3
  arr[2] = 3
  //loop 2
  arr[i] is array [1] = 2
  arr[x-i-1] is array [1] = 2 
  
  */
  // output: ?
  // [3,2,3]
  //[8,7,6,5,5,6,7,8]