/**
 *
 * MEMBERS:
 * Luis Cardona
 * Jeffrey Yi
 * Nate Roe
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */

//1 newArr
function moveZeros(arr) {
  //loop
  //new arr
  //if stament
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(moveZeros([2, 5, 0, 7, 0, 2, 0, 8, 7]));
                                            
//2 Same arr                                
function moveZeros(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] == 0) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = temp;     
        }
    }
  }
  return arr;
}
console.log(moveZeros([2, 5, 0, 7, 0, 2, 0, 8, 7]));


