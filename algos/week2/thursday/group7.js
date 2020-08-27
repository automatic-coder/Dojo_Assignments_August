/**
 *
 * MEMBERS:
 * Josh Cornell, John Parker
 *
 * Given an array of Integers move all the values of zero to the end of the array while keeping the order of the rest of the numbers
 *
 * input: [2,5,0,7,0,2,0,8,7]
 * output: [2,5,7,2,8,7,0,0,0]
 *
 */

//
function moveZeros(arr) {
    let counter = 0;
    let newArr = [];
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] === 0){
          counter++;
      }else newArr.push(arr[i]);
  }

  for(let i = 0; i < counter; i++){
      newArr.push(0);
  }
  return newArr;
}

console.log(moveZeros([2, 5, 0, 7, 0, 2, 0, 8, 7]));
