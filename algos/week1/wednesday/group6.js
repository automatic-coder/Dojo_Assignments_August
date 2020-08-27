/* 
Predict the output:
TEAM MEMBERS:  John Parker,

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
  
  // output: [3,2,1], [4,2]
  
  // 2
  function bar(arr){
    var x = arr.length;
    // temp=3
    // arr[0]=3
    // arr[2]=3
    // 3,2,3

    // x = 8, i = 0; temp = arr[7]; arr[0] = 8; arr[7] = 8;
    // arr[7] == 8
    // i = 1 
    for( var i =0; i<x/2; i++){
      //i=0 i<x/2
      var temp = arr[x-i-1];
      arr[i] = arr[x-i-1];
      arr[x-i-1] = temp;
      //arr[]
    }
    return arr
  }
  console.log(bar([1,2,3]))
  console.log(bar([1,2,3,4,5,6,7,8]))
  
  // output: [3,2,3],[8,7,6,5,4,5,6,7,8]


  /*
  i=0, x=8, 
  temp=arr[7]=8
  arr[0]=arr[7]=8
  arr[7]=temp=8

  i=1; x=8
  temp=arr[6]=7
  arr[1]= arr[6]=7
  arr[6]=7

  i=2; x=8
  temp=arr[5]=6
  arr[2]=arr[5]=6
  arr[5]=6

  i=3, x=8
  etc

  i=4, x=8
*/