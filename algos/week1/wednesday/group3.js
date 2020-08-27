    /* 
Predict the output:
TEAM MEMBERS:  
Allen "Dez" Valdez
Kristen San Martin 
Jason Ford
Ben                                    
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
  [3,2,1]
  [4,2]
  
  
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
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  
  // output: ?
[3,2,3]
[8,7,6,5,5,6,7,8]
